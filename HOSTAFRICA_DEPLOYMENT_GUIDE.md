# Faith Mundia Consulting Platform - HostAfrica Deployment Guide

## 🚀 Deploy to HostAfrica for https://faithmundia.co.ke

This guide will walk you through deploying your consulting platform to HostAfrica hosting with your domain faithmundia.co.ke.

## Prerequisites Checklist

✅ **HostAfrica Account Setup**
- [ ] HostAfrica hosting account with Node.js support
- [ ] Domain faithmundia.co.ke configured in HostAfrica
- [ ] SSL certificate enabled for HTTPS
- [ ] PostgreSQL database available (or MySQL if PostgreSQL not available)

✅ **Email Configuration**
- [ ] Email hosting for consult@faithmundia.co.ke
- [ ] SMTP credentials from HostAfrica

## Step 1: Build Your Application

First, let's build the production version of your application:

```bash
# Build the application
npm run build

# This creates the dist/ folder with:
# - dist/public/ (frontend files)
# - dist/index.js (server file)
```

## Step 2: Prepare Deployment Files

Create the necessary files for production:

### Create .env file for production:
```env
# Database (adjust for HostAfrica)
DATABASE_URL=postgresql://faith_user:your_secure_password@localhost:5432/faith_consulting

# Email settings (HostAfrica SMTP)
SMTP_HOST=mail.faithmundia.co.ke
SMTP_PORT=587
SMTP_USER=consult@faithmundia.co.ke
SMTP_PASS=your_email_password
NOTIFICATION_EMAIL=consult@faithmundia.co.ke

# Production settings
NODE_ENV=production
PORT=5000
SESSION_SECRET=your_very_secure_session_secret_here
```

### Create package.json for production:
```json
{
  "name": "faith-mundia-consulting",
  "version": "1.0.0",
  "description": "Faith Mundia Consulting Platform",
  "main": "dist/index.js",
  "scripts": {
    "start": "node dist/index.js",
    "db:push": "drizzle-kit push"
  },
  "dependencies": {
    // Only production dependencies will be installed
  }
}
```

## Step 3: Database Setup

### For HostAfrica PostgreSQL:

1. **Access HostAfrica Control Panel**
   - Login to your HostAfrica account
   - Navigate to "Databases" → "PostgreSQL Databases"

2. **Create Database**
   ```sql
   Database Name: faith_consulting
   Username: faith_user
   Password: [generate strong password]
   ```

3. **Import Schema**
   - Use phpPgAdmin or HostAfrica's database manager
   - Import the `database-schema.sql` file:

```sql
-- Run this in HostAfrica's database manager
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE consultation_requests (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  company VARCHAR(255),
  service_type VARCHAR(100) NOT NULL,
  message TEXT NOT NULL,
  budget_range VARCHAR(50),
  timeline VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Step 4: Upload to HostAfrica

### Method 1: File Manager (Recommended for beginners)

1. **Access File Manager**
   - Login to HostAfrica cPanel
   - Open "File Manager"
   - Navigate to `public_html/` (or your domain folder)

2. **Upload Files**
   ```
   public_html/
   ├── dist/           # Upload entire dist folder
   ├── node_modules/   # Will install via npm
   ├── .env           # Your production environment file
   ├── package.json   # Production package.json
   ├── drizzle.config.ts
   └── database-schema.sql
   ```

3. **Set Permissions**
   - Make sure `dist/index.js` is executable (755)
   - Set proper permissions for all files (644 for files, 755 for directories)

### Method 2: FTP/SFTP (Alternative)

```bash
# Using FileZilla or similar FTP client
Host: ftp.faithmundia.co.ke (or HostAfrica FTP server)
Username: your_hostaifrica_username
Password: your_password
Port: 21 (FTP) or 22 (SFTP)
```

## Step 5: Configure HostAfrica Node.js App

1. **Setup Node.js Application**
   - In HostAfrica cPanel, find "Node.js Apps" or "Node.js Selector"
   - Create new application:
     ```
     Node.js Version: 18.x or higher
     Application Root: public_html/
     Application URL: faithmundia.co.ke
     Startup File: dist/index.js
     ```

2. **Install Dependencies**
   - Use HostAfrica's terminal or SSH:
   ```bash
   cd public_html/
   npm install --production
   ```

## Step 6: Domain & DNS Configuration

1. **Domain Setup**
   - Ensure faithmundia.co.ke points to HostAfrica servers
   - DNS A Record: faithmundia.co.ke → HostAfrica IP
   - CNAME Record: www.faithmundia.co.ke → faithmundia.co.ke

2. **SSL Certificate**
   - Enable Let's Encrypt SSL in HostAfrica cPanel
   - Or upload your own SSL certificate
   - Force HTTPS redirects

## Step 7: Email Configuration

1. **Setup Email Account**
   ```
   Email: consult@faithmundia.co.ke
   Type: Professional Email Account
   ```

2. **Get SMTP Settings from HostAfrica**
   ```
   SMTP Host: mail.faithmundia.co.ke
   SMTP Port: 587 (or 465 for SSL)
   Username: consult@faithmundia.co.ke
   Password: your_email_password
   Security: TLS/STARTTLS
   ```

## Step 8: Testing & Launch

### 1. Test Database Connection
```bash
# SSH into your server and test
node -e "
const { Pool } = require('pg');
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
pool.query('SELECT NOW()', (err, res) => {
  console.log(err ? err : res.rows[0]);
  pool.end();
});
"
```

### 2. Test Application
- Visit https://faithmundia.co.ke
- Test contact form
- Check console for errors

### 3. Monitor Logs
```bash
# Check application logs
tail -f logs/application.log

# Check error logs
tail -f logs/error.log
```

## Step 9: Post-Deployment Setup

### 1. Setup Monitoring
- Configure HostAfrica's uptime monitoring
- Set up email alerts for downtime

### 2. Backup Strategy
```bash
# Database backup script
pg_dump faith_consulting > backup_$(date +%Y%m%d).sql

# File backup
tar -czf backup_files_$(date +%Y%m%d).tar.gz dist/ .env
```

### 3. Security Checklist
- [ ] Environment variables secured
- [ ] Database credentials secured
- [ ] HTTPS enforced
- [ ] Regular security updates scheduled

## Troubleshooting Common HostAfrica Issues

### Issue 1: Node.js App Won't Start
```bash
# Check logs
cat logs/error.log

# Common fixes:
# 1. Check Node.js version compatibility
# 2. Verify startup file path
# 3. Check port configuration
```

### Issue 2: Database Connection Fails
```bash
# Verify connection string
echo $DATABASE_URL

# Test connection
telnet localhost 5432
```

### Issue 3: Email Not Sending
```bash
# Test SMTP settings
telnet mail.faithmundia.co.ke 587
```

## 🎉 Go Live Checklist

- [ ] Application builds successfully
- [ ] Database connected and schema imported
- [ ] Environment variables configured
- [ ] Files uploaded to HostAfrica
- [ ] Node.js app configured and running
- [ ] Domain pointing to HostAfrica
- [ ] SSL certificate active
- [ ] Email functionality tested
- [ ] Contact form working
- [ ] All pages loading correctly
- [ ] Performance optimized

## Support Resources

- **HostAfrica Support**: [support link]
- **Application Logs**: Check HostAfrica cPanel → Error Logs
- **Database Issues**: Use HostAfrica's phpPgAdmin
- **Email Issues**: Check HostAfrica's Email section

---

🚀 **Your Faith Mundia Consulting Platform is ready to serve clients at https://faithmundia.co.ke!**
