# 🚀 Netlify Deployment Guide for YAH Admin

This guide provides step-by-step instructions to deploy your YAH Admin panel to Netlify with GitHub OAuth authentication.

## 📋 Prerequisites

- GitHub account with admin access to your repository
- Netlify account (free tier works perfectly)
- GitHub OAuth App configured (see `GITHUB_OAUTH_SETUP.md`)

## 🔧 Step 1: Prepare GitHub OAuth App

### Create GitHub OAuth Application

1. Go to **GitHub Settings** → **Developer settings** → **OAuth Apps**
2. Click **"New OAuth App"**
3. Fill in the details:
   ```
   Application name: YAH Admin Dashboard
   Homepage URL: https://your-app-name.netlify.app
   Authorization callback URL: https://your-app-name.netlify.app/api/auth/callback/github
   ```
4. Click **"Register application"**
5. **Copy your Client ID and Client Secret** - you'll need these for Netlify

### Generate NextAuth Secret

Run this command locally to generate a secure secret:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

## 🌐 Step 2: Deploy to Netlify

### Option A: Deploy from Git (Recommended)

1. **Log in to Netlify**: https://app.netlify.com/
2. **Click "New site from Git"**
3. **Choose GitHub** and authorize Netlify to access your repositories
4. **Select your repository**: `yah-admin`
5. **Configure build settings**:
   ```
   Branch to deploy: main
   Build command: npm run build
   Publish directory: .next
   ```
6. **Click "Deploy site"**

### Option B: Manual Deployment

1. **Build locally**:
   ```bash
   npm run build
   ```
2. **Drag and drop** the `.next` folder to Netlify dashboard

## ⚙️ Step 3: Configure Environment Variables

In your Netlify site dashboard:

1. **Go to Site settings** → **Environment variables**
2. **Add the following variables**:

   ```
   NEXTAUTH_URL = https://your-actual-netlify-url.netlify.app
   NEXTAUTH_SECRET = your-generated-secret-from-step-1
   GITHUB_ID = your-github-client-id
   GITHUB_SECRET = your-github-client-secret
   ```

3. **Save the variables**

## 🔄 Step 4: Update GitHub OAuth URLs

After your site is deployed and you have the Netlify URL:

1. **Go back to your GitHub OAuth App settings**
2. **Update the URLs**:
   ```
   Homepage URL: https://your-actual-netlify-url.netlify.app
   Authorization callback URL: https://your-actual-netlify-url.netlify.app/api/auth/callback/github
   ```
3. **Save the changes**

## 🧪 Step 5: Test Your Deployment

1. **Visit your Netlify URL**
2. **Click "Sign in with GitHub"**
3. **Authorize the application** on GitHub
4. **Verify you're redirected to the dashboard**
5. **Test navigation** through all pages (Analytics, Projects, Settings, Users)

## 🛠️ Troubleshooting

### Common Issues and Solutions

**❌ "Application Error" or "Internal Server Error"**
- Check that all environment variables are set correctly in Netlify
- Verify your GitHub OAuth callback URL matches exactly
- Check Netlify function logs for specific errors

**❌ "Invalid client: no registered origin"**
- Your NEXTAUTH_URL doesn't match your actual Netlify URL
- Update the NEXTAUTH_URL environment variable
- Redeploy your site

**❌ "OAuth callback mismatch"**
- Your GitHub OAuth callback URL is incorrect
- Update it to: `https://your-site.netlify.app/api/auth/callback/github`

**❌ Build failures**
- Clear the Netlify build cache and redeploy
- Check that your `next.config.js` is configured correctly
- Verify all dependencies are properly installed

### Debug Steps

1. **Check Netlify Deploy Log**:
   - Go to your site dashboard → Deploys
   - Click on the latest deploy to see build logs

2. **Check Function Logs**:
   - Go to site dashboard → Functions
   - Check NextAuth.js function logs for errors

3. **Verify Environment Variables**:
   - Ensure no extra spaces or quotes in variable values
   - Double-check variable names match exactly

## 🎯 Post-Deployment Checklist

- [ ] Site loads successfully at Netlify URL
- [ ] GitHub OAuth login works
- [ ] Dashboard displays correctly
- [ ] All navigation links work
- [ ] Pages load without errors
- [ ] Mobile responsiveness works
- [ ] Authentication persists on page refresh

## 🔐 Security Notes

- Never commit OAuth secrets to your repository
- Use Netlify's environment variables for all sensitive data
- Your NEXTAUTH_SECRET should be at least 32 characters
- Regularly rotate your GitHub OAuth client secret

## 📞 Need Help?

If you encounter issues:

1. **Check the browser console** for JavaScript errors
2. **Review Netlify deploy logs** for build issues
3. **Verify GitHub OAuth configuration** matches your Netlify URL exactly
4. **Test locally first** with the same environment variables

## 🎉 Success!

Your YAH Admin panel is now live and ready for your team to use. You can customize the dashboard, add new features, and scale as needed.

---

**🚀 Ready to manage your YAH Digital operations with style!**