#!/bin/bash

# Faith Mundia Consulting Platform - Deployment Preparation Script
# This script prepares all files needed for HostAfrica deployment

echo "🚀 Preparing Faith Mundia Consulting Platform for HostAfrica deployment..."

# Create deployment directory
mkdir -p deployment-package

# Copy built application
echo "📦 Copying built application files..."
cp -r dist/ deployment-package/
cp database-schema.sql deployment-package/
cp production.env deployment-package/.env
cp package.production.json deployment-package/package.json
cp drizzle.config.ts deployment-package/
cp -r shared/ deployment-package/

# Create deployment instructions
echo "📋 Creating deployment instructions..."
cat > deployment-package/DEPLOY_TO_HOSTAFRICA.md << 'EOF'
# Deploy to HostAfrica - Quick Steps

## 1. Upload Files
Upload all files in this folder to your HostAfrica public_html directory:
- dist/ (application files)
- package.json (dependencies)
- .env (configure with your settings)
- database-schema.sql (import to database)

## 2. Configure .env file
Edit .env with your HostAfrica details:
- Database connection string
- Email SMTP settings
- Domain configuration

## 3. Install Dependencies
In HostAfrica terminal:
```bash
npm install --production
```

## 4. Setup Database
Import database-schema.sql to your PostgreSQL database

## 5. Configure Node.js App
- Startup file: dist/index.js
- Node.js version: 18+
- Port: 5000

## 6. Test
Visit https://faithmundia.co.ke
EOF

# Create .htaccess for proper routing
cat > deployment-package/.htaccess << 'EOF'
# HostAfrica .htaccess for Node.js Application
DirectoryIndex disabled

RewriteEngine On

# Handle Node.js application
RewriteRule ^(?!dist/).*$ /dist/index.js [QSA,L]

# Security headers
Header always set X-Content-Type-Options nosniff
Header always set X-Frame-Options DENY
Header always set X-XSS-Protection "1; mode=block"

# HTTPS redirect
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Cache static assets
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
    ExpiresByType image/png "access plus 1 month"
    ExpiresByType image/jpg "access plus 1 month"
    ExpiresByType image/jpeg "access plus 1 month"
    ExpiresByType image/gif "access plus 1 month"
    ExpiresByType image/ico "access plus 1 month"
    ExpiresByType image/icon "access plus 1 month"
    ExpiresByType text/html "access plus 1 day"
</IfModule>
EOF

# Create file list
echo "📝 Creating file manifest..."
find deployment-package -type f > deployment-package/FILE_LIST.txt

echo "✅ Deployment package ready!"
echo ""
echo "📂 Files prepared in: deployment-package/"
echo "🔗 Total files: $(find deployment-package -type f | wc -l)"
echo "📊 Package size: $(du -sh deployment-package | cut -f1)"
echo ""
echo "🎯 Next steps:"
echo "1. Download the deployment-package folder"
echo "2. Follow HOSTAFRICA_DEPLOYMENT_GUIDE.md"
echo "3. Upload to your HostAfrica hosting"
echo "4. Configure environment variables"
echo "5. Launch https://faithmundia.co.ke 🚀"
echo ""
echo "📋 Don't forget to:"
echo "- Setup PostgreSQL database on HostAfrica"
echo "- Configure email settings (consult@faithmundia.co.ke)"
echo "- Enable SSL certificate"
echo "- Test contact form functionality"
