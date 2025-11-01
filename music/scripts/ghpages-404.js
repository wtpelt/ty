const fs = require('fs');
const path = require('path');

// GitHub Pages 404.html workaround
// Copy index.html to 404.html so Angular routes work on direct navigation
// This prevents 404 console errors when navigating directly to routes like /about or /music

const distPath = path.join(__dirname, '../dist/music/browser');
const indexPath = path.join(distPath, 'index.html');
const notFoundPath = path.join(distPath, '404.html');

if (fs.existsSync(indexPath)) {
  fs.copyFileSync(indexPath, notFoundPath);
  console.log('✅ Created 404.html for GitHub Pages routing');
} else {
  // Try alternative paths in case build structure is different
  const altPaths = [
    path.join(__dirname, '../dist/music/index.html'),
    path.join(__dirname, '../dist/browser/index.html'),
  ];

  let found = false;
  for (const altPath of altPaths) {
    if (fs.existsSync(altPath)) {
      const alt404Path = path.join(path.dirname(altPath), '404.html');
      fs.copyFileSync(altPath, alt404Path);
      console.log('✅ Created 404.html for GitHub Pages routing at:', alt404Path);
      found = true;
      break;
    }
  }

  if (!found) {
    console.warn('⚠️  index.html not found. Make sure you build first.');
    console.warn('   Expected locations:');
    console.warn('   - dist/music/browser/index.html');
    console.warn('   - dist/music/index.html');
    console.warn('   - dist/browser/index.html');
  }
}

