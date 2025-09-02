# Faith Mundia Consulting Platform - Deployment Guide

## Overview
This guide will help you deploy your consulting platform to your own hosting provider (HostAfrica or any other hosting service that supports Node.js applications).

## What You Need

### 1. Hosting Requirements
Your hosting plan must support:
- **Node.js** (version 18 or higher)
- **PostgreSQL database** (version 12 or higher)
- **SMTP email service** (for contact form notifications)
- **File upload capability** (to upload your application files)

### 2. Files to Download from Replit
You need to download these files and folders from your Replit project:

**Essential Files:**
```
├── dist/                    # Built application files
│   ├── public/             # Frontend files (HTML, CSS, JS)
│   └── index.js           # Server file
├── node_modules/           # Dependencies (may need reinstalling)
├── package.json           # Project dependencies
├── package-lock.json      # Exact dependency versions
└── deployment/            # Deployment files (created for you)
    ├── database-schema.sql
    ├── production.env.example
    └── DEPLOYMENT_GUIDE.md
```

**Optional but Recommended:**
```
├── shared/                # Schema definitions
├── drizzle.config.ts     # Database configuration
├── tsconfig.json         # TypeScript configuration
└── tailwind.config.ts    # Styling configuration
```

## Step-by-Step Deployment

### Step 1: Database Setup

1. **Create PostgreSQL Database**
   - Log into your HostAfrica control panel
   - Create a new PostgreSQL database
   - Note down: database name, username, password, host, and port

2. **Run Database Schema**
   - Use your hosting provider's database management tool (like phpPgAdmin)
   - Execute the SQL commands from `deployment/database-schema.sql`
   - This creates the necessary tables for users and consultation requests

### Step 2: Configure Environment Variables

1. **Create Environment File**
   - Copy `deployment/production.env.example` to `.env`
   - Fill in your actual values:

```env
DATABASE_URL=postgresql://your_db_user:your_password@your_host:5432/your_database
SMTP_HOST=mail.faithmundia.co.ke
SMTP_PORT=587
SMTP_USER=consult@faithmundia.co.ke
SMTP_PASS=your_email_password
NOTIFICATION_EMAIL=consult@faithmundia.co.ke
NODE_ENV=production
PORT=5000
```

### Step 3: Upload Files

1. **Upload to Your Hosting**
   - Upload all files to your hosting directory (usually `public_html` or `www`)
   - Make sure the `dist/` folder is in the root directory

2. **Install Dependencies**
   - Access your hosting's terminal/SSH
   - Navigate to your application directory
   - Run: `npm install --production`

### Step 4: Configure Your Hosting

1. **Set Node.js Application**
   - In your hosting control panel, set up a Node.js application
   - Set the startup file to: `dist/index.js`
   - Set the Node.js version to 18 or higher

2. **Configure Domain**
   - Point your domain (faithmundia.co.ke) to your hosting server
   - Update DNS A records to point to your hosting provider's IP address

### Step 5: Test Your Deployment

1. **Check Application Status**
   - Visit your domain: `https://faithmundia.co.ke`
   - Verify the website loads correctly
   - Test the contact form by submitting a test message

2. **Monitor Logs**
   - Check your hosting's error logs if anything doesn't work
   - Common issues: missing environment variables, database connection problems

## Alternative: Using a Deployment Service

If your hosting provider doesn't support Node.js applications, consider these alternatives:

### Option 1: Vercel (Recommended)
1. Create a free Vercel account
2. Connect your GitHub repository (after uploading code there)
3. Configure environment variables in Vercel dashboard
4. Deploy with automatic domain setup

### Option 2: Railway
1. Create a Railway account
2. Deploy directly from GitHub
3. Add PostgreSQL database addon
4. Configure custom domain

### Option 3: DigitalOcean App Platform
1. Create a DigitalOcean account
2. Use App Platform for easy deployment
3. Add managed PostgreSQL database
4. Configure domain settings

## Email Configuration

For the contact form to work, you need SMTP settings:

### Using Faith's Current Email
```env
SMTP_HOST=mail.faithmundia.co.ke
SMTP_PORT=587
SMTP_USER=consult@faithmundia.co.ke
SMTP_PASS=your_actual_email_password
```

### Alternative Email Providers
- **Gmail**: Use App Passwords for SMTP
- **SendGrid**: Professional email service (requires API key)
- **Your hosting provider**: Many include email services

## Troubleshooting

### Common Issues

1. **"Cannot find module" errors**
   - Run `npm install --production` in your hosting directory
   - Ensure Node.js version is 18 or higher

2. **Database connection errors**
   - Verify your DATABASE_URL is correct
   - Check if your hosting allows external database connections
   - Ensure PostgreSQL service is running

3. **Email not working**
   - Verify SMTP credentials are correct
   - Check if your hosting blocks outgoing SMTP connections
   - Try using port 25, 465, or 587

4. **Website not loading**
   - Check if Node.js application is running
   - Verify the startup file is set to `dist/index.js`
   - Check error logs in your hosting control panel

### Getting Help

If you encounter issues:
1. Check your hosting provider's Node.js documentation
2. Contact HostAfrica support for Node.js setup assistance
3. Review error logs for specific error messages

## Success Checklist

Before considering deployment complete:
- [ ] Website loads at faithmundia.co.ke
- [ ] Contact form accepts submissions
- [ ] Email notifications are received
- [ ] All pages and sections display correctly
- [ ] Mobile responsiveness works
- [ ] SSL certificate is active (https://)

Your consulting platform should now be fully operational on your own domain and hosting!