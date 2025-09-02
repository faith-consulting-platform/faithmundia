# Deploy to HostAfrica - Quick Steps for Faith Mundia

## YOUR DATABASE DETAILS:
- Database: faithmun_faithconsulting
- Username: faithmun_faithconsulting  
- Hostname: localhost
- Password: MediumHigh2025@#

## 1. Upload Files
Upload all files in this folder to your HostAfrica public_html directory:
- dist/ (application files)
- package.json (dependencies)
- .env (configure with your settings)
- database-schema.sql (import to database)

## 2. Configure .env file
Your .env file is already configured with correct database details:
```env
DATABASE_URL=postgresql://faithmun_faithconsulting:MediumHigh2025@#@localhost:5432/faithmun_faithconsulting
SMTP_HOST=mail.faithmundia.co.ke
SMTP_USER=consult@faithmundia.co.ke
```

## 3. Install Dependencies
In HostAfrica terminal:
```bash
npm install --production
```

## 4. Setup Database
Import database-schema.sql to your PostgreSQL database: faithmun_faithconsulting

## 5. Configure Node.js App
- Startup file: dist/index.js
- Node.js version: 18+
- Port: 5000

## 6. Test
Visit https://faithmundia.co.ke
