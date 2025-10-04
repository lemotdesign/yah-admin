# Auth0 Setup Guide for Netlify Deployment

## 🔐 Auth0 Configuration Steps

### 1. Create Auth0 Application

1. **Log into your Auth0 Dashboard** at https://manage.auth0.com/
2. **Navigate to Applications** → Click "Create Application"
3. **Choose "Regular Web Applications"** and name it "YAH Admin Panel"
4. **Select "Next.js"** as the technology

### 2. Configure Application Settings

In your Auth0 application settings, configure these URLs:

**For Local Development:**
```
Allowed Callback URLs:
http://localhost:3000/api/auth/callback

Allowed Logout URLs:
http://localhost:3000

Allowed Web Origins:
http://localhost:3000
```

**For Netlify Production:**
```
Allowed Callback URLs:
https://your-netlify-app-name.netlify.app/api/auth/callback
http://localhost:3000/api/auth/callback

Allowed Logout URLs:
https://your-netlify-app-name.netlify.app
http://localhost:3000

Allowed Web Origins:
https://your-netlify-app-name.netlify.app
http://localhost:3000
```

### 3. Environment Variables

Copy these values from your Auth0 application:

```env
# Auth0 Configuration
AUTH0_SECRET=use-a-long-random-value-here
AUTH0_BASE_URL=http://localhost:3000  # Change to your Netlify URL in production
AUTH0_ISSUER_BASE_URL=https://your-auth0-domain.auth0.com
AUTH0_CLIENT_ID=your-client-id-from-auth0
AUTH0_CLIENT_SECRET=your-client-secret-from-auth0
```

**⚠️ Important for AUTH0_SECRET:**
Generate a long random string. You can use this command:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### 4. Netlify Environment Variables

In your Netlify dashboard:
1. Go to **Site settings** → **Environment variables**
2. Add each environment variable from above
3. Make sure to update `AUTH0_BASE_URL` to your Netlify domain

### 5. Auth0 User Management Setup

1. **Go to User Management** → **Users** in Auth0 Dashboard
2. **Create a test user** for initial testing
3. **Configure user roles** (we'll implement RBAC later)

## 🔧 Next Steps After Configuration

1. Create your `.env.local` file with the values above
2. Test login locally with `npm run dev`
3. Deploy to Netlify and test production authentication
4. Set up user roles and permissions as needed

## 🚨 Security Checklist

- ✅ Use HTTPS in production (Netlify provides this automatically)
- ✅ Keep AUTH0_SECRET long and random (32+ characters)
- ✅ Never commit `.env.local` to version control
- ✅ Use different Auth0 applications for development and production (recommended)
- ✅ Enable MFA for Auth0 dashboard access
- ✅ Configure proper CORS origins