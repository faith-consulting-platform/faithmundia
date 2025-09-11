# 🚀 cPanel Git Version Control - Faith Mundia Platform Deployment

## ✅ Prerequisites Check
- [x] Your repository is on GitHub: `faith-consulting-platform/faithmundia`
- [x] Your platform is built and ready (`deployment-package/` folder exists)
- [x] Your cPanel has Git Version Control feature

---

## 📋 **STEP-BY-STEP cPanel Git Deployment**

### **Step 1: Access cPanel Git Version Control**
1. **Log into your HostAfrica cPanel**
2. **Find "Git Version Control"** (usually in Software section)
3. **Click "Git Version Control"**

### **Step 2: Create Repository Connection**
1. **Click "Create"** (to create new repository)
2. **Fill in Repository Details:**
   ```
   Repository URL: https://github.com/faith-consulting-platform/faithmundia.git
   Repository Path: /public_html/
   Repository Name: faithmundia
   Branch: main
   ```

### **Step 3: Clone Repository**
1. **Click "Create"** to clone the repository
2. **Wait for cloning to complete** (may take 30-60 seconds)
3. **Verify files are present** in File Manager → public_html/

### **Step 4: Configure for Production**

#### **A. Install Dependencies**
In cPanel Terminal (or SSH):
```bash
cd /home/faithmun/public_html
npm install --production
```

#### **B. Build the Application**
```bash
npm run build
```

#### **C. Set Up Database**
1. **Go to cPanel → PostgreSQL Databases**
2. **Create database:** `faithmun_faithconsulting`
3. **Create user:** `faithmun_faithconsulting`
4. **Set password:** `MediumHigh2025@#`
5. **Import schema:**
   ```bash
   psql -h localhost -U faithmun_faithconsulting -d faithmun_faithconsulting -f database-schema.sql
   ```

#### **D. Configure Environment**
1. **Copy production environment:**
   ```bash
   cp deployment-package/.env .env
   ```
2. **Verify .env settings:**
   ```env
   DATABASE_URL=postgresql://faithmun_faithconsulting:MediumHigh2025@#@localhost:5432/faithmun_faithconsulting
   SMTP_HOST=mail.faithmundia.co.ke
   SMTP_PORT=587
   SMTP_USER=consult@faithmundia.co.ke
   NODE_ENV=production
   PORT=5000
   ```

### **Step 5: Deploy Application**

#### **A. Copy Production Files**
```bash
# Copy built application
cp -r deployment-package/dist/* ./

# Copy production configuration
cp deployment-package/.htaccess ./
cp deployment-package/package.json ./
```

#### **B. Start Application**
```bash
npm start
```

### **Step 6: Set Up Auto-Deploy (Optional)**

#### **A. Create Deploy Hook**
In Git Version Control:
1. **Click "Manage"** next to your repository
2. **Enable "Pull on Deploy"**
3. **Set Deploy Hook URL:** `/deploy.php`

#### **B. Create Deploy Script**
Create `/public_html/deploy.php`:
```php
<?php
// Auto-deploy script for Faith Mundia Platform
if ($_GET['secret'] === 'FaithMundia2025Deploy') {
    exec('cd /home/faithmun/public_html && git pull origin main');
    exec('cd /home/faithmun/public_html && npm install --production');
    exec('cd /home/faithmun/public_html && npm run build');
    exec('cd /home/faithmun/public_html && cp deployment-package/dist/* ./');
    echo "Deployed successfully!";
} else {
    echo "Unauthorized";
}
?>
```

#### **C. Add GitHub Webhook**
1. **Go to GitHub repository settings**
2. **Add webhook:** `https://faithmundia.co.ke/deploy.php?secret=FaithMundia2025Deploy`

---

## 🔄 **FUTURE UPDATES**

### **Method 1: Using cPanel Git (Recommended)**
1. **Make changes in your GitHub repository**
2. **Go to cPanel → Git Version Control**
3. **Click "Pull" next to your repository**
4. **Application updates automatically!**

### **Method 2: Auto-Deploy (If webhook is set up)**
1. **Push changes to GitHub**
2. **Webhook automatically triggers deployment**
3. **No manual intervention needed!**

---

## 🛠️ **TROUBLESHOOTING**

### **Common Issues:**

#### **1. Git Clone Fails**
```bash
# Check SSH keys or use HTTPS
Repository URL: https://github.com/faith-consulting-platform/faithmundia.git
```

#### **2. Dependencies Fail**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install --production
```

#### **3. Build Fails**
```bash
# Check Node.js version
node --version  # Should be 18+
npm --version   # Should be 8+
```

#### **4. Database Connection Fails**
- Verify database credentials in cPanel
- Check DATABASE_URL in .env file
- Ensure PostgreSQL service is running

---

## 🎯 **VERIFICATION STEPS**

### **1. Check Files**
```bash
ls -la /home/faithmun/public_html/
# Should show: dist/, .env, .htaccess, package.json, etc.
```

### **2. Check Application**
```bash
npm start
# Should start on port 5000
```

### **3. Check Website**
- Visit: `https://faithmundia.co.ke`
- Should load your consulting platform

### **4. Check Contact Form**
- Fill out consultation request form
- Check email delivery
- Verify database storage

---

## 📝 **BENEFITS OF Git Deployment**

✅ **Automated deployments** - Push to GitHub, pull in cPanel
✅ **Version control** - Track all changes and rollbacks
✅ **Backup safety** - Your code is always backed up on GitHub
✅ **Team collaboration** - Multiple developers can contribute
✅ **Easy updates** - One-click deployments from cPanel

---

## 🔐 **SECURITY NOTES**

- Keep your deploy hook secret secure
- Use environment variables for sensitive data
- Regularly update dependencies
- Monitor deployment logs in cPanel

**Your Faith Mundia platform is now ready for professional Git-based deployment! 🚀**
