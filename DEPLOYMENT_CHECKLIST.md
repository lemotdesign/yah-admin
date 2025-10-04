# 🚀 Netlify Deployment Checklist

## Pre-Deployment Checklist

- [x] Next.js project setup complete
- [x] Tailwind CSS working
- [x] Login page functional locally
- [x] netlify.toml configuration file created
- [x] Package.json build scripts configured
- [ ] Code committed to GitHub
- [ ] Netlify deployment configured

## Deployment Steps

### 1. Push to GitHub
```bash
# Check current status
git status

# Add all files
git add .

# Commit changes
git commit -m "feat: Initial YAH Admin Panel with Auth0 integration ready"

# Push to GitHub
git push origin main
```

### 2. Deploy to Netlify

1. **Go to**: https://netlify.com
2. **Click**: "New site from Git"
3. **Select**: GitHub
4. **Choose**: `lemotdesign/yah-admin`
5. **Build settings** (should auto-detect):
   - Build command: `npm run build`
   - Publish directory: `.next`
6. **Click**: "Deploy site"

### 3. Configure Custom Domain (Optional)
- Go to **Domain settings** in Netlify
- Add your custom domain if you have one
- Or use the provided netlify.app subdomain

### 4. Set Environment Variables

In Netlify dashboard → **Site settings** → **Environment variables**:

```env
AUTH0_SECRET=generate-a-32-char-random-string
AUTH0_BASE_URL=https://your-app-name.netlify.app
AUTH0_ISSUER_BASE_URL=https://your-domain.auth0.com
AUTH0_CLIENT_ID=your-auth0-client-id
AUTH0_CLIENT_SECRET=your-auth0-client-secret
```

**Generate AUTH0_SECRET:**
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### 5. Configure Auth0 Application

In your Auth0 dashboard:

**Allowed Callback URLs:**
```
http://localhost:3004/api/auth/callback,https://your-app-name.netlify.app/api/auth/callback
```

**Allowed Logout URLs:**
```
http://localhost:3004,https://your-app-name.netlify.app
```

**Allowed Web Origins:**
```
http://localhost:3004,https://your-app-name.netlify.app
```

### 6. Test Deployment

- [ ] Visit your Netlify URL
- [ ] Check login page loads
- [ ] Test Auth0 login flow
- [ ] Verify redirects work

## Troubleshooting

**Build Fails?**
- Check build logs in Netlify
- Ensure all dependencies are in package.json
- Verify environment variables are set

**Auth0 Login Fails?**
- Double-check callback URLs
- Verify environment variables
- Check Auth0 application settings

**Styles Not Loading?**
- Ensure Tailwind CSS is building properly
- Check if PostCSS config is correct

## Post-Deployment

After successful deployment:
1. Update `.env.local` with your production URL for local testing
2. Set up database (Supabase/Neon/Railway)
3. Configure database environment variables
4. Test full authentication flow

---

**Ready to deploy? Let's go! 🚀**