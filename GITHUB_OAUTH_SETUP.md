# GitHub OAuth Setup Guide

## Overview
This project uses NextAuth.js with GitHub OAuth for authentication. Follow these steps to set up GitHub OAuth for your application.

## Step 1: Create a GitHub OAuth App

1. Go to GitHub Settings → Developer settings → OAuth Apps
2. Click "New OAuth App"
3. Fill in the application details:
   - **Application name**: YAH Admin (or your preferred name)
   - **Homepage URL**: `http://localhost:3001` (development) or your production URL
   - **Authorization callback URL**: `http://localhost:3001/api/auth/callback/github`
4. Click "Register application"

## Step 2: Get Your Credentials

After creating the app, you'll see:
- **Client ID**: Copy this value
- **Client Secret**: Click "Generate a new client secret" and copy the value

## Step 3: Update Environment Variables

Update your `.env.local` file with the GitHub OAuth credentials:

```bash
# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3001
NEXTAUTH_SECRET=your-nextauth-secret-key-here-32-chars-minimum

# GitHub OAuth Configuration
GITHUB_CLIENT_ID=your-actual-github-client-id
GITHUB_CLIENT_SECRET=your-actual-github-client-secret
```

## Step 4: Generate NextAuth Secret

Run this command to generate a secure secret:
```bash
openssl rand -base64 32
```

Or use this online generator: https://generate-secret.vercel.app/32

## Step 5: Testing

1. Start your development server: `npm run dev`
2. Navigate to `http://localhost:3001/login`
3. Click "Continue with GitHub"
4. You should be redirected to GitHub for authorization
5. After authorization, you'll be redirected back to the dashboard

## Production Setup

For production deployment:

1. Update the **Homepage URL** and **Authorization callback URL** in your GitHub OAuth app settings
2. Update `NEXTAUTH_URL` in your production environment variables
3. Use secure, randomly generated values for `NEXTAUTH_SECRET`

## Multi-Tenant Considerations

This setup supports multi-tenant authentication where:
- Each user authenticates with their GitHub account
- User data is associated with their GitHub profile
- Company/organization information can be stored separately in the database
- Access control is managed through the application, not GitHub organizations

## Next Steps

After setting up GitHub OAuth:
1. Implement user onboarding flow for company information
2. Set up database schema for multi-tenant data
3. Configure role-based access control
4. Implement GitHub Projects API integration