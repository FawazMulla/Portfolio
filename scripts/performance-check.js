#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('⚡ Checking performance metrics...\n');

const outDir = path.join(process.cwd(), 'out');

// Check bundle sizes
const nextDir = path.join(outDir, '_next');
if (fs.existsSync(nextDir)) {
  const staticDir = path.join(nextDir, 'static');
  
  if (fs.existsSync(staticDir)) {
    console.log('📦 Bundle Analysis:');
    
    // Check JS bundles
    const jsDir = path.join(staticDir, 'chunks');
    if (fs.existsSync(jsDir)) {
      const jsFiles = fs.readdirSync(jsDir).filter(f => f.endsWith('.js'));
      let totalJSSize = 0;
      
      jsFiles.forEach(file => {
        const filePath = path.join(jsDir, file);
        const stats = fs.statSync(filePath);
        const sizeKB = Math.round(stats.size / 1024);
        totalJSSize += sizeKB;
        
        if (sizeKB > 100) {
          console.log(`📄 ${file}: ${sizeKB}KB`);
        }
      });
      
      console.log(`✅ Total JS bundle size: ${totalJSSize}KB`);
      
      if (totalJSSize < 500) {
        console.log('🎉 Bundle size is optimal (< 500KB)');
      } else if (totalJSSize < 1000) {
        console.log('⚠️  Bundle size is acceptable (< 1MB)');
      } else {
        console.log('❌ Bundle size is large (> 1MB)');
      }
    }
  }
}

// Check HTML file size
const indexPath = path.join(outDir, 'index.html');
if (fs.existsSync(indexPath)) {
  const stats = fs.statSync(indexPath);
  const sizeKB = Math.round(stats.size / 1024);
  console.log(`\n📄 index.html size: ${sizeKB}KB`);
  
  if (sizeKB < 100) {
    console.log('✅ HTML size is optimal');
  } else {
    console.log('⚠️  HTML size is large');
  }
}

// Check image optimization
const imagesDir = path.join(outDir, 'images');
if (fs.existsSync(imagesDir)) {
  console.log('\n🖼️  Image Analysis:');
  const images = fs.readdirSync(imagesDir);
  let totalImageSize = 0;
  
  images.forEach(image => {
    const imagePath = path.join(imagesDir, image);
    const stats = fs.statSync(imagePath);
    const sizeKB = Math.round(stats.size / 1024);
    totalImageSize += sizeKB;
    
    if (sizeKB > 500) {
      console.log(`📸 ${image}: ${sizeKB}KB (consider optimization)`);
    }
  });
  
  console.log(`📊 Total image size: ${totalImageSize}KB`);
  
  if (totalImageSize < 2000) {
    console.log('✅ Image sizes are reasonable');
  } else {
    console.log('⚠️  Consider optimizing images');
  }
}

// Check for performance optimizations
const indexContent = fs.readFileSync(indexPath, 'utf8');

console.log('\n🔧 Performance Features:');

const optimizations = [
  { name: 'Preconnect links', test: /<link rel="preconnect"/ },
  { name: 'DNS prefetch', test: /<link rel="dns-prefetch"/ },
  { name: 'Minified HTML', test: indexContent.length < indexContent.replace(/\s+/g, ' ').length },
  { name: 'Meta viewport', test: /<meta name="viewport"/ },
  { name: 'Theme color', test: /<meta name="theme-color"/ }
];

optimizations.forEach(opt => {
  if (opt.test === true || (opt.test instanceof RegExp && opt.test.test(indexContent))) {
    console.log(`✅ ${opt.name}`);
  } else {
    console.log(`⚠️  ${opt.name} missing`);
  }
});

console.log('\n' + '='.repeat(50));
console.log('⚡ Performance check completed!');
console.log('💡 Consider running Lighthouse for detailed analysis');