const fs = require('fs');
const html = fs.readFileSync('output.html', 'utf8');
const { JSDOM } = require('jsdom');
const dom = new JSDOM(html);
const nav = dom.window.document.querySelector('nav');
console.log(nav.outerHTML);
