# 🚀 Faith Mundia Consulting Platform - HostAfrica Deployment Checklist

## Pre-Deployment Requirements

### ✅ HostAfrica Account Setup
- [ ] **HostAfrica hosting account** with Node.js support (shared/VPS/dedicated)
- [ ] **Domain configured**: faithmundia.co.ke pointing to HostAfrica servers
- [ ] **SSL Certificate**: Let's Encrypt or custom SSL enabled
- [ ] **PostgreSQL Database**: Available in your hosting plan
- [ ] **Email hosting**: consult@faithmundia.co.ke configured

### ✅ Development Files Ready
- [x] **Application built**: `dist/` folder created with production files
- [x] **Deployment package**: All files in `deployment-package/` folder
- [x] **Database schema**: SQL file ready for import
- [x] **Environment template**: Production .env file configured

## Step-by-Step Deployment Guide

### 1. 🗄️ Database Setup (First Priority)

**Access HostAfrica Control Panel:**
1. Login to HostAfrica cPanel
2. Navigate to **"Databases"** → **"PostgreSQL Databases"**
3. Create new database:
   ```
   Database Name: faith_consulting
   Username: faith_user
   Password: [Generate strong password - save this!]
   ```

**Import Database Schema:**
1. Open **phpPgAdmin** or HostAfrica's database manager
2. Select your `faith_consulting` database
3. Import `database-schema.sql` file from deployment package
4. Verify tables created: `users` and `consultation_requests`

### 2. 📧 Email Configuration

**Setup Email Account:**
1. In HostAfrica cPanel → **"Email Accounts"**
2. Create: `consult@faithmundia.co.ke`
3. Set strong password
4. Note SMTP settings:
   ```
   SMTP Host: mail.faithmundia.co.ke
   SMTP Port: 587 (recommended) or 465
   Username: consult@faithmundia.co.ke
   Password: [your email password]
   Security: TLS/STARTTLS
   ```

### 3. 📁 File Upload

**Method 1: HostAfrica File Manager**
1. Login to cPanel → **"File Manager"**
2. Navigate to `public_html/` (or your domain folder)
3. Upload all files from `deployment-package/`:
   ```
   public_html/
   ├── dist/                    ← Application files
   ├── shared/                  ← Schema definitions
   ├── .env                     ← Environment config
   ├── .htaccess               ← Web server config
   ├── package.json            ← Dependencies
   ├── drizzle.config.ts       ← Database config
   └── database-schema.sql     ← Database setup
   ```

**Method 2: FTP Upload**
- Host: `ftp.faithmundia.co.ke` (or HostAfrica FTP server)
- Username: Your HostAfrica username
- Password: Your HostAfrica password
- Upload all files from `deployment-package/`

### 4. ⚙️ Environment Configuration

**Edit .env file on server:**
```env
# Database (use your actual HostAfrica database details)
DATABASE_URL=postgresql://faith_user:YOUR_DB_PASSWORD@localhost:5432/faith_consulting

# Email (use your actual HostAfrica email settings)
SMTP_HOST=mail.faithmundia.co.ke
SMTP_PORT=587
SMTP_USER=consult@faithmundia.co.ke
SMTP_PASS=YOUR_EMAIL_PASSWORD
NOTIFICATION_EMAIL=consult@faithmundia.co.ke

# Application
NODE_ENV=production
PORT=5000
SESSION_SECRET=your_very_secure_session_secret_minimum_32_characters_long
```

### 5. 🔧 Node.js Application Setup

**Configure Node.js App in HostAfrica:**
1. Find **"Node.js Apps"** or **"Node.js Selector"** in cPanel
2. Create new application:
   ```
   Node.js Version: 18.x (or latest available)
   Application Root: public_html/
   Application URL: faithmundia.co.ke
   Startup File: dist/index.js
   Application Mode: Production
   ```

**Install Dependencies:**
1. Access HostAfrica terminal/SSH OR use cPanel Terminal
2. Navigate to your application directory:
   ```bash
   cd public_html/
   npm install --production
   ```

### 6. 🌐 Domain & SSL Configuration

**Domain Setup:**
- Ensure `faithmundia.co.ke` DNS points to HostAfrica
- A Record: `faithmundia.co.ke` → HostAfrica server IP
- CNAME Record: `www.faithmundia.co.ke` → `faithmundia.co.ke`

**SSL Certificate:**
1. In cPanel → **"SSL/TLS"**
2. Enable **"Let's Encrypt SSL"** for faithmundia.co.ke
3. Force HTTPS redirects
4. Verify certificate installation

### 7. 🧪 Testing Phase

**Basic Functionality Test:**
- [ ] Visit `https://faithmundia.co.ke` - loads correctly
- [ ] All pages accessible (home, services, contact)
- [ ] Contact form loads
- [ ] No console errors in browser

**Contact Form Test:**
- [ ] Fill out contact form with test data
- [ ] Submit form
- [ ] Verify email received at consult@faithmundia.co.ke
- [ ] Check form success message displays

**Performance Test:**
- [ ] Page load speed acceptable (< 3 seconds)
- [ ] Mobile responsiveness working
- [ ] SSL certificate valid (green lock icon)

## 🔧 Troubleshooting Common Issues

### Issue 1: Application Won't Start
```bash
# Check Node.js app logs in cPanel
# Common fixes:
- Verify startup file path: dist/index.js
- Check Node.js version compatibility
- Ensure all files uploaded correctly
```

### Issue 2: Database Connection Error
```bash
# Verify database connection
# Check:
- Database name, username, password correct
- DATABASE_URL format correct
- Database service running on HostAfrica
```

### Issue 3: Email Not Sending
```bash
# Test email settings
# Check:
- Email account exists: consult@faithmundia.co.ke
- SMTP settings correct in .env
- Email service enabled on HostAfrica
```

### Issue 4: SSL/HTTPS Problems
```bash
# Fix SSL issues
# Check:
- SSL certificate installed and valid
- HTTPS redirects enabled
- Mixed content warnings resolved
```

## 🎯 Go-Live Checklist

### Before Going Live:
- [ ] Database connected and schema imported
- [ ] All environment variables configured correctly
- [ ] Node.js application running without errors
- [ ] SSL certificate active and valid
- [ ] Email functionality tested and working
- [ ] Contact form submitting and sending emails
- [ ] All pages loading correctly
- [ ] Performance optimized
- [ ] Mobile responsiveness verified

### After Going Live:
- [ ] Test from external network (not your development environment)
- [ ] Submit test consultation request
- [ ] Verify SEO meta tags
- [ ] Setup website monitoring (uptime)
- [ ] Configure regular database backups
- [ ] Document server credentials securely

## 📞 Support Resources

**HostAfrica Support:**
- Support Portal: [HostAfrica support URL]
- Phone: [HostAfrica support number]
- Email: [HostAfrica support email]

**Application Monitoring:**
- **Error Logs**: cPanel → Error Logs
- **Access Logs**: cPanel → Raw Access Logs
- **Node.js Logs**: Node.js Apps section in cPanel

**Quick Commands for Terminal:**
```bash
# Check application status
pm2 status  # if using PM2
node --version  # verify Node.js version

# View logs
tail -f logs/error.log
tail -f logs/access.log

# Restart application
pm2 restart all  # if using PM2
```

---

## 🎉 Success! 

Once all items are checked, your Faith Mundia Consulting Platform will be live at:

### 🌟 **https://faithmundia.co.ke** 🌟

**Professional consulting services are now accessible to clients worldwide!**

---

*Need help? Contact Faith Mundia at consult@faithmundia.co.ke*
