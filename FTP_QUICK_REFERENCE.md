# 🚀 Quick FTP Upload Reference

## Your FileZilla Settings:
```
Host: ftp.faithmundia.co.ke
Username: [Your cPanel username]
Password: [Your cPanel password]
Port: 21 (FTP) or 22 (SFTP - recommended)
Remote Directory: /public_html
```

## Upload These Files:
From: `/workspaces/faithmundia/deployment-package/`
To: `/public_html` on HostAfrica

✅ dist/ (your built app)
✅ .env (with your database config)
✅ .htaccess (server rules)
✅ package.json
✅ database-schema.sql
✅ shared/ folder
✅ drizzle.config.ts

## After Upload:
1. **Import database**: cPanel → phpMyAdmin → Import database-schema.sql
2. **Test site**: Visit https://faithmundia.co.ke
3. **Check logs**: cPanel → Error Logs if issues

## Need Your cPanel Credentials?
Check your HostAfrica welcome email or login to HostAfrica client area.

---
*Total upload size: ~5-10 MB | Upload time: 2-5 minutes*
