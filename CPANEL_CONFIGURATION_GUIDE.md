# HostAfrica cPanel Configuration Guide for faithmundia.co.ke

## 🎯 **What You Need to Configure in HostAfrica cPanel**

Since you have cPanel access, here's exactly what you need to do for DNS and domain configuration:

## 1. 🌐 **Domain Management in cPanel**

### **If faithmundia.co.ke is Already Registered with HostAfrica:**
✅ **You DON'T need to change DNS** - HostAfrica already handles this automatically!

**What to check:**
1. **Login to cPanel** → Look for **"Subdomains"** or **"Addon Domains"**
2. **Verify your domain** `faithmundia.co.ke` is listed as:
   - Primary domain, OR
   - Addon domain, OR 
   - Subdomain

### **If faithmundia.co.ke is Registered Elsewhere (e.g., Safaricom, Ke2, etc.):**
📋 **You NEED to update nameservers** at your domain registrar:

**HostAfrica Nameservers (typical):**
```
ns1.hostafrica.co.ke
ns2.hostafrica.co.ke
```
*(Check your HostAfrica welcome email for exact nameservers)*

**Where to update:**
- Login to your domain registrar (where you bought faithmundia.co.ke)
- Find "DNS Management" or "Nameservers"
- Replace current nameservers with HostAfrica's nameservers

## 2. 📁 **File Upload Location in cPanel**

### **Determine Your Upload Directory:**

**Option A: Primary Domain**
If `faithmundia.co.ke` is your primary domain:
```
Upload location: /public_html/
```

**Option B: Addon Domain**
If `faithmundia.co.ke` is an addon domain:
```
Upload location: /public_html/faithmundia.co.ke/
```

**How to check:**
1. cPanel → **"File Manager"**
2. Look for folders in `/public_html/`:
   - If you see `faithmundia.co.ke/` folder → Upload to `/public_html/faithmundia.co.ke/`
   - If no domain folder → Upload to `/public_html/`

## 3. 🗄️ **Database Setup in cPanel**

### **Create PostgreSQL Database:**

1. **cPanel → "PostgreSQL Databases"**
2. **Create Database:**
   ```
   Database Name: faith_consulting
   ```
   *(Note: cPanel might prefix with your username, e.g., username_faith_consulting)*

3. **Create Database User:**
   ```
   Username: faith_user
   Password: [Strong password - save this!]
   ```

4. **Add User to Database:**
   - Select user: `faith_user`
   - Select database: `faith_consulting`
   - Grant: **ALL PRIVILEGES**

5. **Note Your Connection Details:**
   ```
   Host: localhost
   Database: username_faith_consulting (with your cPanel username prefix)
   Username: username_faith_user (with your cPanel username prefix)
   Password: [your password]
   Port: 5432
   ```

### **Import Database Schema:**
1. **cPanel → "phpPgAdmin"** (or PostgreSQL management tool)
2. **Select your database** (`username_faith_consulting`)
3. **Import/Execute** the contents of `database-schema.sql`

## 4. 📧 **Email Configuration in cPanel**

### **Create Email Account:**

1. **cPanel → "Email Accounts"**
2. **Create Account:**
   ```
   Email: consult@faithmundia.co.ke
   Password: [Strong password - save this!]
   Mailbox Quota: 1000 MB (or unlimited)
   ```

### **Get SMTP Settings:**
1. **cPanel → "Email Accounts" → "Connect Devices"**
2. **Note these settings for your .env file:**
   ```
   SMTP Host: mail.faithmundia.co.ke (or HostAfrica's mail server)
   SMTP Port: 587 (recommended) or 465
   Username: consult@faithmundia.co.ke
   Password: [your email password]
   Security: TLS/STARTTLS
   ```

## 5. 🔧 **Node.js Application Setup in cPanel**

### **Configure Node.js App:**

1. **cPanel → "Node.js Apps" or "Node.js Selector"**
2. **Create Application:**
   ```
   Node.js Version: 18.x (or highest available)
   Application Root: public_html/ (or public_html/faithmundia.co.ke/)
   Application URL: faithmundia.co.ke
   Startup File: dist/index.js
   ```

3. **Set Environment Variables:**
   - In Node.js app settings, add environment variables:
   ```
   NODE_ENV=production
   PORT=5000
   DATABASE_URL=postgresql://username_faith_user:password@localhost:5432/username_faith_consulting
   ```

