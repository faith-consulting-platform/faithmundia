# 📁 FileZilla FTP Upload Guide for HostAfrica

## 🔧 Step 1: Get Your HostAfrica FTP Credentials

From your HostAfrica cPanel, you'll need:

### Option A: Main FTP Account (Recommended)
- **Host/Server**: `ftp.faithmundia.co.ke` or `faithmundia.co.ke`
- **Username**: Your main cPanel username (usually your domain without .co.ke)
- **Password**: Your cPanel password
- **Port**: 21 (FTP) or 22 (SFTP - more secure)
- **Protocol**: FTP or SFTP

### Option B: Create New FTP Account (Alternative)
In cPanel → File Manager → FTP Accounts:
1. Create new FTP user
2. Set directory to `/public_html`
3. Note the credentials

## 🚀 Step 2: Download FileZilla

1. Download from: https://filezilla-project.org/
2. Install FileZilla Client (free version)

## ⚙️ Step 3: Configure FileZilla Connection

### Quick Connect Method:
1. Open FileZilla
2. At the top, enter:
   - **Host**: `ftp.faithmundia.co.ke`
   - **Username**: [Your cPanel username]
   - **Password**: [Your cPanel password]  
   - **Port**: 21
3. Click "Quickconnect"

### Site Manager Method (Recommended):
1. File → Site Manager (or Ctrl+S)
2. Click "New Site"
3. Name it "HostAfrica Faith Mundia"
4. Configure:
   ```
   Protocol: FTP - File Transfer Protocol
   Host: ftp.faithmundia.co.ke
   Port: 21
   Encryption: Use explicit FTP over TLS if available
   Logon Type: Normal
   User: [your-cpanel-username]
   Password: [your-cpanel-password]
   ```
5. Click "Connect"

## 📂 Step 4: Navigate to Upload Directory

### In FileZilla Remote Directory (Right Panel):
1. You should see folders like: `public_html`, `mail`, `etc`
2. **Double-click `public_html`** - This is your website root
3. Your remote path should show: `/public_html`

### Your Local Directory (Left Panel):
1. Navigate to: `/workspaces/faithmundia/deployment-package/`
2. You should see all your files ready for upload

## ⬆️ Step 5: Upload Your Files

### Method 1: Drag & Drop
1. **Select ALL files** in deployment-package folder (left panel)
2. **Drag them to public_html** (right panel)
3. FileZilla will transfer all files

### Method 2: Right-Click Upload
1. Select files in left panel
2. Right-click → "Upload"

### Files to Upload:
```
✅ dist/ folder (your app)
✅ .env (environment config)
✅ .htaccess (server config)
✅ package.json (dependencies)
✅ database-schema.sql (database setup)
✅ shared/ folder (shared utilities)
✅ drizzle.config.ts (database config)
```

## 📊 Upload Progress

FileZilla will show:
- **Transfer queue** at bottom
- **Progress bars** for each file
- **Success/Failed transfers**

### Estimated Upload Time:
- Total size: ~5-10 MB
- On average connection: 2-5 minutes

## ✅ Step 6: Verify Upload

### Check in FileZilla:
1. Refresh remote directory (F5)
2. Verify all files are in `/public_html`
3. Check file sizes match

### Check in cPanel File Manager:
1. Login to HostAfrica cPanel
2. File Manager → public_html
3. Confirm all files uploaded correctly

## 🔒 Security Tips

### Use SFTP Instead of FTP (Recommended):
```
Protocol: SFTP - SSH File Transfer Protocol
Host: faithmundia.co.ke
Port: 22
Username: [your-cpanel-username]
Password: [your-cpanel-password]
```

### Enable Encryption:
- In Site Manager → Encryption: "Require explicit FTP over TLS"

## 🚨 Troubleshooting

### Connection Issues:
```
❌ "Connection refused"
→ Try port 2222 or 22 instead of 21
→ Use domain name: faithmundia.co.ke

❌ "Login failed"  
→ Verify cPanel username/password
→ Create new FTP account in cPanel

❌ "Cannot retrieve directory listing"
→ In FileZilla: Server → Force showing hidden files
→ Try passive mode: Edit → Settings → FTP → Use passive mode
```

### Upload Issues:
```
❌ "Permission denied"
→ Upload to /public_html not root directory
→ Check file permissions in cPanel

❌ "Transfer failed"
→ Check file isn't corrupted
→ Try uploading smaller batches
```

## 📋 Post-Upload Checklist

After successful upload:

### 1. Database Setup
```bash
# In cPanel → phpMyAdmin:
1. Select faithmun_faithconsulting database
2. Import database-schema.sql
3. Verify tables created
```

### 2. File Permissions
```bash
# In cPanel File Manager:
1. Select .htaccess → Permissions → 644
2. Select dist folder → Permissions → 755
3. All files should have correct permissions
```

### 3. Environment Variables
```bash
# Verify .env file contains:
DATABASE_URL=postgresql://faithmun_faithconsulting:MediumHigh2025@#@localhost:5432/faithmun_faithconsulting
SMTP_HOST=mail.faithmundia.co.ke
```

### 4. Test Your Site
1. Visit: https://faithmundia.co.ke
2. Check if application loads
3. Test contact form functionality

## 🎯 Quick Reference

### Your Upload Details:
- **Local folder**: `/workspaces/faithmundia/deployment-package/`
- **Remote folder**: `/public_html`
- **FTP Host**: `ftp.faithmundia.co.ke`
- **Domain**: https://faithmundia.co.ke

### FileZilla Settings:
```
Host: ftp.faithmundia.co.ke
Port: 21 (FTP) or 22 (SFTP)
User: [your-cpanel-username]
Pass: [your-cpanel-password]
Directory: /public_html
```

Your Faith Mundia Consulting Platform is ready for FTP upload! 🚀

---
*Need help? Check the other deployment guides in this folder or contact HostAfrica support.*
