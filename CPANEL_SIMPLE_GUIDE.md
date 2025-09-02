# 🎯 HostAfrica cPanel - Simple Configuration Steps

## **THE SIMPLE ANSWER:**

### **If your domain `faithmundia.co.ke` is registered WITH HostAfrica:**
✅ **NO DNS changes needed!** HostAfrica handles everything automatically.

### **If your domain `faithmundia.co.ke` is registered ELSEWHERE:**
📋 **You need to update nameservers** at your domain registrar to point to HostAfrica.

---

## 🔍 **How to Check Your Situation:**

### **Method 1: Check Your cPanel**
1. Login to HostAfrica cPanel
2. Look for your domain `faithmundia.co.ke` in:
   - **"Subdomains"** section
   - **"Addon Domains"** section
   - **"Primary Domain"** (if it's your main domain)

**If you see `faithmundia.co.ke` listed:** ✅ You're good! No DNS changes needed.
**If you DON'T see it:** 📋 You need to either add it as addon domain OR update nameservers.

### **Method 2: Check Online**
Visit: https://www.whatsmydns.net/
Enter: `faithmundia.co.ke`
**If it shows HostAfrica IP:** ✅ DNS is correct!
**If it shows different IP:** 📋 DNS needs updating.

---

## 📋 **What You Actually Need to Do in cPanel:**

```
cPanel Tasks for Faith Mundia Platform:
┌─────────────────────────────────────────┐
│ 1. 📁 UPLOAD FILES                      │
│    → File Manager                       │
│    → public_html/                       │
│    → Upload deployment-package files    │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│ 2. 🗄️ CREATE DATABASE                   │
│    → PostgreSQL Databases              │
│    → Create: faith_consulting           │
│    → Import: database-schema.sql        │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│ 3. 📧 CREATE EMAIL                      │
│    → Email Accounts                     │
│    → Create: consult@faithmundia.co.ke  │
│    → Note SMTP settings                 │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│ 4. 🔧 SETUP NODE.JS APP                 │
│    → Node.js Apps                       │
│    → Startup file: dist/index.js        │
│    → npm install --production           │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│ 5. 🔒 ENABLE SSL                        │
│    → SSL/TLS                            │
│    → Let's Encrypt for faithmundia.co.ke│
│    → Force HTTPS redirect               │
└─────────────────────────────────────────┘
```

---

## 🤔 **Still Confused About DNS?**

### **Scenario A: Domain Bought from HostAfrica**
```
You: "I bought faithmundia.co.ke from HostAfrica"
Answer: ✅ Do NOTHING! DNS already correct.
```

### **Scenario B: Domain Bought from Safaricom/Ke2/Other**
```
You: "I bought faithmundia.co.ke from [Other Company]"
Answer: 📋 Login to [Other Company] → Change nameservers to HostAfrica's
```

### **Scenario C: Not Sure Where Domain Was Bought**
```
Check: whois faithmundia.co.ke
Or: Login to wherever you manage/renew the domain
```

---

## 🎯 **HostAfrica Nameservers (if needed):**

```
Primary Nameserver:   ns1.hostafrica.co.ke
Secondary Nameserver: ns2.hostafrica.co.ke
```

*(Check your HostAfrica welcome email for exact nameservers - they might be different)*

---

## ⚡ **Quick Test:**

1. **Upload files** to cPanel File Manager
2. **Create database** in cPanel PostgreSQL
3. **Create email** in cPanel Email Accounts
4. **Setup Node.js** in cPanel Node.js Apps
5. **Enable SSL** in cPanel SSL/TLS
6. **Visit:** https://faithmundia.co.ke

**That's it!** 🎉

---

## 🆘 **Need Help?**

**For Domain/DNS Issues:**
- Contact HostAfrica support: "I need help configuring faithmundia.co.ke"

**For Technical Issues:**
- Follow the detailed: `CPANEL_CONFIGURATION_GUIDE.md`

**For Application Issues:**
- Check: `HOSTAFRICA_CHECKLIST.md`
