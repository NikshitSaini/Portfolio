# 📧 EmailJS Setup Guide

To enable the contact form functionality, you need to set up EmailJS. Follow these steps:

## 1. Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)

## 2. Add Email Service

1. Go to **Email Services** in your dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Follow the connection steps
5. Copy your **Service ID**//service_5i9msbc

## 3. Create Email Template

1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact from {{name}}

From: {{name}}
Email: {{email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Copy your **Template ID**//template_42xe7ow

## 4. Get Your Public Key

1. Go to **Account** in dashboard
2. Find your **Public Key** (under API Keys)
3. Copy it

## 5. Update Contact.js

Open `/src/components/Contact/Contact.js` and replace these lines (around line 26-28):

```javascript
const serviceID = "service_5i9msbc"; // Replace with your Service ID
const templateID = "template_42xe7ow"; // Replace with your Template ID
const publicKey = "fFFEUBSLszrEalkh-"; // Replace with your Public Key
```

## 6. Test the Contact Form

1. Visit your portfolio
2. Go to the Contact page
3. Fill out the form
4. Submit and check your email!

## Example Configuration

```javascript
const serviceID = "service_abc123";
const templateID = "template_xyz456";
const publicKey = "user_789def";
```

## Troubleshooting

- **Form not sending?** Check browser console for errors
- **Not receiving emails?** Verify your email service is properly connected
- **Rate limit reached?** Free plan allows 200 emails/month

## Alternative: Formspree (No Code Setup)

If you prefer a simpler solution without EmailJS setup:

1. Go to [Formspree.io](https://formspree.io/)
2. Create a free account
3. Create a new form
4. Get your form endpoint
5. Replace the EmailJS code in `Contact.js` with a simple POST request to Formspree

---

**Need help?** Contact me or check EmailJS documentation: https://www.emailjs.com/docs/
