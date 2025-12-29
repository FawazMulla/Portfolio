#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying fixes...\n');

// Check if build output exists
const outDir = path.join(process.cwd(), 'out');
const indexPath = path.join(outDir, 'index.html');

if (!fs.existsSync(indexPath)) {
  console.error('❌ Build output not found');
  process.exit(1);
}

const indexContent = fs.readFileSync(indexPath, 'utf8');

console.log('✅ Checking fixes:');

// Check 1: No X-Frame-Options in meta tags
if (indexContent.includes('X-Frame-Options')) {
  console.log('❌ X-Frame-Options still present in meta tags');
} else {
  console.log('✅ X-Frame-Options removed from meta tags');
}

// Check 2: Images are using Next.js optimization
if (indexContent.includes('/_next/static/media/') || indexContent.includes('/_next/image')) {
  console.log('✅ Next.js Image optimization detected');
} else {
  console.log('⚠️  Next.js Image optimization not detected (may be using unoptimized mode)');
}

// Check 3: Assets have correct paths
const assetChecks = [
  { name: 'Favicon', pattern: /favicon\.ico/ },
  { name: 'Manifest', pattern: /manifest\.json/ },
  { name: 'Profile image', pattern: /profile-photo\.JPG/ },
  { name: 'Achievement image', pattern: /hackathon-win\.JPG/ }
];

assetChecks.forEach(check => {
  if (check.pattern.test(indexContent)) {
    console.log(`✅ ${check.name} reference found`);
  } else {
    console.log(`⚠️  ${check.name} reference not found`);
  }
});

// Check 4: Essential content still present
const contentChecks = [
  'Mohammed Fawaz Mulla',
  'Full Stack Developer',
  'IT Student',
  'Hackathon Winner'
];

console.log('\n📄 Content verification:');
contentChecks.forEach(content => {
  if (indexContent.includes(content)) {
    console.log(`✅ "${content}" found`);
  } else {
    console.log(`❌ "${content}" missing`);
  }
});

// Check 5: SEO elements
console.log('\n🔍 SEO verification:');
const seoChecks = [
  { name: 'Title tag', pattern: /<title>.*Mohammed Fawaz Mulla.*<\/title>/ },
  { name: 'Meta description', pattern: /<meta name="description"/ },
  { name: 'Open Graph', pattern: /<meta property="og:/ },
  { name: 'Structured data', pattern: /<script type="application\/ld\+json">/ }
];

seoChecks.forEach(check => {
  if (check.pattern.test(indexContent)) {
    console.log(`✅ ${check.name}`);
  } else {
    console.log(`❌ ${check.name} missing`);
  }
});

console.log('\n' + '='.repeat(50));
console.log('🎉 Fix verification completed!');
console.log('🌐 Test the live site: https://fawazmulla.github.io/Portfolio');
console.log('='.repeat(50));