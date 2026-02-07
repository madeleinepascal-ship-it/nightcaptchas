/**
 * NightCaptchas - Main Application Logic
 */

(function () {
    'use strict';

    // ── DOM REFERENCES ──────────────────────────────────────────
    const creatorView = document.getElementById('creator-view');
    const captchaView = document.getElementById('captcha-view');

    // Creator
    const creatorForm = document.getElementById('creator-form');
    const senderNameInput = document.getElementById('sender-name');
    const contactInfoInput = document.getElementById('contact-info');
    const customMessageInput = document.getElementById('custom-message');
    const linkOutput = document.getElementById('link-output');
    const shareLinkInput = document.getElementById('share-link');
    const copyBtn = document.getElementById('copy-btn');
    const previewBtn = document.getElementById('preview-btn');

    // Captcha - Checkbox
    const checkboxStage = document.getElementById('captcha-checkbox-stage');
    const captchaCheckbox = document.getElementById('captcha-checkbox');

    // Captcha - Grid
    const gridStage = document.getElementById('captcha-grid-stage');
    const targetCocktailEl = document.getElementById('target-cocktail');
    const captchaGrid = document.getElementById('captcha-grid');
    const verifyBtn = document.getElementById('verify-btn');

    // Reveal
    const revealStage = document.getElementById('reveal-stage');
    const revealText = document.getElementById('reveal-text');
    const revealCocktailArt = document.getElementById('reveal-cocktail-art');
    const senderInfo = document.getElementById('sender-info');
    const revealName = document.getElementById('reveal-name');
    const revealContact = document.getElementById('reveal-contact');
    const revealCustomMsg = document.getElementById('reveal-custom-msg');
    const backToCreate = document.getElementById('back-to-create');

    // ── STATE ────────────────────────────────────────────────────
    let currentGrid = null;
    let selectedCells = new Set();
    let attempts = 0;

    // ── INIT ────────────────────────────────────────────────────
    function init() {
        bindCreatorEvents();

        const params = parseHash();
        if (params.name) {
            showCaptchaView(params);
        } else {
            showCreatorView();
        }
    }

    // ── URL ENCODING / DECODING ─────────────────────────────────
    function encodeData(data) {
        const json = JSON.stringify(data);
        return btoa(unescape(encodeURIComponent(json)));
    }

    function decodeData(encoded) {
        try {
            const json = decodeURIComponent(escape(atob(encoded)));
            return JSON.parse(json);
        } catch {
            return {};
        }
    }

    function parseHash() {
        const hash = window.location.hash.slice(1);
        if (!hash) return {};
        return decodeData(hash);
    }

    function buildShareUrl(data) {
        const encoded = encodeData(data);
        const base = window.location.origin + window.location.pathname;
        return base + '#' + encoded;
    }

    // ── GATHER FORM DATA ────────────────────────────────────────
    function gatherFormData() {
        const name = senderNameInput.value.trim();
        if (!name) return null;

        const data = { name: name };

        var contact = contactInfoInput.value.trim();
        if (contact) data.contact = contact;

        var msg = customMessageInput.value.trim();
        if (msg) data.msg = msg;

        return data;
    }

    // ── BIND CREATOR EVENTS (once) ──────────────────────────────
    function bindCreatorEvents() {
        creatorForm.addEventListener('submit', function (e) {
            e.preventDefault();
            var data = gatherFormData();
            if (!data) return;

            var url = buildShareUrl(data);
            shareLinkInput.value = url;
            linkOutput.classList.remove('hidden');
        });

        copyBtn.addEventListener('click', function () {
            var url = shareLinkInput.value;
            navigator.clipboard.writeText(url).then(function () {
                copyBtn.classList.add('copied');
                copyBtn.querySelector('span').textContent = 'Copied!';
                setTimeout(function () {
                    copyBtn.classList.remove('copied');
                    copyBtn.querySelector('span').textContent = 'Copy';
                }, 2000);
            }).catch(function () {
                shareLinkInput.select();
                document.execCommand('copy');
            });
        });

        previewBtn.addEventListener('click', function () {
            var data = gatherFormData();
            if (!data) return;
            creatorView.classList.add('hidden');
            showCaptchaView(data);
        });

        backToCreate.addEventListener('click', function () {
            window.location.hash = '';
            captchaView.classList.add('hidden');
            showCreatorView();
        });
    }

    // ── CREATOR VIEW ────────────────────────────────────────────
    function showCreatorView() {
        creatorView.classList.remove('hidden');
        captchaView.classList.add('hidden');
    }

    // ── CAPTCHA VIEW ────────────────────────────────────────────
    function showCaptchaView(senderData) {
        captchaView.classList.remove('hidden');
        creatorView.classList.add('hidden');

        // Reset all stages
        checkboxStage.classList.remove('hidden');
        gridStage.classList.add('hidden');
        revealStage.classList.add('hidden');
        selectedCells.clear();
        attempts = 0;

        // Reset checkbox visual state
        var spinner = captchaCheckbox.querySelector('.spinner');
        var checkmark = captchaCheckbox.querySelector('.checkmark');
        spinner.classList.add('hidden');
        checkmark.classList.add('hidden');

        // Reset reveal elements for re-use
        senderInfo.classList.add('hidden');
        revealContact.classList.add('hidden');
        revealCustomMsg.classList.add('hidden');
        revealText.textContent = '';

        // Checkbox click handler (self-removing)
        var checkboxHandler = function () {
            captchaCheckbox.removeEventListener('click', checkboxHandler);
            captchaCheckbox.removeEventListener('keydown', keyHandler);
            startCheckboxAnimation(senderData);
        };

        var keyHandler = function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                checkboxHandler();
            }
        };

        captchaCheckbox.addEventListener('click', checkboxHandler);
        captchaCheckbox.addEventListener('keydown', keyHandler);
    }

    function startCheckboxAnimation(senderData) {
        var spinner = captchaCheckbox.querySelector('.spinner');

        // Show spinner
        spinner.classList.remove('hidden');

        // After brief delay, transition to grid
        setTimeout(function () {
            spinner.classList.add('hidden');
            checkboxStage.classList.add('hidden');
            showGrid(senderData);
        }, 800 + Math.random() * 600);
    }

    function showGrid(senderData) {
        gridStage.classList.remove('hidden');

        // Generate new grid
        currentGrid = generateCaptchaGrid();
        selectedCells.clear();

        // Set target name
        targetCocktailEl.textContent = COCKTAILS[currentGrid.target].name;

        // Update header color to match cocktail
        var header = gridStage.querySelector('.captcha-header');
        var color = COCKTAILS[currentGrid.target].color;
        header.style.background = color;

        // Ensure text contrast on light backgrounds
        if (['#fdcb6e', '#ffeaa7', '#55efc4', '#dfe6e9'].indexOf(color) !== -1) {
            header.style.color = '#2d3436';
        } else {
            header.style.color = 'white';
        }

        // Build grid cells
        captchaGrid.innerHTML = '';
        currentGrid.cells.forEach(function (cell, index) {
            var cellEl = document.createElement('div');
            cellEl.className = 'grid-cell';
            cellEl.innerHTML = COCKTAILS[cell.key].svg;
            cellEl.dataset.index = index;

            cellEl.addEventListener('click', function () {
                toggleCell(cellEl, index);
            });

            captchaGrid.appendChild(cellEl);
        });

        // Verify button
        verifyBtn.onclick = function () {
            verifyCaptcha(senderData);
        };
    }

    function toggleCell(cellEl, index) {
        if (selectedCells.has(index)) {
            selectedCells.delete(index);
            cellEl.classList.remove('selected');
        } else {
            selectedCells.add(index);
            cellEl.classList.add('selected');
        }
    }

    function verifyCaptcha(senderData) {
        var correctSet = new Set();
        currentGrid.cells.forEach(function (cell, i) {
            if (cell.isTarget) correctSet.add(i);
        });

        // Check if selection matches exactly
        var isCorrect =
            selectedCells.size === correctSet.size &&
            Array.from(selectedCells).every(function (i) { return correctSet.has(i); });

        if (isCorrect) {
            showReveal(senderData);
        } else {
            attempts++;

            // Show error feedback
            var cells = captchaGrid.querySelectorAll('.grid-cell');
            captchaGrid.classList.add('grid-shake');

            // Highlight incorrectly selected cells
            selectedCells.forEach(function (i) {
                if (!correctSet.has(i)) {
                    cells[i].classList.add('incorrect');
                }
            });

            // Also highlight missed correct cells
            correctSet.forEach(function (i) {
                if (!selectedCells.has(i)) {
                    cells[i].style.outline = '2px dashed #e17055';
                    cells[i].style.outlineOffset = '-2px';
                }
            });

            setTimeout(function () {
                captchaGrid.classList.remove('grid-shake');
                cells.forEach(function (c) {
                    c.classList.remove('incorrect');
                    c.style.outline = '';
                    c.style.outlineOffset = '';
                });
            }, 800);

            if (attempts >= 3) {
                // After 3 failed attempts, regenerate with new cocktails
                setTimeout(function () {
                    showGrid(senderData);
                }, 900);
                attempts = 0;
            }
        }
    }

    // ── REVEAL ──────────────────────────────────────────────────
    function showReveal(senderData) {
        gridStage.classList.add('hidden');
        revealStage.classList.remove('hidden');

        // Type out the message with a delay for the verified animation
        typeMessage("let's have a night captcha", revealText);

        // Add cocktail decorations
        revealCocktailArt.innerHTML =
            COCKTAILS.martini.svg +
            COCKTAILS.cosmopolitan.svg +
            COCKTAILS.mojito.svg;
        revealCocktailArt.style.display = 'flex';
        revealCocktailArt.style.justifyContent = 'center';
        revealCocktailArt.style.gap = '0.5rem';
        var svgs = revealCocktailArt.querySelectorAll('svg');
        for (var s = 0; s < svgs.length; s++) {
            svgs[s].style.width = '55px';
            svgs[s].style.height = '55px';
        }

        // Show sender info
        if (senderData.name) {
            senderInfo.classList.remove('hidden');
            revealName.textContent = senderData.name;

            if (senderData.contact) {
                revealContact.classList.remove('hidden');
                revealContact.textContent = senderData.contact;
            }

            if (senderData.msg) {
                revealCustomMsg.classList.remove('hidden');
                revealCustomMsg.textContent = '\u201C' + senderData.msg + '\u201D';
            }
        }
    }

    function typeMessage(message, element) {
        element.textContent = '';
        element.style.opacity = '1';
        element.style.animation = 'none';
        var i = 0;

        function type() {
            if (i < message.length) {
                element.textContent += message.charAt(i);
                i++;
                setTimeout(type, 50 + Math.random() * 40);
            }
        }

        // Start typing after verified badge animation plays
        setTimeout(type, 900);
    }

    // ── BOOT ────────────────────────────────────────────────────
    init();

})();
