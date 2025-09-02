# GitHub + HostAfrica Deployment Guide

## Step 1: Download Your Project from Replit

### Method 1: Download as ZIP (Recommended)
1. In your Replit project, click the **3 dots menu** (⋯) in the file explorer
2. Select **"Download as zip"**
3. Save the ZIP file to your computer (e.g., `faith-consulting-platform.zip`)

### Method 2: Manual File Download
If ZIP download doesn't work:
1. Select all files in the file explorer
2. Right-click and choose **"Download"**
3. This will download individual files

## Step 2: Prepare Files for GitHub

### Extract and Clean Up
1. **Unzip** the downloaded file to a folder (e.g., `faith-consulting-platform`)
2. **Navigate** into the extracted folder
3. **Delete** these folders/files (they're not needed for deployment):
   ```
   node_modules/          (will be reinstalled)
   .replit                (Replit-specific)
   replit.nix            (Replit-specific)
   ```

### Files to Keep for GitHub
Your GitHub repository should contain:
```
faith-consulting-platform/
├── client/               (React frontend source)
├── server/              (Express backend source)
├── shared/              (Shared schemas)
├── deployment/          (Deployment files)
├── dist/                (Built application - IMPORTANT!)
├── package.json         (Dependencies)
├── package-lock.json    (Lock file)
├── vite.config.ts      (Build configuration)
├── tailwind.config.ts  (Styling)
├── tsconfig.json       (TypeScript config)
├── drizzle.config.ts   (Database config)
├── postcss.config.js   (CSS processing)
└── components.json     (UI components)
```

## Step 3: Upload to GitHub

### Create GitHub Repository
1. Go to [GitHub.com](https://github.com) and sign in
2. Click **"New repository"** (green button)
3. Name it: `faith-consulting-platform`
4. Set to **Public** (required for free hosting)
5. **Don't** initialize with README (you already have files)
6. Click **"Create repository"**

### Upload Files
**Method A: GitHub Web Interface (Easier)**
1. In your new GitHub repo, click **"uploading an existing file"**
2. Drag and drop all your project files/folders
3. Add commit message: `Initial deployment setup`
4. Click **"Commit changes"**

**Method B: Command Line (if you have Git installed)**
1. Open terminal/command prompt in your project folder
2. Run these commands:
```bash
git init
git add .
git commit -m "Initial deployment setup"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/faith-consulting-platform.git
git push -u origin main
```

## Step 4: Connect GitHub to HostAfrica

### Option A: Using HostAfrica's Git Deployment (if available)
1. **Log into HostAfrica** control panel
2. Look for **"Git Deployment"** or **"GitHub Integration"**
3. **Connect your GitHub repository**
4. Set deploy branch to: `main`
5. Set build command to: `npm install && npm run build`
6. Set start command to: `npm start`

### Option B: Manual Deployment
If HostAfrica doesn't have GitHub integration:

1. **Download from GitHub**:
   - Go to your GitHub repo
   - Click green **"Code"** button
   - Select **"Download ZIP"**
   
2. **Upload to HostAfrica**:
   - Use HostAfrica's file manager or FTP
   - Upload all files to your domain directory
   - Install dependencies: `npm install --production`

## Step 5: Configure Your Domain

### Environment Variables on HostAfrica
1. **Create** `.env` file in your hosting directory
2. **Add** your production settings:
```env
NODE_ENV=production
DATABASE_URL=postgresql://your_db_user:your_password@your_host:5432/your_database
SMTP_HOST=mail.faithmundia.co.ke
SMTP_PORT=587
SMTP_USER=consult@faithmundia.co.ke
SMTP_PASS=your_actual_email_password
NOTIFICATION_EMAIL=consult@faithmundia.co.ke
PORT=5000
```

### Database Setup on HostAfrica
1. **Create PostgreSQL database** in HostAfrica control panel
2. **Run the schema** from `deployment/database-schema.sql`
3. **Update DATABASE_URL** with your actual database credentials

### Domain Configuration
1. **Set up Node.js app** in HostAfrica:
   - Application type: Node.js
   - Entry point: `dist/index.js`
   - Node version: 18 or higher
   
2. **Point domain** to your hosting:
   - Update DNS A record for faithmundia.co.ke
   - Point to HostAfrica's server IP address

## Step 6: Test Your Deployment

### Verify Everything Works
1. **Visit** https://faithmundia.co.ke
2. **Test contact form** by submitting a message
3. **Check email** notifications are working
4. **Verify** all pages load correctly

### Troubleshooting
- **Check logs** in HostAfrica control panel
- **Verify** environment variables are set
- **Confirm** database connection is working
- **Test** SMTP email settings

## Benefits of This Approach

✅ **Full Control**: Your domain works immediately  
✅ **Easy Updates**: Push to GitHub, redeploy from HostAfrica  
✅ **Professional**: No dependency on third-party deployment services  
✅ **Reliable**: Direct hosting with your own infrastructure  
✅ **Backup**: Your code is safely stored on GitHub  

Your consulting platform will be live at faithmundia.co.ke with full functionality!