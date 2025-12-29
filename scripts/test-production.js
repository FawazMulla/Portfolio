#!/usr/bin/env node

const https = require('https');
const http = require('http');

console.log('🌐 Testing production deployment...\n');

const productionUrl = 'https://fawazmulla.github.io/Portfolio';

function testUrl(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    
    const req = client.get(url, (res) => {
      // Handle redirects
      if (res.statusCode === 301 || res.statusCode === 302) {
        const redirectUrl = res.headers.location;
        console.log(`🔄 Redirected to: ${redirectUrl}`);
        
        // Follow the redirect
        return testUrl(redirectUrl).then(resolve).catch(reject);
      }
      
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          body: data
        });
      });
    });
    
    req.on('error', (error) => {
      reject(error);
    });
    
    req.setTimeout(10000, () => {
      req.destroy();
      reject(new Error('Request timeout'));
    });
  });
}

async function runTests() {
  try {
    console.log(`🔍 Testing: ${productionUrl}`);
    
    const response = await testUrl(productionUrl);
    
    if (response.statusCode === 200) {
      console.log('✅ Site is accessible (HTTP 200)');
    } else {
      console.log(`⚠️  Site returned status: ${response.statusCode}`);
    }
    
    // Test content
    const body = response.body;
    
    const contentTests = [
      { name: 'Title contains name', test: body.includes('Mohammed Fawaz Mulla') },
      { name: 'Meta description present', test: body.includes('<meta name="description"') },
      { name: 'Open Graph tags present', test: body.includes('property="og:') },
      { name: 'Structured data present', test: body.includes('application/ld+json') },
      { name: 'Navigation present', test: body.includes('navbar') },
      { name: 'Contact section present', test: body.includes('contact') },
      { name: 'CSS loaded', test: body.includes('_next/static/css/') || body.includes('<style') },
      { name: 'JavaScript loaded', test: body.includes('_next/static/chunks/') }
    ];
    
    console.log('\n📄 Content validation:');
    let passedTests = 0;
    
    contentTests.forEach(test => {
      if (test.test) {
        console.log(`✅ ${test.name}`);
        passedTests++;
      } else {
        console.log(`❌ ${test.name}`);
      }
    });
    
    console.log(`\n📊 Test Results: ${passedTests}/${contentTests.length} passed`);
    
    if (passedTests === contentTests.length) {
      console.log('🎉 All production tests PASSED!');
    } else {
      console.log('⚠️  Some tests failed - check deployment');
    }
    
    // Test additional URLs
    console.log('\n🔗 Testing additional resources:');
    
    const additionalTests = [
      `${productionUrl}/favicon.ico`,
      `${productionUrl}/manifest.json`,
      `${productionUrl}/robots.txt`
    ];
    
    for (const testUrl of additionalTests) {
      try {
        const res = await testUrl(testUrl);
        if (res.statusCode === 200) {
          console.log(`✅ ${testUrl.split('/').pop()}`);
        } else {
          console.log(`⚠️  ${testUrl.split('/').pop()} (${res.statusCode})`);
        }
      } catch (error) {
        console.log(`❌ ${testUrl.split('/').pop()} (error)`);
      }
    }
    
  } catch (error) {
    console.error('❌ Failed to test production site:');
    console.error(error.message);
    
    if (error.message.includes('ENOTFOUND') || error.message.includes('timeout')) {
      console.log('\n💡 This might be because:');
      console.log('• GitHub Pages is still deploying');
      console.log('• DNS propagation is in progress');
      console.log('• Network connectivity issues');
      console.log('\n⏳ Try again in a few minutes');
    }
  }
}

console.log('🚀 Starting production tests...');
runTests().then(() => {
  console.log('\n' + '='.repeat(50));
  console.log('🏁 Production testing completed!');
  console.log('🌐 Visit: https://fawazmulla.github.io/Portfolio');
  console.log('='.repeat(50));
});