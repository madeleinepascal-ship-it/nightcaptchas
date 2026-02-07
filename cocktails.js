/**
 * NightCaptchas - Photographic Cocktail Scene Definitions
 *
 * Each scene is a detailed 400x400 SVG showing a cocktail in context.
 * The CAPTCHA overlays a 4x4 grid, and `targetCells` marks which cells
 * contain the cocktail (0-15, left-to-right, top-to-bottom).
 *
 * Grid layout:
 *   0  1  2  3
 *   4  5  6  7
 *   8  9  10 11
 *  12 13 14 15
 *
 * Each cell = 100x100 in the 400x400 viewBox.
 */

const SCENES = [

    // ──────────────────────────────────────────────────────────
    // SCENE 1: Martini in spotlight — center position
    // ──────────────────────────────────────────────────────────
    {
        name: "Martini",
        targetCells: [5, 6, 9, 10],
        svg: `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
<defs>
<linearGradient id="s1-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0d0d1a"/><stop offset="50%" stop-color="#141428"/><stop offset="100%" stop-color="#1a1a2e"/></linearGradient>
<radialGradient id="s1-spot" cx="50%" cy="8%" r="55%"><stop offset="0%" stop-color="rgba(255,210,130,0.25)"/><stop offset="100%" stop-color="rgba(0,0,0,0)"/></radialGradient>
<linearGradient id="s1-liq" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fff3c4" stop-opacity="0.85"/><stop offset="100%" stop-color="#f0c040" stop-opacity="0.75"/></linearGradient>
<linearGradient id="s1-bar" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#3d2c1e"/><stop offset="40%" stop-color="#2c1f14"/><stop offset="100%" stop-color="#1a1208"/></linearGradient>
<filter id="s1-blur"><feGaussianBlur stdDeviation="10"/></filter>
<filter id="s1-sm"><feGaussianBlur stdDeviation="4"/></filter>
</defs>
<rect width="400" height="400" fill="url(#s1-bg)"/>
<rect width="400" height="400" fill="url(#s1-spot)"/>
<!-- Bokeh lights -->
<circle cx="55" cy="65" r="18" fill="#ffe0a0" opacity="0.12" filter="url(#s1-blur)"/>
<circle cx="345" cy="50" r="22" fill="#ff9ecd" opacity="0.09" filter="url(#s1-blur)"/>
<circle cx="330" cy="140" r="14" fill="#ffe0a0" opacity="0.10" filter="url(#s1-blur)"/>
<circle cx="70" cy="155" r="20" fill="#90b8ff" opacity="0.07" filter="url(#s1-blur)"/>
<circle cx="180" cy="40" r="12" fill="#ffe0a0" opacity="0.08" filter="url(#s1-blur)"/>
<!-- Back bar shelves hint -->
<rect x="0" y="55" width="400" height="2" fill="rgba(255,255,255,0.03)"/>
<rect x="0" y="120" width="400" height="1" fill="rgba(255,255,255,0.02)"/>
<!-- Bottles silhouette background -->
<rect x="15" y="20" width="22" height="80" rx="4" fill="rgba(40,40,60,0.5)"/>
<rect x="310" y="10" width="26" height="90" rx="5" fill="rgba(40,40,60,0.4)"/>
<rect x="345" y="25" width="20" height="75" rx="3" fill="rgba(50,40,60,0.4)"/>
<rect x="50" y="30" width="18" height="70" rx="3" fill="rgba(35,35,55,0.3)"/>
<!-- Bar counter -->
<rect x="0" y="280" width="400" height="120" fill="url(#s1-bar)"/>
<rect x="0" y="278" width="400" height="4" fill="#4a3525"/>
<rect x="0" y="278" width="400" height="1.5" fill="rgba(255,200,100,0.12)"/>
<!-- Counter wood grain -->
<line x1="0" y1="310" x2="400" y2="312" stroke="rgba(80,55,35,0.3)" stroke-width="0.5"/>
<line x1="0" y1="340" x2="400" y2="339" stroke="rgba(80,55,35,0.2)" stroke-width="0.5"/>
<line x1="0" y1="365" x2="400" y2="366" stroke="rgba(80,55,35,0.15)" stroke-width="0.5"/>
<!-- Coaster -->
<ellipse cx="200" cy="275" rx="42" ry="5" fill="#1a1208"/>
<ellipse cx="200" cy="274" rx="40" ry="4" fill="#2a1f14" stroke="#3d2c1e" stroke-width="0.5"/>
<!-- Napkin right side -->
<rect x="290" y="268" width="55" height="30" rx="1" fill="rgba(60,50,40,0.4)"/>
<rect x="292" y="270" width="51" height="26" rx="1" fill="rgba(240,235,225,0.08)"/>
<!-- === MARTINI GLASS === -->
<!-- Shadow on counter -->
<ellipse cx="200" cy="278" rx="48" ry="6" fill="rgba(0,0,0,0.4)" filter="url(#s1-sm)"/>
<!-- Base -->
<ellipse cx="200" cy="270" rx="32" ry="6" fill="rgba(200,210,220,0.08)" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
<!-- Stem -->
<rect x="197" y="210" width="6" height="62" fill="rgba(200,210,220,0.07)"/>
<line x1="200" y1="210" x2="200" y2="272" stroke="rgba(255,255,255,0.15)" stroke-width="1.5"/>
<!-- Glass bowl -->
<polygon points="140,110 260,110 200,210" fill="rgba(220,230,240,0.08)" stroke="rgba(255,255,255,0.18)" stroke-width="1.2"/>
<!-- Liquid -->
<polygon points="148,118 252,118 200,200" fill="url(#s1-liq)"/>
<!-- Liquid surface line -->
<line x1="150" y1="120" x2="250" y2="120" stroke="rgba(255,255,255,0.12)" stroke-width="0.8"/>
<!-- Glass left edge reflection -->
<line x1="145" y1="114" x2="185" y2="196" stroke="rgba(255,255,255,0.1)" stroke-width="1.5"/>
<!-- Glass rim highlight -->
<line x1="142" y1="110" x2="258" y2="110" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"/>
<!-- Olive pick -->
<line x1="180" y1="108" x2="215" y2="165" stroke="rgba(200,200,200,0.5)" stroke-width="1.5"/>
<!-- Olive -->
<ellipse cx="213" cy="160" rx="10" ry="8" fill="#27ae60"/>
<ellipse cx="213" cy="160" rx="4" ry="3" fill="#c0392b"/>
<ellipse cx="210" cy="157" rx="3" ry="2" fill="rgba(255,255,255,0.15)"/>
<!-- Condensation drops on glass -->
<circle cx="165" cy="145" r="1.2" fill="rgba(255,255,255,0.1)"/>
<circle cx="170" cy="160" r="1" fill="rgba(255,255,255,0.08)"/>
<circle cx="230" cy="150" r="1.3" fill="rgba(255,255,255,0.08)"/>
<!-- Counter reflection -->
<polygon points="170,285 230,285 220,380 180,380" fill="rgba(240,200,80,0.03)"/>
</svg>`
    },

    // ──────────────────────────────────────────────────────────
    // SCENE 2: Margarita on rustic wood — left position
    // ──────────────────────────────────────────────────────────
    {
        name: "Margarita",
        targetCells: [4, 5, 8, 9],
        svg: `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
<defs>
<linearGradient id="s2-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#2d1f0e"/><stop offset="40%" stop-color="#3b2a15"/><stop offset="100%" stop-color="#2a1e0f"/></linearGradient>
<linearGradient id="s2-liq" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#a8e6cf" stop-opacity="0.85"/><stop offset="100%" stop-color="#55c89d" stop-opacity="0.8"/></linearGradient>
<linearGradient id="s2-table" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#5a3e28"/><stop offset="100%" stop-color="#3d2a18"/></linearGradient>
<filter id="s2-blur"><feGaussianBlur stdDeviation="8"/></filter>
<filter id="s2-sm"><feGaussianBlur stdDeviation="3"/></filter>
</defs>
<rect width="400" height="400" fill="url(#s2-bg)"/>
<!-- Warm ambient light -->
<circle cx="120" cy="100" r="200" fill="rgba(255,200,120,0.06)" filter="url(#s2-blur)"/>
<!-- Table surface -->
<rect x="0" y="240" width="400" height="160" fill="url(#s2-table)"/>
<rect x="0" y="238" width="400" height="4" fill="#6b4a30"/>
<rect x="0" y="238" width="400" height="1.5" fill="rgba(255,200,100,0.08)"/>
<!-- Wood grain -->
<line x1="0" y1="270" x2="400" y2="272" stroke="rgba(90,62,40,0.4)" stroke-width="0.7"/>
<line x1="0" y1="310" x2="400" y2="308" stroke="rgba(90,62,40,0.3)" stroke-width="0.5"/>
<line x1="0" y1="350" x2="400" y2="351" stroke="rgba(90,62,40,0.2)" stroke-width="0.5"/>
<!-- Background: tequila bottle right side -->
<rect x="290" y="60" width="35" height="140" rx="4" fill="rgba(50,50,30,0.5)"/>
<rect x="295" y="50" width="25" height="20" rx="2" fill="rgba(60,60,40,0.5)"/>
<rect x="297" y="90" width="21" height="50" rx="1" fill="rgba(255,240,200,0.06)"/>
<!-- Background: small plate -->
<ellipse cx="320" cy="255" rx="40" ry="8" fill="rgba(200,190,170,0.08)" stroke="rgba(255,255,255,0.05)" stroke-width="0.5"/>
<!-- Lime halves on table -->
<circle cx="290" cy="260" r="14" fill="#4a8c5c" opacity="0.5"/>
<path d="M278,260 Q290,250 302,260" fill="#a8e6cf" opacity="0.3"/>
<circle cx="350" cy="270" r="10" fill="#4a8c5c" opacity="0.35"/>
<!-- Salt scattered -->
<circle cx="110" cy="250" r="0.8" fill="rgba(255,255,255,0.2)"/>
<circle cx="125" cy="246" r="0.6" fill="rgba(255,255,255,0.15)"/>
<circle cx="98" cy="252" r="0.7" fill="rgba(255,255,255,0.18)"/>
<circle cx="140" cy="255" r="0.5" fill="rgba(255,255,255,0.12)"/>
<!-- === MARGARITA GLASS === -->
<!-- Shadow -->
<ellipse cx="120" cy="248" rx="55" ry="8" fill="rgba(0,0,0,0.35)" filter="url(#s2-sm)"/>
<!-- Base -->
<ellipse cx="120" cy="242" rx="28" ry="5" fill="rgba(200,210,220,0.08)" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
<!-- Stem -->
<rect x="117" y="195" width="6" height="49" fill="rgba(200,210,220,0.06)"/>
<line x1="120" y1="195" x2="120" y2="244" stroke="rgba(255,255,255,0.13)" stroke-width="1.5"/>
<!-- Wide bowl -->
<polygon points="40,110 200,110 145,195 95,195" fill="rgba(220,230,240,0.08)" stroke="rgba(255,255,255,0.15)" stroke-width="1.2"/>
<!-- Liquid -->
<polygon points="50,120 190,120 142,190 98,190" fill="url(#s2-liq)"/>
<!-- Salt rim -->
<line x1="42" y1="110" x2="198" y2="110" stroke="rgba(255,255,255,0.35)" stroke-width="2.5"/>
<circle cx="50" cy="109" r="1.5" fill="rgba(255,255,255,0.25)"/>
<circle cx="65" cy="108" r="1.2" fill="rgba(255,255,255,0.2)"/>
<circle cx="80" cy="107" r="1.4" fill="rgba(255,255,255,0.22)"/>
<circle cx="95" cy="107" r="1" fill="rgba(255,255,255,0.18)"/>
<circle cx="110" cy="107" r="1.3" fill="rgba(255,255,255,0.2)"/>
<circle cx="125" cy="107" r="1.1" fill="rgba(255,255,255,0.22)"/>
<circle cx="140" cy="107" r="1.4" fill="rgba(255,255,255,0.19)"/>
<circle cx="155" cy="108" r="1.2" fill="rgba(255,255,255,0.2)"/>
<circle cx="170" cy="108" r="1.5" fill="rgba(255,255,255,0.22)"/>
<circle cx="185" cy="109" r="1.3" fill="rgba(255,255,255,0.18)"/>
<!-- Lime wedge on rim -->
<path d="M185,100 Q200,88 202,108 L190,110 Z" fill="#4a8c5c"/>
<path d="M188,102 Q198,92 200,106" fill="none" stroke="#a8e6cf" stroke-width="0.8"/>
<!-- Glass reflection -->
<line x1="50" y1="115" x2="90" y2="185" stroke="rgba(255,255,255,0.08)" stroke-width="1.5"/>
<!-- Liquid surface -->
<line x1="52" y1="122" x2="188" y2="122" stroke="rgba(255,255,255,0.1)" stroke-width="0.6"/>
<!-- Counter reflection -->
<polygon points="80,250 160,250 150,360 90,360" fill="rgba(100,200,150,0.02)"/>
</svg>`
    },

    // ──────────────────────────────────────────────────────────
    // SCENE 3: Mojito tropical — right side
    // ──────────────────────────────────────────────────────────
    {
        name: "Mojito",
        targetCells: [2, 3, 6, 7, 10, 11],
        svg: `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
<defs>
<linearGradient id="s3-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#1a3a2a"/><stop offset="50%" stop-color="#0f2a1e"/><stop offset="100%" stop-color="#0a1f15"/></linearGradient>
<linearGradient id="s3-liq" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="rgba(255,255,255,0.15)"/><stop offset="40%" stop-color="rgba(200,255,220,0.25)"/><stop offset="100%" stop-color="rgba(120,220,160,0.4)"/></linearGradient>
<linearGradient id="s3-bar" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#6b4a30"/><stop offset="100%" stop-color="#4a3220"/></linearGradient>
<filter id="s3-blur"><feGaussianBlur stdDeviation="8"/></filter>
<filter id="s3-sm"><feGaussianBlur stdDeviation="3"/></filter>
</defs>
<rect width="400" height="400" fill="url(#s3-bg)"/>
<!-- Tropical ambient light -->
<circle cx="300" cy="80" r="180" fill="rgba(255,220,120,0.06)" filter="url(#s3-blur)"/>
<!-- Palm frond shadows -->
<path d="M0,0 Q80,30 50,100 Q30,60 0,50 Z" fill="rgba(0,30,15,0.4)"/>
<path d="M400,0 Q350,50 380,120 Q400,70 400,20 Z" fill="rgba(0,30,15,0.3)"/>
<path d="M0,30 Q100,60 70,140" fill="none" stroke="rgba(0,40,20,0.2)" stroke-width="2"/>
<!-- String lights -->
<path d="M0,70 Q100,90 200,72 Q300,55 400,75" fill="none" stroke="rgba(255,220,120,0.08)" stroke-width="1"/>
<circle cx="80" cy="82" r="4" fill="rgba(255,220,120,0.15)"/>
<circle cx="180" cy="76" r="4" fill="rgba(255,200,100,0.12)"/>
<circle cx="280" cy="65" r="4" fill="rgba(255,220,120,0.15)"/>
<circle cx="370" cy="74" r="4" fill="rgba(255,200,100,0.12)"/>
<!-- Bamboo bar surface -->
<rect x="0" y="290" width="400" height="110" fill="url(#s3-bar)"/>
<rect x="0" y="288" width="400" height="4" fill="#7d5a3c"/>
<rect x="0" y="288" width="400" height="1.5" fill="rgba(255,220,120,0.06)"/>
<!-- Bamboo texture -->
<line x1="0" y1="320" x2="400" y2="321" stroke="rgba(100,70,45,0.3)" stroke-width="0.5"/>
<line x1="0" y1="350" x2="400" y2="349" stroke="rgba(100,70,45,0.2)" stroke-width="0.5"/>
<!-- Background: small plant -->
<circle cx="50" cy="250" r="20" fill="rgba(30,80,50,0.3)"/>
<circle cx="40" cy="240" r="15" fill="rgba(40,90,55,0.25)"/>
<rect x="45" y="260" width="10" height="30" rx="2" fill="rgba(80,50,30,0.3)"/>
<!-- Background: coaster left -->
<ellipse cx="80" cy="295" rx="25" ry="4" fill="rgba(40,30,20,0.4)"/>
<!-- === MOJITO GLASS === -->
<!-- Shadow -->
<ellipse cx="290" cy="292" rx="35" ry="6" fill="rgba(0,0,0,0.3)" filter="url(#s3-sm)"/>
<!-- Tall glass body -->
<path d="M255,80 L252,286 Q252,294 260,294 L320,294 Q328,294 328,286 L325,80 Z" fill="rgba(220,235,230,0.1)" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
<!-- Liquid -->
<path d="M254,120 L252,284 Q252,292 260,292 L320,292 Q327,292 327,284 L325,120 Z" fill="url(#s3-liq)"/>
<!-- Ice cubes -->
<rect x="262" y="130" width="22" height="18" rx="3" fill="rgba(220,240,235,0.2)" stroke="rgba(255,255,255,0.08)" stroke-width="0.5"/>
<rect x="290" y="140" width="20" height="18" rx="3" fill="rgba(220,240,235,0.15)" stroke="rgba(255,255,255,0.06)" stroke-width="0.5"/>
<rect x="270" y="160" width="24" height="16" rx="3" fill="rgba(220,240,235,0.12)" stroke="rgba(255,255,255,0.06)" stroke-width="0.5"/>
<!-- Bubbles -->
<circle cx="275" cy="220" r="2.5" fill="rgba(255,255,255,0.12)"/>
<circle cx="300" cy="250" r="2" fill="rgba(255,255,255,0.1)"/>
<circle cx="268" cy="260" r="3" fill="rgba(255,255,255,0.08)"/>
<circle cx="310" cy="200" r="1.5" fill="rgba(255,255,255,0.1)"/>
<circle cx="280" cy="185" r="1.8" fill="rgba(255,255,255,0.09)"/>
<!-- Mint bunch -->
<ellipse cx="278" cy="95" rx="14" ry="9" fill="#2ecc71" transform="rotate(-20 278 95)"/>
<ellipse cx="298" cy="90" rx="12" ry="8" fill="#27ae60" transform="rotate(15 298 90)"/>
<ellipse cx="286" cy="82" rx="11" ry="7" fill="#55efc4" transform="rotate(-5 286 82)"/>
<ellipse cx="270" cy="88" rx="10" ry="6" fill="#2ecc71" transform="rotate(-30 270 88)"/>
<!-- Mint leaf veins -->
<line x1="278" y1="95" x2="270" y2="88" stroke="rgba(0,100,50,0.3)" stroke-width="0.4"/>
<line x1="298" y1="90" x2="292" y2="84" stroke="rgba(0,100,50,0.3)" stroke-width="0.4"/>
<!-- Lime wedge on rim -->
<path d="M310,85 L325,72 L330,88 Z" fill="#f1c40f" opacity="0.7" stroke="#e67e22" stroke-width="0.8"/>
<!-- Straw -->
<line x1="308" y1="50" x2="300" y2="180" stroke="#e74c3c" stroke-width="3.5"/>
<line x1="308" y1="50" x2="300" y2="180" stroke="#ff6b6b" stroke-width="2"/>
<!-- Glass rim highlight -->
<line x1="256" y1="80" x2="324" y2="80" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
<!-- Glass side reflection -->
<line x1="258" y1="90" x2="255" y2="280" stroke="rgba(255,255,255,0.06)" stroke-width="1.5"/>
<!-- Condensation drops -->
<circle cx="260" cy="180" r="1.5" fill="rgba(255,255,255,0.1)"/>
<circle cx="322" cy="210" r="1.2" fill="rgba(255,255,255,0.08)"/>
<circle cx="258" cy="230" r="1" fill="rgba(255,255,255,0.08)"/>
<circle cx="320" cy="160" r="1.3" fill="rgba(255,255,255,0.09)"/>
<!-- Counter reflection -->
<rect x="260" y="296" width="60" height="80" fill="rgba(150,220,180,0.02)"/>
</svg>`
    },

    // ──────────────────────────────────────────────────────────
    // SCENE 4: Red wine by candlelight — center-left, tall
    // ──────────────────────────────────────────────────────────
    {
        name: "Wine Glass",
        targetCells: [1, 5, 9, 13],
        svg: `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
<defs>
<linearGradient id="s4-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#120a0a"/><stop offset="100%" stop-color="#1a0e0e"/></linearGradient>
<radialGradient id="s4-candle" cx="75%" cy="35%" r="50%"><stop offset="0%" stop-color="rgba(255,180,80,0.15)"/><stop offset="100%" stop-color="rgba(0,0,0,0)"/></radialGradient>
<linearGradient id="s4-wine" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#8e2043"/><stop offset="100%" stop-color="#6b1530"/></linearGradient>
<linearGradient id="s4-table" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#2a1515"/><stop offset="100%" stop-color="#1a0e0e"/></linearGradient>
<filter id="s4-blur"><feGaussianBlur stdDeviation="10"/></filter>
<filter id="s4-sm"><feGaussianBlur stdDeviation="4"/></filter>
<filter id="s4-glow"><feGaussianBlur stdDeviation="6"/></filter>
</defs>
<rect width="400" height="400" fill="url(#s4-bg)"/>
<rect width="400" height="400" fill="url(#s4-candle)"/>
<!-- Table surface -->
<rect x="0" y="310" width="400" height="90" fill="url(#s4-table)"/>
<rect x="0" y="308" width="400" height="4" fill="#3a2020"/>
<rect x="0" y="308" width="400" height="1" fill="rgba(255,150,80,0.06)"/>
<!-- Tablecloth edge hint -->
<path d="M0,312 Q50,318 100,312 Q150,306 200,312 Q250,318 300,312 Q350,306 400,312" fill="none" stroke="rgba(100,30,30,0.15)" stroke-width="1"/>
<!-- === CANDLE (right side) === -->
<!-- Candle holder -->
<rect x="310" y="220" width="20" height="90" rx="2" fill="rgba(60,40,30,0.6)"/>
<ellipse cx="320" cy="220" rx="14" ry="4" fill="rgba(80,50,35,0.7)"/>
<!-- Candle body -->
<rect x="314" y="150" width="12" height="72" rx="1" fill="rgba(240,230,210,0.3)"/>
<!-- Flame -->
<ellipse cx="320" cy="140" rx="6" ry="12" fill="rgba(255,200,80,0.7)"/>
<ellipse cx="320" cy="142" rx="3" ry="7" fill="rgba(255,240,200,0.8)"/>
<!-- Flame glow -->
<circle cx="320" cy="140" r="25" fill="rgba(255,180,80,0.08)" filter="url(#s4-glow)"/>
<!-- Wax drip -->
<circle cx="318" cy="180" r="2" fill="rgba(240,230,210,0.2)"/>
<!-- Background: second candle further back, dim -->
<rect x="360" y="100" width="8" height="50" rx="1" fill="rgba(240,230,210,0.08)"/>
<ellipse cx="364" cy="95" rx="3" ry="6" fill="rgba(255,200,80,0.15)"/>
<!-- Background: napkin -->
<rect x="230" y="300" width="50" height="20" rx="1" fill="rgba(60,30,30,0.3)"/>
<!-- === WINE GLASS === -->
<!-- Shadow -->
<ellipse cx="150" cy="312" rx="40" ry="6" fill="rgba(0,0,0,0.35)" filter="url(#s4-sm)"/>
<!-- Base -->
<ellipse cx="150" cy="305" rx="30" ry="6" fill="rgba(200,200,210,0.06)" stroke="rgba(255,255,255,0.1)" stroke-width="0.8"/>
<!-- Stem -->
<rect x="147" y="230" width="6" height="77" fill="rgba(200,200,210,0.05)"/>
<line x1="150" y1="230" x2="150" y2="307" stroke="rgba(255,255,255,0.12)" stroke-width="1.5"/>
<!-- Bowl -->
<path d="M115,60 Q108,130 120,175 Q130,210 145,215 L155,215 Q170,210 180,175 Q192,130 185,60 Z" fill="rgba(220,220,230,0.06)" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
<!-- Wine liquid -->
<path d="M117,130 Q112,160 122,185 Q132,210 145,213 L155,213 Q168,210 178,185 Q188,160 183,130 Z" fill="url(#s4-wine)" opacity="0.8"/>
<!-- Wine surface -->
<ellipse cx="150" cy="130" rx="33" ry="6" fill="rgba(142,32,67,0.3)"/>
<!-- Wine surface highlight -->
<ellipse cx="150" cy="129" rx="30" ry="4" fill="rgba(255,150,80,0.06)"/>
<!-- Bowl left reflection -->
<path d="M120" y1="80" d="M120,80 Q116,120 122,160" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="1.5"/>
<!-- Bowl rim highlight -->
<ellipse cx="150" cy="60" rx="35" ry="5" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
<!-- Candle light reflection in wine -->
<ellipse cx="160" cy="135" rx="6" ry="3" fill="rgba(255,180,80,0.08)"/>
<!-- Condensation -->
<circle cx="122" cy="150" r="1" fill="rgba(255,255,255,0.06)"/>
<circle cx="178" cy="170" r="1.2" fill="rgba(255,255,255,0.05)"/>
<!-- Counter reflection -->
<path d="M130,315 L170,315 L165,395 L135,395 Z" fill="rgba(140,30,60,0.02)"/>
</svg>`
    },

    // ──────────────────────────────────────────────────────────
    // SCENE 5: Old Fashioned on dark leather — lower center
    // ──────────────────────────────────────────────────────────
    {
        name: "Old Fashioned",
        targetCells: [9, 10, 13, 14],
        svg: `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
<defs>
<linearGradient id="s5-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#15100a"/><stop offset="60%" stop-color="#1e150d"/><stop offset="100%" stop-color="#251a10"/></linearGradient>
<radialGradient id="s5-lamp" cx="30%" cy="20%" r="45%"><stop offset="0%" stop-color="rgba(255,200,100,0.12)"/><stop offset="100%" stop-color="rgba(0,0,0,0)"/></radialGradient>
<linearGradient id="s5-liq" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#c97a20" stop-opacity="0.8"/><stop offset="100%" stop-color="#a85d10" stop-opacity="0.75"/></linearGradient>
<linearGradient id="s5-leather" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#2a1e12"/><stop offset="100%" stop-color="#1e150d"/></linearGradient>
<filter id="s5-blur"><feGaussianBlur stdDeviation="10"/></filter>
<filter id="s5-sm"><feGaussianBlur stdDeviation="3"/></filter>
</defs>
<rect width="400" height="400" fill="url(#s5-bg)"/>
<rect width="400" height="400" fill="url(#s5-lamp)"/>
<!-- Bokeh -->
<circle cx="80" cy="60" r="15" fill="rgba(255,200,100,0.1)" filter="url(#s5-blur)"/>
<circle cx="350" cy="80" r="20" fill="rgba(255,180,80,0.07)" filter="url(#s5-blur)"/>
<!-- Back wall / shelf -->
<rect x="0" y="80" width="400" height="2" fill="rgba(255,255,255,0.02)"/>
<!-- Bottles on shelf -->
<rect x="30" y="30" width="28" height="90" rx="4" fill="rgba(40,30,20,0.4)"/>
<rect x="35" y="20" width="18" height="15" rx="2" fill="rgba(50,40,28,0.4)"/>
<rect x="70" y="40" width="22" height="80" rx="3" fill="rgba(35,25,18,0.35)"/>
<rect x="350" y="35" width="25" height="85" rx="4" fill="rgba(40,30,20,0.3)"/>
<!-- Leather surface -->
<rect x="0" y="200" width="400" height="200" fill="url(#s5-leather)"/>
<rect x="0" y="198" width="400" height="4" fill="#352515"/>
<!-- Leather texture (stitching) -->
<line x1="0" y1="202" x2="400" y2="202" stroke="rgba(60,45,30,0.3)" stroke-width="0.5" stroke-dasharray="8,12"/>
<!-- Cigar box in background -->
<rect x="280" y="195" width="80" height="25" rx="2" fill="rgba(60,35,18,0.5)"/>
<rect x="282" y="197" width="76" height="21" rx="1" fill="rgba(70,42,22,0.4)"/>
<line x1="320" y1="197" x2="320" y2="218" stroke="rgba(90,60,30,0.3)" stroke-width="0.5"/>
<!-- Coaster -->
<ellipse cx="200" cy="305" rx="50" ry="7" fill="#1a1208"/>
<ellipse cx="200" cy="304" rx="48" ry="6" fill="#251a10" stroke="rgba(60,45,30,0.4)" stroke-width="0.5"/>
<!-- === OLD FASHIONED GLASS === -->
<!-- Shadow -->
<ellipse cx="200" cy="308" rx="44" ry="7" fill="rgba(0,0,0,0.35)" filter="url(#s5-sm)"/>
<!-- Rocks glass body -->
<path d="M155,215 L155,298 Q155,308 165,308 L235,308 Q245,308 245,298 L245,215 Z" fill="rgba(220,220,230,0.07)" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
<!-- Liquid -->
<path d="M157,240 L157,296 Q157,306 167,306 L233,306 Q243,306 243,296 L243,240 Z" fill="url(#s5-liq)"/>
<!-- Glass rim highlight -->
<line x1="156" y1="215" x2="244" y2="215" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
<!-- Glass rim thickness -->
<rect x="155" y="213" width="90" height="4" rx="1" fill="rgba(200,200,210,0.04)"/>
<!-- Ice cubes -->
<rect x="165" y="220" width="25" height="20" rx="3" fill="rgba(220,230,240,0.18)" stroke="rgba(255,255,255,0.06)" stroke-width="0.5"/>
<rect x="195" y="225" width="22" height="20" rx="3" fill="rgba(220,230,240,0.14)" stroke="rgba(255,255,255,0.05)" stroke-width="0.5"/>
<rect x="175" y="242" width="24" height="18" rx="3" fill="rgba(220,230,240,0.1)" stroke="rgba(255,255,255,0.04)" stroke-width="0.5"/>
<rect x="205" y="244" width="20" height="16" rx="3" fill="rgba(220,230,240,0.08)" stroke="rgba(255,255,255,0.04)" stroke-width="0.5"/>
<!-- Ice reflection/refraction -->
<line x1="170" y1="225" x2="185" y2="235" stroke="rgba(255,255,255,0.04)" stroke-width="0.8"/>
<!-- Orange peel -->
<path d="M230,218 Q245,208 252,222 Q242,232 232,225 Z" fill="#e17055" opacity="0.8"/>
<path d="M232,220 Q240,212 246,222" fill="none" stroke="#d35400" stroke-width="0.6"/>
<!-- Glass side reflection -->
<line x1="158" y1="220" x2="158" y2="295" stroke="rgba(255,255,255,0.06)" stroke-width="1.5"/>
<!-- Glass right reflection -->
<line x1="242" y1="225" x2="242" y2="290" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
<!-- Condensation -->
<circle cx="160" cy="260" r="1.5" fill="rgba(255,255,255,0.08)"/>
<circle cx="162" cy="275" r="1" fill="rgba(255,255,255,0.06)"/>
<circle cx="240" cy="255" r="1.2" fill="rgba(255,255,255,0.06)"/>
<circle cx="238" cy="280" r="1.4" fill="rgba(255,255,255,0.05)"/>
<!-- Counter reflection -->
<rect x="165" y="310" width="70" height="80" fill="rgba(200,130,40,0.02)"/>
</svg>`
    },

    // ──────────────────────────────────────────────────────────
    // SCENE 6: Cosmopolitan modern bar — upper center
    // ──────────────────────────────────────────────────────────
    {
        name: "Cosmopolitan",
        targetCells: [1, 2, 5, 6, 9],
        svg: `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
<defs>
<linearGradient id="s6-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0e0e18"/><stop offset="100%" stop-color="#181828"/></linearGradient>
<radialGradient id="s6-neon" cx="50%" cy="15%" r="50%"><stop offset="0%" stop-color="rgba(255,100,150,0.08)"/><stop offset="100%" stop-color="rgba(0,0,0,0)"/></radialGradient>
<linearGradient id="s6-liq" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ff6b9d" stop-opacity="0.85"/><stop offset="100%" stop-color="#c44569" stop-opacity="0.8"/></linearGradient>
<linearGradient id="s6-bar" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1a1a28"/><stop offset="100%" stop-color="#12121e"/></linearGradient>
<filter id="s6-blur"><feGaussianBlur stdDeviation="10"/></filter>
<filter id="s6-sm"><feGaussianBlur stdDeviation="3"/></filter>
<filter id="s6-glow"><feGaussianBlur stdDeviation="6"/></filter>
</defs>
<rect width="400" height="400" fill="url(#s6-bg)"/>
<rect width="400" height="400" fill="url(#s6-neon)"/>
<!-- Neon sign glow in background -->
<rect x="60" y="30" width="120" height="35" rx="3" fill="none" stroke="rgba(255,100,150,0.12)" stroke-width="1.5"/>
<text x="120" y="55" fill="rgba(255,100,150,0.15)" font-size="18" font-family="serif" text-anchor="middle">COCKTAILS</text>
<rect x="60" y="30" width="120" height="35" rx="3" fill="rgba(255,100,150,0.02)" filter="url(#s6-glow)"/>
<!-- Bokeh -->
<circle cx="40" cy="120" r="18" fill="rgba(255,100,150,0.06)" filter="url(#s6-blur)"/>
<circle cx="370" cy="90" r="15" fill="rgba(100,150,255,0.06)" filter="url(#s6-blur)"/>
<circle cx="350" cy="180" r="12" fill="rgba(255,100,150,0.05)" filter="url(#s6-blur)"/>
<!-- Modern bar counter -->
<rect x="0" y="280" width="400" height="120" fill="url(#s6-bar)"/>
<rect x="0" y="278" width="400" height="3" fill="rgba(255,255,255,0.06)"/>
<rect x="0" y="280" width="400" height="1" fill="rgba(255,100,150,0.03)"/>
<!-- Counter surface: polished/reflective -->
<rect x="0" y="282" width="400" height="118" fill="rgba(255,255,255,0.01)"/>
<!-- Background: shaker set -->
<ellipse cx="340" cy="250" rx="16" ry="40" fill="rgba(180,180,190,0.06)" stroke="rgba(255,255,255,0.04)" stroke-width="0.5"/>
<ellipse cx="340" cy="210" rx="12" ry="5" fill="rgba(180,180,190,0.05)"/>
<!-- Background: small plate -->
<ellipse cx="60" cy="290" rx="30" ry="5" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.04)" stroke-width="0.5"/>
<!-- Cocktail napkin -->
<rect x="315" y="275" width="40" height="8" rx="1" fill="rgba(255,255,255,0.04)"/>
<!-- === COSMOPOLITAN GLASS === -->
<!-- Shadow -->
<ellipse cx="200" cy="282" rx="45" ry="6" fill="rgba(0,0,0,0.3)" filter="url(#s6-sm)"/>
<!-- Base -->
<ellipse cx="200" cy="275" rx="28" ry="5" fill="rgba(200,200,210,0.06)" stroke="rgba(255,255,255,0.1)" stroke-width="0.8"/>
<!-- Stem -->
<rect x="197" y="215" width="6" height="62" fill="rgba(200,200,210,0.05)"/>
<line x1="200" y1="215" x2="200" y2="277" stroke="rgba(255,255,255,0.12)" stroke-width="1.5"/>
<!-- Glass bowl (wide martini shape) -->
<polygon points="130,95 270,95 200,215" fill="rgba(220,220,230,0.06)" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
<!-- Liquid -->
<polygon points="138,103 262,103 200,207" fill="url(#s6-liq)"/>
<!-- Liquid surface -->
<line x1="140" y1="105" x2="260" y2="105" stroke="rgba(255,255,255,0.08)" stroke-width="0.6"/>
<!-- Glass rim -->
<line x1="132" y1="95" x2="268" y2="95" stroke="rgba(255,255,255,0.25)" stroke-width="1.5"/>
<!-- Left edge reflection -->
<line x1="135" y1="100" x2="180" y2="200" stroke="rgba(255,255,255,0.07)" stroke-width="1.5"/>
<!-- Pink neon reflection in liquid -->
<polygon points="160,120 240,120 210,180 170,180" fill="rgba(255,100,150,0.06)"/>
<!-- Lime wheel on rim -->
<circle cx="255" cy="96" r="12" fill="rgba(200,200,50,0.25)" stroke="rgba(255,255,200,0.15)" stroke-width="0.8"/>
<line x1="255" y1="86" x2="255" y2="106" stroke="rgba(150,200,100,0.15)" stroke-width="0.5"/>
<line x1="245" y1="96" x2="265" y2="96" stroke="rgba(150,200,100,0.15)" stroke-width="0.5"/>
<line x1="248" y1="89" x2="262" y2="103" stroke="rgba(150,200,100,0.12)" stroke-width="0.5"/>
<line x1="248" y1="103" x2="262" y2="89" stroke="rgba(150,200,100,0.12)" stroke-width="0.5"/>
<!-- Counter reflection -->
<polygon points="160,285 240,285 230,390 170,390" fill="rgba(255,100,150,0.02)"/>
<!-- Stem reflection -->
<line x1="200" y1="285" x2="200" y2="370" stroke="rgba(255,255,255,0.02)" stroke-width="3"/>
</svg>`
    }
];

/**
 * Pick a random scene
 */
function getRandomScene() {
    return SCENES[Math.floor(Math.random() * SCENES.length)];
}
