# Quick Setup Guide

This guide will help you get the YAH Admin Dashboard up and running quickly.

## Prerequisites

- Node.js 18+ installed
- PostgreSQL database (local or cloud)
- Auth0 account

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Set Up Auth0

1. Go to [Auth0 Dashboard](https://manage.auth0.com)
2. Create a new **Regular Web Application**
3. Note your Domain, Client ID, and Client Secret
4. Configure these URLs in your Auth0 application:
   - **Allowed Callback URLs**: `http://localhost:3000/auth/callback`
   - **Allowed Logout URLs**: `http://localhost:3000`

## Step 3: Configure Environment Variables

Create a `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

Edit `.env.local` and fill in your values:

```env
# Database (update with your PostgreSQL connection string)
DATABASE_URL="postgresql://user:password@localhost:5432/yah_admin?schema=public"

# Auth0 (get these from your Auth0 dashboard)
AUTH0_DOMAIN='your-domain.auth0.com'
AUTH0_CLIENT_ID='your-client-id'
AUTH0_CLIENT_SECRET='your-client-secret'
AUTH0_SECRET='generate-this-with-openssl-rand-hex-32'
APP_BASE_URL='http://localhost:3000'
```

### Generate AUTH0_SECRET

Run this command to generate a secure secret:

```bash
openssl rand -hex 32
```

## Step 4: Set Up Database

Initialize Prisma and push the schema to your database:

```bash
# Generate Prisma Client
npx prisma generate

# Push schema to database
npx prisma db push
```

## Step 5: Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your admin dashboard!

## Testing Auth0 Integration

1. Click "Login" or "Get Started" button
2. You'll be redirected to Auth0 login page
3. Create an account or login
4. You'll be redirected back to the dashboard

## Common Issues

### "Module not found" errors

Make sure you've run `npm install` to install all dependencies.

### Auth0 Configuration Warnings

These warnings during build are normal if you haven't set up the environment variables yet. They won't appear once `.env.local` is properly configured.

### Database Connection Errors

- Verify your DATABASE_URL is correct
- Make sure PostgreSQL is running
- Check that the database exists

### Auth0 Redirect Errors

- Verify callback URLs are correctly configured in Auth0
- Make sure APP_BASE_URL matches your running application URL

## Next Steps

- Explore the Prisma schema in `prisma/schema.prisma`
- Add more data models as needed
- Customize the dashboard in `src/app/page.tsx`
- Integrate Untitled UI PRO components (requires license)
- Add branding from [yah.digital](https://yah.digital)

## Useful Commands

```bash
# Development
npm run dev          # Start dev server

# Build
npm run build        # Build for production
npm start           # Start production server

# Code Quality
npm run lint        # Run ESLint

# Database
npx prisma studio   # Open database GUI
npx prisma generate # Generate Prisma Client
npx prisma db push  # Push schema changes to DB
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Auth0 Next.js SDK](https://github.com/auth0/nextjs-auth0)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
