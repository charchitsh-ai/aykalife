/**
 * Post-build script: copies Next.js generated CSS to public/styles.css
 * This ensures CSS is served from /styles.css (public dir) on hosting environments
 * like Hostinger where /_next/static/ might not be proxied correctly.
 */
const fs = require('fs');
const path = require('path');

const cssDir = path.join(process.cwd(), '.next', 'static', 'css');
const publicDir = path.join(process.cwd(), 'public');
const outputFile = path.join(publicDir, 'styles.css');

if (!fs.existsSync(cssDir)) {
  console.warn('⚠️  .next/static/css/ not found. Run `npm run build` first.');
  process.exit(0);
}

const cssFiles = fs.readdirSync(cssDir).filter(f => f.endsWith('.css'));

if (cssFiles.length === 0) {
  console.warn('⚠️  No CSS files found in .next/static/css/');
  process.exit(0);
}

// Concatenate all CSS files
let cssContent = '';
cssFiles.forEach(file => {
  cssContent += fs.readFileSync(path.join(cssDir, file), 'utf-8') + '\n';
});

// Write to public/styles.css
fs.writeFileSync(outputFile, cssContent);
console.log(`✅ CSS copied to public/styles.css (${Math.round(cssContent.length / 1024)} KB)`);
