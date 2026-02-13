/**
 * NightCaptchas - Main Application Logic
 * Scene-based CAPTCHA: one cocktail image split into a 4x4 grid
 */

(function () {
    'use strict';

    // ── FLOATING HEARTS ──────────────────────────────────────────
    (function spawnHearts() {
        var container = document.getElementById('hearts-container');
        var symbols = ['\u2764', '\u2665', '\u2661'];
        function createHeart() {
            var heart = document.createElement('span');
            heart.className = 'heart';
            heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = (6 + Math.random() * 6) + 's';
            heart.style.animationDelay = (Math.random() * 2) + 's';
            heart.style.fontSize = (0.8 + Math.random() * 1.2) + 'rem';
            heart.style.color = 'rgba(255,' + Math.floor(50 + Math.random() * 80) + ',' + Math.floor(50 + Math.random() * 80) + ',0.6)';
            container.appendChild(heart);
            heart.addEventListener('animationend', function () { heart.remove(); });
        }
        for (var i = 0; i < 8; i++) { setTimeout(createHeart, i * 700); }
        setInterval(createHeart, 1500);
    })();

    // ── HEART BURST ──────────────────────────────────────────────
    function burstHearts(container, count) {
        var symbols = ['\u2764', '\u2665', '\u2661', '\uD83D\uDC95', '\uD83D\uDC96'];
        for (var i = 0; i < count; i++) {
            (function (idx) {
                setTimeout(function () {
                    var h = document.createElement('span');
                    h.className = 'burst-heart';
                    h.textContent = symbols[Math.floor(Math.random() * symbols.length)];
                    var startX = 20 + Math.random() * 60;
                    var startY = 30 + Math.random() * 40;
                    h.style.left = startX + '%';
                    h.style.top = startY + '%';
                    var dx = (Math.random() - 0.5) * 200;
                    var dy = -(40 + Math.random() * 120);
                    var rot = (Math.random() - 0.5) * 60;
                    h.style.setProperty('--dx', dx + 'px');
                    h.style.setProperty('--dy', dy + 'px');
                    h.style.setProperty('--rot', rot + 'deg');
                    h.style.animationDuration = (1.2 + Math.random() * 1) + 's';
                    h.style.fontSize = (0.9 + Math.random() * 0.8) + 'rem';
                    container.appendChild(h);
                    h.addEventListener('animationend', function () { h.remove(); });
                }, idx * 80);
            })(i);
        }
    }

    // ── DOM REFERENCES ──────────────────────────────────────────
    var creatorView = document.getElementById('creator-view');
    var captchaView = document.getElementById('captcha-view');

    // Creator
    var creatorForm = document.getElementById('creator-form');
    var senderNameInput = document.getElementById('sender-name');
    var contactInfoInput = document.getElementById('contact-info');
    var customMessageInput = document.getElementById('custom-message');
    var linkOutput = document.getElementById('link-output');
    var shareLinkInput = document.getElementById('share-link');
    var copyBtn = document.getElementById('copy-btn');
    var previewBtn = document.getElementById('preview-btn');

    // Captcha - Checkbox
    var checkboxStage = document.getElementById('captcha-checkbox-stage');
    var captchaCheckbox = document.getElementById('captcha-checkbox');

    // Captcha - Grid
    var gridStage = document.getElementById('captcha-grid-stage');
    var targetCocktailEl = document.getElementById('target-cocktail');
    var sceneImage = document.getElementById('scene-image');
    var captchaGrid = document.getElementById('captcha-grid');
    var verifyBtn = document.getElementById('verify-btn');

    // Reveal
    var revealStage = document.getElementById('reveal-stage');
    var revealText = document.getElementById('reveal-text');
    var revealCocktailArt = document.getElementById('reveal-cocktail-art');
    var senderInfo = document.getElementById('sender-info');
    var revealName = document.getElementById('reveal-name');
    var revealContact = document.getElementById('reveal-contact');
    var revealCustomMsg = document.getElementById('reveal-custom-msg');
    var backToCreate = document.getElementById('back-to-create');

    // ── STATE ────────────────────────────────────────────────────
    var currentScene = null;
    var selectedCells = new Set();
    var attempts = 0;

    // ── LANDING CAPTCHA ─────────────────────────────────────────
    var landingWrapper = document.getElementById('landing-captcha');
    var landingCheckboxStage = document.getElementById('landing-checkbox-stage');
    var landingCheckbox = document.getElementById('landing-checkbox');
    var landingGridStage = document.getElementById('landing-grid-stage');
    var landingTarget = document.getElementById('landing-target');
    var landingSceneImage = document.getElementById('landing-scene-image');
    var landingGrid = document.getElementById('landing-grid');
    var landingVerifyBtn = document.getElementById('landing-verify-btn');
    var landingScene = null;
    var landingSelected = new Set();
    var landingAttempts = 0;

    function setupLandingCaptcha() {
        // Checkbox handler
        var handler = function () {
            landingCheckbox.removeEventListener('click', handler);
            landingCheckbox.removeEventListener('keydown', kHandler);
            var sp = landingCheckbox.querySelector('.spinner');
            sp.classList.remove('hidden');
            setTimeout(function () {
                sp.classList.add('hidden');
                landingCheckboxStage.classList.add('hidden');
                showLandingGrid();
            }, 800 + Math.random() * 600);
        };
        var kHandler = function (e) {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handler(); }
        };
        landingCheckbox.addEventListener('click', handler);
        landingCheckbox.addEventListener('keydown', kHandler);
    }

    function showLandingGrid() {
        landingGridStage.classList.remove('hidden');
        landingScene = getRandomScene();
        landingSelected.clear();
        landingTarget.textContent = landingScene.name;
        landingSceneImage.innerHTML = landingScene.svg;

        landingGrid.innerHTML = '';
        for (var i = 0; i < 16; i++) {
            var el = document.createElement('div');
            el.className = 'grid-cell';
            el.dataset.index = i;
            (function (cel, idx) {
                cel.addEventListener('click', function () {
                    if (landingSelected.has(idx)) {
                        landingSelected.delete(idx);
                        cel.classList.remove('selected');
                    } else {
                        landingSelected.add(idx);
                        cel.classList.add('selected');
                    }
                });
            })(el, i);
            landingGrid.appendChild(el);
        }

        landingVerifyBtn.onclick = function () { verifyLandingCaptcha(); };
    }

    function verifyLandingCaptcha() {
        var correct = new Set(landingScene.targetCells);
        var ok = landingSelected.size === correct.size &&
            Array.from(landingSelected).every(function (i) { return correct.has(i); });

        if (ok) {
            // Success — dissolve landing, show creator form
            landingWrapper.classList.add('dissolving');
            creatorView.classList.remove('hidden');
            landingWrapper.addEventListener('transitionend', function () {
                landingWrapper.classList.add('gone');
            }, { once: true });
        } else {
            landingAttempts++;
            var cells = landingGrid.querySelectorAll('.grid-cell');
            landingGrid.classList.add('grid-shake');
            landingSelected.forEach(function (i) {
                if (!correct.has(i)) cells[i].classList.add('incorrect');
            });
            correct.forEach(function (i) {
                if (!landingSelected.has(i)) cells[i].classList.add('missed');
            });
            setTimeout(function () {
                landingGrid.classList.remove('grid-shake');
                for (var c = 0; c < cells.length; c++) {
                    cells[c].classList.remove('incorrect');
                    cells[c].classList.remove('missed');
                }
            }, 900);
            if (landingAttempts >= 3) {
                setTimeout(function () { showLandingGrid(); }, 1000);
                landingAttempts = 0;
            }
        }
    }

    // ── INIT ────────────────────────────────────────────────────
    function init() {
        bindCreatorEvents();

        var params = parseHash();
        if (params.name) {
            // Recipients skip landing, go straight to captcha
            landingWrapper.classList.add('gone');
            showCaptchaView(params);
        } else {
            setupLandingCaptcha();
        }
    }

    // ── URL ENCODING / DECODING ─────────────────────────────────
    function encodeData(data) {
        var json = JSON.stringify(data);
        return btoa(unescape(encodeURIComponent(json)));
    }

    function decodeData(encoded) {
        try {
            var json = decodeURIComponent(escape(atob(encoded)));
            return JSON.parse(json);
        } catch (e) {
            return {};
        }
    }

    function parseHash() {
        var hash = window.location.hash.slice(1);
        if (!hash) return {};
        return decodeData(hash);
    }

    function buildShareUrl(data) {
        var encoded = encodeData(data);
        var base = window.location.origin + window.location.pathname;
        return base + '#' + encoded;
    }

    // ── GATHER FORM DATA ────────────────────────────────────────
    function gatherFormData() {
        var name = senderNameInput.value.trim();
        if (!name) return null;

        var data = { name: name };

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
            burstHearts(document.getElementById('link-hearts'), 15);
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

        // Reset reveal elements
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
        spinner.classList.remove('hidden');

        setTimeout(function () {
            spinner.classList.add('hidden');
            checkboxStage.classList.add('hidden');
            showGrid(senderData);
        }, 800 + Math.random() * 600);
    }

    function showGrid(senderData) {
        gridStage.classList.remove('hidden');

        // Pick a random scene
        currentScene = getRandomScene();
        selectedCells.clear();

        // Set target cocktail name
        targetCocktailEl.textContent = currentScene.name;

        // Insert the scene SVG
        sceneImage.innerHTML = currentScene.svg;

        // Build 4x4 grid of clickable transparent cells
        captchaGrid.innerHTML = '';
        for (var i = 0; i < 16; i++) {
            var cellEl = document.createElement('div');
            cellEl.className = 'grid-cell';
            cellEl.dataset.index = i;
            (function (el, idx) {
                el.addEventListener('click', function () {
                    toggleCell(el, idx);
                });
            })(cellEl, i);
            captchaGrid.appendChild(cellEl);
        }

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
        var correctSet = new Set(currentScene.targetCells);

        // Check exact match
        var isCorrect =
            selectedCells.size === correctSet.size &&
            Array.from(selectedCells).every(function (i) { return correctSet.has(i); });

        if (isCorrect) {
            showReveal(senderData);
        } else {
            attempts++;

            var cells = captchaGrid.querySelectorAll('.grid-cell');
            captchaGrid.classList.add('grid-shake');

            // Highlight incorrectly selected cells
            selectedCells.forEach(function (i) {
                if (!correctSet.has(i)) {
                    cells[i].classList.add('incorrect');
                }
            });

            // Highlight missed correct cells
            correctSet.forEach(function (i) {
                if (!selectedCells.has(i)) {
                    cells[i].classList.add('missed');
                }
            });

            setTimeout(function () {
                captchaGrid.classList.remove('grid-shake');
                for (var c = 0; c < cells.length; c++) {
                    cells[c].classList.remove('incorrect');
                    cells[c].classList.remove('missed');
                }
            }, 900);

            if (attempts >= 3) {
                // After 3 failed attempts, load a new scene
                setTimeout(function () {
                    showGrid(senderData);
                }, 1000);
                attempts = 0;
            }
        }
    }

    // ── REVEAL ──────────────────────────────────────────────────
    function showReveal(senderData) {
        gridStage.classList.add('hidden');
        revealStage.classList.remove('hidden');

        // Burst hearts on reveal
        var revealHeartsEl = document.getElementById('reveal-hearts');
        revealHeartsEl.innerHTML = '';
        burstHearts(revealHeartsEl, 20);
        // Second wave after a beat
        setTimeout(function () { burstHearts(revealHeartsEl, 12); }, 1200);

        // Type out the message
        typeMessage("you're cute, let's have a drink.", revealText);

        // Mini cocktail decoration using simple inline SVGs
        revealCocktailArt.innerHTML = [
            '<svg viewBox="0 0 60 60"><polygon points="15,10 45,10 30,40" fill="rgba(255,203,110,0.5)" stroke="rgba(255,255,255,0.3)" stroke-width="1"/><line x1="30" y1="40" x2="30" y2="52" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"/><ellipse cx="30" cy="53" rx="10" ry="2.5" fill="rgba(255,255,255,0.2)"/></svg>',
            '<svg viewBox="0 0 60 60"><path d="M22,8 Q18,30 22,40 Q26,48 30,48 L30,48 Q34,48 38,40 Q42,30 38,8 Z" fill="rgba(142,32,67,0.5)" stroke="rgba(255,255,255,0.3)" stroke-width="1"/><line x1="30" y1="48" x2="30" y2="55" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"/><ellipse cx="30" cy="56" rx="10" ry="2.5" fill="rgba(255,255,255,0.2)"/></svg>',
            '<svg viewBox="0 0 60 60"><rect x="20" y="8" width="20" height="40" rx="2" fill="rgba(85,239,196,0.4)" stroke="rgba(255,255,255,0.3)" stroke-width="1"/><ellipse cx="30" cy="14" rx="8" ry="4" fill="rgba(46,204,113,0.6)"/><circle cx="28" cy="30" r="2" fill="rgba(255,255,255,0.2)"/><circle cx="33" cy="36" r="1.5" fill="rgba(255,255,255,0.15)"/></svg>'
        ].join('');

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
        var i = 0;

        function type() {
            if (i < message.length) {
                element.textContent += message.charAt(i);
                i++;
                setTimeout(type, 50 + Math.random() * 40);
            }
        }

        // Start typing after verified badge animation
        setTimeout(type, 900);
    }

    // ── BOOT ────────────────────────────────────────────────────
    init();

})();
