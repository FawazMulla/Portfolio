#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting deployment and testing process...\n');

// Step 1: Build the application
console.log('📦 Building application...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build completed successfully\n');
} catch (error) {
  console.error('❌ Build failed');
  process.exit(1);
}

// Step 2: Validate deployment
console.log('🔍 Validating deployment...');
try {
  execSync('node scripts/validate-deployment.js', { stdio: 'inherit' });
  console.log('✅ Deployment validation passed\n');
} catch (error) {
  console.error('❌ Deployment validation failed');
  process.exit(1);
}

// Step 3: Performance check
console.log('⚡ Running performance check...');
try {
  execSync('node scripts/performance-check.js', { stdio: 'inherit' });
  console.log('✅ Performance check completed\n');
} catch (error) {
  console.error('❌ Performance check failed');
  process.exit(1);
}

// Step 4: Lint check
console.log('🔧 Running lint check...');
try {
  execSync('npm run lint', { stdio: 'inherit' });
  console.log('✅ Lint check passed\n');
} catch (error) {
  console.error('❌ Lint check failed');
  process.exit(1);
}

// Step 5: Create deployment summary
console.log('📊 Creating deployment summary...');

const outDir = path.join(process.cwd(), 'out');
const stats = {
  buildTime: new Date().toISOString(),
  files: [],
  totalSize: 0
};

function getDirectoryStats(dir, prefix = '') {
  const items = fs.readdirSync(dir);
  
  items.forEach(item => {
    const itemPath = path.join(dir, item);
    const stat = fs.statSync(itemPath);
    
    if (stat.isDirectory()) {
      getDirectoryStats(itemPath, prefix + item + '/');
    } else {
      const sizeKB = Math.round(stat.size / 1024);
      stats.files.push({
        name: prefix + item,
        size: sizeKB
      });
      stats.totalSize += sizeKB;
    }
  });
}

getDirectoryStats(outDir);

// Write summary
const summaryPath = path.join(outDir, 'deployment-summary.json');
fs.writeFileSync(summaryPath, JSON.stringify(stats, null, 2));

console.log(`📄 Deployment summary saved to: ${summaryPath}`);
console.log(`📊 Total deployment size: ${stats.totalSize}KB`);
console.log(`📁 Total files: ${stats.files.length}`);

// Step 6: Final validation
console.log('\n' + '='.repeat(60));
console.log('🎉 DEPLOYMENT AND TESTING COMPLETED SUCCESSFULLY!');
console.log('='.repeat(60));

console.log('\n📋 Summary:');
console.log('✅ Application built successfully');
console.log('✅ All essential files present');
console.log('✅ SEO meta tags and structured data included');
console.log('✅ Performance optimizations applied');
console.log('✅ Code quality checks passed');

console.log('\n🚀 Ready for deployment to GitHub Pages!');
console.log('💡 Run "npm run deploy" to deploy to GitHub Pages');

console.log('\n📱 Test the application:');
console.log('🌐 Local: Open out/index.html in your browser');
console.log('🔗 Production: https://fawazmulla.github.io/Portfolio');

console.log('\n🔧 Next steps:');
console.log('• Test all interactive features manually');
console.log('• Verify theme switching works');
console.log('• Test contact form functionality');
console.log('• Check mobile responsiveness');
console.log('• Validate cross-browser compatibility');