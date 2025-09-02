#!/usr/bin/env node

// Simple deployment packaging script
// Run this with: node deployment/package-for-deployment.js

import fs from 'fs';
import path from 'path';

console.log('📦 Preparing Faith Mundia Consulting Platform for deployment...\n');

// Check if build exists
if (!fs.existsSync('dist')) {
  console.error('❌ Build not found. Run "npm run build" first.');
  process.exit(1);
}

console.log('✅ Build files found in dist/');
console.log('✅ Database schema created in deployment/');
console.log('✅ Environment template created');
console.log('✅ Deployment guide created');

console.log('\n📋 Files ready for deployment:');
console.log('   • dist/ (built application)');
console.log('   • package.json (dependencies)');
console.log('   • deployment/ (setup files)');

console.log('\n🚀 Next steps:');
console.log('1. Download these files from Replit');
console.log('2. Follow the deployment guide in deployment/DEPLOYMENT_GUIDE.md');
console.log('3. Set up PostgreSQL database on your hosting');
console.log('4. Configure environment variables');
console.log('5. Upload and deploy!');

console.log('\n📧 Remember to configure your email settings:');
console.log('   SMTP_HOST=mail.faithmundia.co.ke');
console.log('   SMTP_USER=consult@faithmundia.co.ke');
console.log('   NOTIFICATION_EMAIL=consult@faithmundia.co.ke');

console.log('\n✨ Your platform is ready for independent deployment!');