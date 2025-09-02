# GitHub Files Checklist

## ✅ Essential Files for GitHub Repository

After downloading and unzipping your project, make sure these files/folders are included:

### 📁 Core Application Files
- [ ] `dist/` folder (Your built application - CRITICAL!)
- [ ] `package.json` (Dependencies list)
- [ ] `package-lock.json` (Exact versions)

### 📁 Source Code (for future updates)
- [ ] `client/` folder (React frontend source)
- [ ] `server/` folder (Express backend source) 
- [ ] `shared/` folder (Database schemas)

### 📁 Configuration Files
- [ ] `vite.config.ts` (Build settings)
- [ ] `tailwind.config.ts` (Styling)
- [ ] `tsconfig.json` (TypeScript)
- [ ] `drizzle.config.ts` (Database)
- [ ] `postcss.config.js` (CSS)
- [ ] `components.json` (UI components)

### 📁 Deployment Files
- [ ] `deployment/` folder with:
  - [ ] `database-schema.sql`
  - [ ] `production.env.example` 
  - [ ] `DEPLOYMENT_GUIDE.md`
  - [ ] `GITHUB_DEPLOYMENT_GUIDE.md`

## ❌ Files to DELETE Before GitHub Upload

Remove these Replit-specific files:
- [ ] `node_modules/` folder (too large, will reinstall)
- [ ] `.replit` file (Replit config)
- [ ] `replit.nix` file (Replit environment)
- [ ] Any `.env` files with actual passwords

## 🔒 Important Security Notes

- **Never upload** `.env` files with real passwords
- **Use** `production.env.example` as a template instead
- **Set actual passwords** directly in your HostAfrica hosting panel

## 📊 Expected Repository Size

After cleanup, your repository should be:
- **Total files**: ~200-300 files
- **Size**: ~15-25 MB (without node_modules)
- **Key folder**: `dist/` (~500KB - this runs your app)