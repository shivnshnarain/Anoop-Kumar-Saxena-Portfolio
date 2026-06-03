const fs = require('fs');
let code = fs.readFileSync('legacy/script.js', 'utf-8');

// Remove window.addEventListener('load') and just execute the inside immediately
code = code.replace(/window\.addEventListener\('load', \(\) => \{([\s\S]*?)\}\);/, '$1');

code = `export function initApp() {
${code}
}`;

fs.writeFileSync('src/script.js', code);
