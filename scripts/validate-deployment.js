#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Validating Next.js deployment...\n');

// Check if build output exists
const outDir = path.join(process.cwd(), 'out');
if (!fs.existsSync(outDir)) {
  console.error('❌ Build output directory "out" not found');
  process.exit(1);
}

console.log('✅ Build output directory exists');

// Check essential files
const essentialFiles = [
  'index.html',
  '_next',
  'favicon.ico',
  'manifest.json'
];

let allFilesExist = true;
essentialFiles.forEach(file => {
  const filePath = path.join(outDir, file);
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${file} exists`);
  } else {
    console.log(`❌ ${file} missing`);
    allFilesExist = false;
  }
});

// Check index.html content
const indexPath = path.join(outDir, 'index.html');
if (fs.existsSync(indexPath)) {
  const indexContent = fs.readFileSync(indexPath, 'utf8');
  
  // Check for essential content
  const checks = [
    { name: 'Title tag', test: /<title>.*Mohammed Fawaz Mulla.*<\/title>/ },
    { name: 'Meta description', test: /<meta name="description"/ },
    { name: 'Open Graph tags', test: /<meta property="og:/ },
    { name: 'Structured data', test: /<script type="application\/ld\+json">/ },
    { name: 'Main content', test: /Mohammed Fawaz Mulla/ },
    { name: 'Navigation', test: /navbar/ },
    { name: 'Contact section', test: /contact/ }
  ];
  
  console.log('\n📄 Validating index.html content:');
  checks.forEach(check => {
    if (check.test.test(indexContent)) {
      console.log(`✅ ${check.name} found`);
    } else {
      console.log(`❌ ${check.name} missing`);
      allFilesExist = false;
    }
  });
}

// Check asset files
const assetsDir = path.join(outDir, 'images');
if (fs.existsSync(assetsDir)) {
  console.log('\n📁 Checking assets:');
  const assets = fs.readdirSync(assetsDir);
  if (assets.length > 0) {
    console.log(`✅ Found ${assets.length} asset files`);
    assets.slice(0, 3).forEach(asset => {
      console.log(`  - ${asset}`);
    });
    if (assets.length > 3) {
      console.log(`  ... and ${assets.length - 3} more`);
    }
  } else {
    console.log('⚠️  No assets found');
  }
}

// Final result
console.log('\n' + '='.repeat(50));
if (allFilesExist) {
  console.log('🎉 Deployment validation PASSED!');
  console.log('✅ All essential files and content are present');
  process.exit(0);
} else {
  console.log('❌ Deployment validation FAILED!');
  console.log('⚠️  Some essential files or content are missing');
  process.exit(1);
}