## 6. 🔒 **SSL Certificate in cPanel**

### **Enable SSL:**

1. **cPanel → "SSL/TLS"**
2. **Let's Encrypt SSL:**
   - Select domain: `faithmundia.co.ke`
   - Include: `www.faithmundia.co.ke`
   - Click **"Issue"**

3. **Force HTTPS:**
   - **cPanel → "SSL/TLS" → "Force HTTPS Redirect"**
   - Enable for `faithmundia.co.ke`

## 7. 📋 **Your .env Configuration**

Based on your cPanel setup, your `.env` file should look like:

```env
# Database (replace with YOUR actual cPanel details)
DATABASE_URL=postgresql://yourusername_faith_user:your_db_password@localhost:5432/yourusername_faith_consulting

# Email (replace with YOUR actual details)
SMTP_HOST=mail.faithmundia.co.ke
SMTP_PORT=587
SMTP_USER=consult@faithmundia.co.ke
SMTP_PASS=your_email_password
NOTIFICATION_EMAIL=consult@faithmundia.co.ke

# Application
NODE_ENV=production
PORT=5000
SESSION_SECRET=your_very_secure_session_secret_minimum_32_characters_long
```

## 8. 🚀 **Upload and Deploy Steps**

### **Upload Files:**
1. **cPanel → "File Manager"**
2. **Navigate to your upload directory** (`public_html/` or `public_html/faithmundia.co.ke/`)
3. **Upload all files** from your `deployment-package/` folder
4. **Extract if needed** (if you uploaded as ZIP)

### **Install Dependencies:**
1. **cPanel → "Terminal"** (if available) OR SSH
2. **Navigate to your app directory:**
   ```bash
   cd public_html/  # or cd public_html/faithmundia.co.ke/
   ```
3. **Install dependencies:**
   ```bash
   npm install --production
   ```

### **Start Application:**
1. **cPanel → "Node.js Apps"**
2. **Start your application**
3. **Check status** - should show "Running"

## 9. ✅ **Verification Checklist**

### **Check Domain Resolution:**
```bash
# Test if domain points to HostAfrica
ping faithmundia.co.ke
nslookup faithmundia.co.ke
```

### **Check Website:**
- [ ] Visit `https://faithmundia.co.ke` - loads correctly
- [ ] SSL certificate valid (green lock)
- [ ] Contact form works
- [ ] Email notifications received

### **Check cPanel Status:**
- [ ] Domain listed in cPanel
- [ ] Database created and accessible
- [ ] Email account working
- [ ] Node.js app status: "Running"
- [ ] SSL certificate active

## 🆘 **Common cPanel Issues & Solutions**

### **Issue 1: Domain Not Listed in cPanel**
**Solution:** 
- Contact HostAfrica support to add `faithmundia.co.ke` as addon domain
- Or use a subdomain like `consulting.yourdomain.com`

### **Issue 2: PostgreSQL Not Available**
**Solution:**
- Check if your hosting plan includes PostgreSQL
- Alternative: Use MySQL (modify database schema)
- Upgrade hosting plan if needed

### **Issue 3: Node.js Apps Not Available**
**Solution:**
- Check if your hosting plan supports Node.js
- Contact HostAfrica to enable Node.js
- Consider upgrading to VPS/dedicated hosting

### **Issue 4: Email Not Working**
**Solution:**
- Verify email account created in cPanel
- Check SMTP settings in .env file
- Test email using cPanel webmail

## 📞 **HostAfrica Support Information**

If you encounter issues:
- **cPanel Issues:** HostAfrica technical support
- **Domain Issues:** Check with your domain registrar
- **Node.js Issues:** HostAfrica Node.js support team

---

## 🎯 **Quick Summary for HostAfrica cPanel:**

1. **Domain:** Should already work if registered with HostAfrica
2. **Upload:** Use cPanel File Manager → `public_html/`
3. **Database:** Create in cPanel PostgreSQL Databases
4. **Email:** Create in cPanel Email Accounts  
5. **Node.js:** Configure in cPanel Node.js Apps
6. **SSL:** Enable in cPanel SSL/TLS section

**No external DNS changes needed if domain is with HostAfrica!** 🎉
