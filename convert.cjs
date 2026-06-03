const fs = require('fs');

let html = fs.readFileSync('legacy/index.html', 'utf-8');
const bodyMatch = html.match(/<body>([\s\S]*?)<\/body>/i);
if (!bodyMatch) {
  console.error("Could not find body tag");
  process.exit(1);
}
let bodyContent = bodyMatch[1];

bodyContent = bodyContent.replace(/<script[\s\S]*?<\/script>/gi, '');
bodyContent = bodyContent.replace(/class=/g, 'className=');
bodyContent = bodyContent.replace(/for=/g, 'htmlFor=');
bodyContent = bodyContent.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');

bodyContent = bodyContent.replace(/style="([^"]*)"/g, (match, styleString) => {
  const rules = styleString.split(';').filter(Boolean);
  const styleObj = {};
  for (const rule of rules) {
    const parts = rule.split(':');
    if (parts.length >= 2) {
      const key = parts.shift().trim();
      const value = parts.join(':').trim();
      styleObj[key] = value;
    }
  }
  return `style={${JSON.stringify(styleObj)}}`;
});

bodyContent = bodyContent.replace(/<(img|input|br|hr)([^>]*?)(?<!\/)>/gi, '<$1$2 />');
bodyContent = bodyContent.replace(/autocomplete=/g, 'autoComplete=');
bodyContent = bodyContent.replace(/stroke-width=/g, 'strokeWidth=');
bodyContent = bodyContent.replace(/viewbox=/gi, 'viewBox=');
bodyContent = bodyContent.replace(/fill-rule/g, 'fillRule');
bodyContent = bodyContent.replace(/clip-rule/g, 'clipRule');
// Also SVG stroke-linecap etc if needed, let's fix known ones:
bodyContent = bodyContent.replace(/stroke-linecap/g, 'strokeLinecap');
bodyContent = bodyContent.replace(/stroke-linejoin/g, 'strokeLinejoin');

const appJsx = `
import React, { useEffect } from 'react';
import './index.css';

function App() {
  useEffect(() => {
    // We will port the script.js logic here later
  }, []);

  return (
    <>
      ${bodyContent}
    </>
  );
}

export default App;
`;

fs.writeFileSync('src/App.jsx', appJsx);
console.log("App.jsx created successfully.");
