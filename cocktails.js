/**
 * Cocktail SVG definitions for NightCaptchas
 * Each cocktail is a function that returns an SVG string
 */

const COCKTAILS = {
    martini: {
        name: "Martini",
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="martini-glass" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#dfe6e9;stop-opacity:0.6"/>
                    <stop offset="100%" style="stop-color:#b2bec3;stop-opacity:0.4"/>
                </linearGradient>
                <linearGradient id="martini-liquid" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color:#ffeaa7"/>
                    <stop offset="100%" style="stop-color:#fdcb6e"/>
                </linearGradient>
            </defs>
            <!-- Glass -->
            <polygon points="28,25 92,25 60,72" fill="url(#martini-glass)" stroke="#636e72" stroke-width="1.5"/>
            <!-- Liquid -->
            <polygon points="35,33 85,33 60,65" fill="url(#martini-liquid)" opacity="0.8"/>
            <!-- Stem -->
            <line x1="60" y1="72" x2="60" y2="100" stroke="#636e72" stroke-width="2.5"/>
            <!-- Base -->
            <ellipse cx="60" cy="100" rx="18" ry="4" fill="#636e72" opacity="0.7"/>
            <!-- Olive pick -->
            <line x1="55" y1="25" x2="70" y2="48" stroke="#636e72" stroke-width="1.5"/>
            <!-- Olive -->
            <ellipse cx="68" cy="45" rx="6" ry="5" fill="#00b894"/>
            <ellipse cx="68" cy="45" rx="2" ry="1.5" fill="#d63031" opacity="0.8"/>
        </svg>`,
        color: "#fdcb6e"
    },

    margarita: {
        name: "Margarita",
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="marg-liquid" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color:#55efc4"/>
                    <stop offset="100%" style="stop-color:#00b894"/>
                </linearGradient>
            </defs>
            <!-- Salt rim dots -->
            <circle cx="25" cy="30" r="1.5" fill="#dfe6e9"/>
            <circle cx="30" cy="27" r="1.5" fill="#dfe6e9"/>
            <circle cx="35" cy="25" r="1.5" fill="#dfe6e9"/>
            <circle cx="42" cy="24" r="1.5" fill="#dfe6e9"/>
            <circle cx="49" cy="23" r="1.5" fill="#dfe6e9"/>
            <circle cx="56" cy="23" r="1.5" fill="#dfe6e9"/>
            <circle cx="63" cy="23" r="1.5" fill="#dfe6e9"/>
            <circle cx="70" cy="24" r="1.5" fill="#dfe6e9"/>
            <circle cx="77" cy="25" r="1.5" fill="#dfe6e9"/>
            <circle cx="84" cy="27" r="1.5" fill="#dfe6e9"/>
            <circle cx="89" cy="30" r="1.5" fill="#dfe6e9"/>
            <!-- Wide glass -->
            <polygon points="22,30 98,30 68,75 52,75" fill="rgba(223,230,233,0.5)" stroke="#636e72" stroke-width="1.5"/>
            <!-- Liquid -->
            <polygon points="30,38 90,38 66,72 54,72" fill="url(#marg-liquid)" opacity="0.8"/>
            <!-- Stem -->
            <line x1="60" y1="75" x2="60" y2="98" stroke="#636e72" stroke-width="2.5"/>
            <!-- Base -->
            <ellipse cx="60" cy="98" rx="18" ry="4" fill="#636e72" opacity="0.7"/>
            <!-- Lime wedge -->
            <path d="M85,28 Q95,20 92,32 Z" fill="#00b894"/>
            <path d="M86,29 L93,22" stroke="#55efc4" stroke-width="0.8"/>
            <path d="M87,30 L94,25" stroke="#55efc4" stroke-width="0.8"/>
        </svg>`,
        color: "#00b894"
    },

    oldFashioned: {
        name: "Old Fashioned",
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="of-liquid" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color:#e17055"/>
                    <stop offset="100%" style="stop-color:#d63031"/>
                </linearGradient>
            </defs>
            <!-- Rocks glass -->
            <path d="M28,30 L28,90 Q28,98 36,98 L84,98 Q92,98 92,90 L92,30 Z" fill="rgba(223,230,233,0.4)" stroke="#636e72" stroke-width="1.5"/>
            <!-- Liquid -->
            <path d="M30,48 L30,88 Q30,96 38,96 L82,96 Q90,96 90,88 L90,48 Z" fill="url(#of-liquid)" opacity="0.75"/>
            <!-- Ice cubes -->
            <rect x="38" y="40" width="16" height="14" rx="2" fill="rgba(223,230,233,0.6)" stroke="rgba(178,190,195,0.5)" stroke-width="1"/>
            <rect x="58" y="42" width="16" height="14" rx="2" fill="rgba(223,230,233,0.5)" stroke="rgba(178,190,195,0.5)" stroke-width="1"/>
            <rect x="46" y="54" width="16" height="12" rx="2" fill="rgba(223,230,233,0.4)" stroke="rgba(178,190,195,0.5)" stroke-width="1"/>
            <!-- Orange peel -->
            <path d="M75,32 Q82,25 88,30 Q84,38 78,35 Z" fill="#e17055" stroke="#d63031" stroke-width="1"/>
            <!-- Glass rim highlight -->
            <line x1="30" y1="30" x2="90" y2="30" stroke="rgba(255,255,255,0.4)" stroke-width="1"/>
        </svg>`,
        color: "#e17055"
    },

    mojito: {
        name: "Mojito",
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="mojito-liquid" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color:rgba(255,255,255,0.3)"/>
                    <stop offset="100%" style="stop-color:#55efc4;stop-opacity:0.6"/>
                </linearGradient>
            </defs>
            <!-- Tall glass -->
            <path d="M36,18 L34,95 Q34,102 40,102 L80,102 Q86,102 86,95 L84,18 Z" fill="rgba(223,230,233,0.35)" stroke="#636e72" stroke-width="1.5"/>
            <!-- Liquid -->
            <path d="M36,35 L35,93 Q35,100 41,100 L79,100 Q85,100 85,93 L84,35 Z" fill="url(#mojito-liquid)"/>
            <!-- Bubbles -->
            <circle cx="50" cy="75" r="2" fill="rgba(255,255,255,0.5)"/>
            <circle cx="65" cy="82" r="1.5" fill="rgba(255,255,255,0.4)"/>
            <circle cx="55" cy="90" r="2.5" fill="rgba(255,255,255,0.3)"/>
            <circle cx="70" cy="68" r="1.5" fill="rgba(255,255,255,0.4)"/>
            <circle cx="45" cy="60" r="1" fill="rgba(255,255,255,0.5)"/>
            <!-- Mint leaves -->
            <ellipse cx="52" cy="30" rx="8" ry="5" fill="#00b894" transform="rotate(-30 52 30)"/>
            <ellipse cx="64" cy="28" rx="8" ry="5" fill="#00cec9" transform="rotate(20 64 28)"/>
            <ellipse cx="56" cy="22" rx="7" ry="4" fill="#55efc4" transform="rotate(-10 56 22)"/>
            <line x1="52" y1="30" x2="48" y2="26" stroke="#00b894" stroke-width="0.5"/>
            <line x1="64" y1="28" x2="60" y2="24" stroke="#00cec9" stroke-width="0.5"/>
            <!-- Lime wedge -->
            <path d="M72,32 L80,26 L82,36 Z" fill="#ffeaa7" stroke="#fdcb6e" stroke-width="0.8"/>
            <!-- Straw -->
            <line x1="70" y1="8" x2="68" y2="55" stroke="#d63031" stroke-width="2.5"/>
            <line x1="70" y1="8" x2="68" y2="55" stroke="#ff7675" stroke-width="1.5"/>
        </svg>`,
        color: "#55efc4"
    },

    cosmopolitan: {
        name: "Cosmopolitan",
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="cosmo-liquid" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color:#fd79a8"/>
                    <stop offset="100%" style="stop-color:#e84393"/>
                </linearGradient>
            </defs>
            <!-- Glass -->
            <polygon points="25,22 95,22 60,70" fill="rgba(223,230,233,0.5)" stroke="#636e72" stroke-width="1.5"/>
            <!-- Liquid -->
            <polygon points="32,30 88,30 60,64" fill="url(#cosmo-liquid)" opacity="0.8"/>
            <!-- Stem -->
            <line x1="60" y1="70" x2="60" y2="98" stroke="#636e72" stroke-width="2.5"/>
            <!-- Base -->
            <ellipse cx="60" cy="98" rx="18" ry="4" fill="#636e72" opacity="0.7"/>
            <!-- Lime wheel on rim -->
            <circle cx="82" cy="24" r="8" fill="#ffeaa7" stroke="#fdcb6e" stroke-width="1"/>
            <line x1="82" y1="17" x2="82" y2="31" stroke="#55efc4" stroke-width="0.8"/>
            <line x1="75" y1="24" x2="89" y2="24" stroke="#55efc4" stroke-width="0.8"/>
            <line x1="77" y1="19" x2="87" y2="29" stroke="#55efc4" stroke-width="0.8"/>
            <line x1="77" y1="29" x2="87" y2="19" stroke="#55efc4" stroke-width="0.8"/>
        </svg>`,
        color: "#fd79a8"
    },

    beer: {
        name: "Beer",
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="beer-liquid" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color:#ffeaa7"/>
                    <stop offset="100%" style="stop-color:#fdcb6e"/>
                </linearGradient>
            </defs>
            <!-- Mug body -->
            <path d="M25,22 L25,95 Q25,105 35,105 L75,105 Q85,105 85,95 L85,22 Z" fill="rgba(253,203,110,0.3)" stroke="#636e72" stroke-width="1.5"/>
            <!-- Beer liquid -->
            <path d="M27,38 L27,93 Q27,103 37,103 L73,103 Q83,103 83,93 L83,38 Z" fill="url(#beer-liquid)" opacity="0.85"/>
            <!-- Foam -->
            <ellipse cx="38" cy="35" rx="12" ry="8" fill="#fefefe"/>
            <ellipse cx="55" cy="32" rx="14" ry="10" fill="#fefefe"/>
            <ellipse cx="72" cy="35" rx="12" ry="8" fill="#fefefe"/>
            <ellipse cx="45" cy="28" rx="10" ry="7" fill="rgba(255,255,255,0.8)"/>
            <ellipse cx="65" cy="28" rx="10" ry="7" fill="rgba(255,255,255,0.8)"/>
            <!-- Handle -->
            <path d="M85,35 Q105,35 105,55 Q105,75 85,75" fill="none" stroke="#636e72" stroke-width="3"/>
            <!-- Bubbles -->
            <circle cx="45" cy="70" r="2" fill="rgba(255,255,255,0.4)"/>
            <circle cx="60" cy="80" r="1.5" fill="rgba(255,255,255,0.3)"/>
            <circle cx="50" cy="55" r="1.5" fill="rgba(255,255,255,0.4)"/>
            <circle cx="65" cy="60" r="2" fill="rgba(255,255,255,0.3)"/>
        </svg>`,
        color: "#fdcb6e"
    },

    wine: {
        name: "Wine",
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="wine-liquid" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color:#a29bfe"/>
                    <stop offset="100%" style="stop-color:#6c5ce7"/>
                </linearGradient>
            </defs>
            <!-- Bowl -->
            <path d="M35,20 Q30,55 38,65 Q45,72 55,72 L65,72 Q75,72 82,65 Q90,55 85,20 Z" fill="rgba(223,230,233,0.4)" stroke="#636e72" stroke-width="1.5"/>
            <!-- Wine -->
            <path d="M36,42 Q33,55 40,64 Q46,70 55,70 L65,70 Q74,70 80,64 Q87,55 84,42 Z" fill="url(#wine-liquid)" opacity="0.8"/>
            <!-- Wine surface highlight -->
            <ellipse cx="60" cy="42" rx="23" ry="4" fill="rgba(162,155,254,0.4)"/>
            <!-- Stem -->
            <line x1="60" y1="72" x2="60" y2="98" stroke="#636e72" stroke-width="2.5"/>
            <!-- Base -->
            <ellipse cx="60" cy="99" rx="20" ry="5" fill="#636e72" opacity="0.7"/>
            <!-- Glass highlight -->
            <path d="M40,30 Q38,45 42,55" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"/>
        </svg>`,
        color: "#6c5ce7"
    },

    daiquiri: {
        name: "Daiquiri",
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="daiq-liquid" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color:#fab1a0"/>
                    <stop offset="100%" style="stop-color:#e17055"/>
                </linearGradient>
            </defs>
            <!-- Coupe glass bowl -->
            <path d="M28,35 Q28,18 60,18 Q92,18 92,35 Q88,58 68,65 L52,65 Q32,58 28,35 Z" fill="rgba(223,230,233,0.45)" stroke="#636e72" stroke-width="1.5"/>
            <!-- Liquid -->
            <path d="M32,35 Q32,22 60,22 Q88,22 88,35 Q84,54 66,60 L54,60 Q36,54 32,35 Z" fill="url(#daiq-liquid)" opacity="0.75"/>
            <!-- Stem -->
            <line x1="60" y1="65" x2="60" y2="95" stroke="#636e72" stroke-width="2.5"/>
            <!-- Base -->
            <ellipse cx="60" cy="96" rx="18" ry="4" fill="#636e72" opacity="0.7"/>
            <!-- Strawberry on rim -->
            <path d="M82,28 Q88,20 92,28 Q88,38 82,28 Z" fill="#d63031"/>
            <path d="M85,22 L87,18 M87,22 L89,19 M89,23 L90,20" stroke="#00b894" stroke-width="1" stroke-linecap="round"/>
            <!-- Glass highlight -->
            <path d="M38,28 Q40,22 50,20" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="1.5"/>
        </svg>`,
        color: "#e17055"
    },

    manhattan: {
        name: "Manhattan",
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="manh-liquid" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color:#d63031"/>
                    <stop offset="100%" style="stop-color:#c0392b"/>
                </linearGradient>
            </defs>
            <!-- Coupe glass -->
            <path d="M28,38 Q28,18 60,18 Q92,18 92,38 Q88,60 68,68 L52,68 Q32,60 28,38 Z" fill="rgba(223,230,233,0.45)" stroke="#636e72" stroke-width="1.5"/>
            <!-- Liquid -->
            <path d="M33,38 Q33,24 60,24 Q87,24 87,38 Q84,56 66,63 L54,63 Q36,56 33,38 Z" fill="url(#manh-liquid)" opacity="0.8"/>
            <!-- Stem -->
            <line x1="60" y1="68" x2="60" y2="96" stroke="#636e72" stroke-width="2.5"/>
            <!-- Base -->
            <ellipse cx="60" cy="97" rx="18" ry="4" fill="#636e72" opacity="0.7"/>
            <!-- Cherry -->
            <circle cx="60" cy="35" r="6" fill="#d63031"/>
            <circle cx="58" cy="33" r="1.5" fill="rgba(255,255,255,0.3)"/>
            <!-- Cherry stem -->
            <path d="M60,29 Q58,22 62,18" fill="none" stroke="#2d3436" stroke-width="1.2"/>
        </svg>`,
        color: "#d63031"
    }
};

// Get array of cocktail keys
const COCKTAIL_KEYS = Object.keys(COCKTAILS);

/**
 * Returns a random cocktail key that is different from the given key
 */
function getRandomCocktailExcept(exceptKey) {
    const options = COCKTAIL_KEYS.filter(k => k !== exceptKey);
    return options[Math.floor(Math.random() * options.length)];
}

/**
 * Generate a randomized CAPTCHA grid configuration
 * Returns { target, cells } where cells is an array of 9 items
 * each with { key, isTarget }
 */
function generateCaptchaGrid() {
    // Pick a random target cocktail
    const targetKey = COCKTAIL_KEYS[Math.floor(Math.random() * COCKTAIL_KEYS.length)];
    const targetCount = 2 + Math.floor(Math.random() * 3); // 2-4 target cells

    const cells = [];

    // Create target cells
    for (let i = 0; i < targetCount; i++) {
        cells.push({ key: targetKey, isTarget: true });
    }

    // Fill remaining with random non-target cocktails
    for (let i = targetCount; i < 9; i++) {
        const randomKey = getRandomCocktailExcept(targetKey);
        cells.push({ key: randomKey, isTarget: false });
    }

    // Shuffle cells
    for (let i = cells.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cells[i], cells[j]] = [cells[j], cells[i]];
    }

    return { target: targetKey, cells };
}
