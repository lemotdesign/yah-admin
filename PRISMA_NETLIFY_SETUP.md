# Prisma + PostgreSQL Setup for Netlify

## 🌐 Database Options for Netlify Deployment

Since Netlify is a static hosting platform, you'll need a cloud PostgreSQL database. Here are the best options:

### Option 1: Supabase (Recommended) 🌟
**Free tier: 500MB, 2 databases**

1. **Sign up at** https://supabase.com/
2. **Create a new project**
3. **Go to Settings** → **Database**
4. **Copy the connection string** (looks like: `postgresql://postgres:[password]@[host]:5432/postgres`)

### Option 2: Neon (Great for Serverless) ⚡
**Free tier: 3GB, 1 database**

1. **Sign up at** https://neon.tech/
2. **Create a database**
3. **Copy the connection string** from dashboard

### Option 3: Railway (Developer-friendly) 🚂
**Free tier: $5 credit/month**

1. **Sign up at** https://railway.app/
2. **Create a PostgreSQL service**
3. **Copy the DATABASE_URL** from environment variables

### Option 4: PlanetScale (MySQL alternative) 🪐
If you prefer MySQL over PostgreSQL

## 🔧 Prisma Configuration Steps

### 1. Update Environment Variables

Add to your `.env.local` and Netlify environment variables:

```env
# Database Configuration
DATABASE_URL="postgresql://username:password@host:5432/database_name"

# Optional: Direct connection for Prisma Studio
DIRECT_URL="postgresql://username:password@host:5432/database_name"
```

### 2. Update Prisma Schema (if using connection pooling)

For production with connection pooling, update `prisma/schema.prisma`:

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider  = "postgresql"
  url       = env("DATABASE_URL")
  directUrl = env("DIRECT_URL") // Optional for connection pooling
}
```

### 3. Netlify-Specific Configuration

Create `netlify.toml` in your project root:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "18"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[functions]
  node_bundler = "esbuild"

# Redirect all API routes to Netlify Functions
[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/api/:splat"
  status = 200
```

### 4. Database Migration Commands

```bash
# Generate Prisma Client
npx prisma generate

# Push schema to database (for development)
npx prisma db push

# Create and apply migrations (for production)
npx prisma migrate deploy

# View your database
npx prisma studio
```

### 5. Netlify Build Configuration

Update your `package.json` scripts:

```json
{
  "scripts": {
    "build": "prisma generate && next build",
    "postinstall": "prisma generate",
    "dev": "next dev",
    "start": "next start",
    "lint": "next lint",
    "db:push": "prisma db push",
    "db:migrate": "prisma migrate dev",
    "db:deploy": "prisma migrate deploy",
    "db:studio": "prisma studio"
  }
}
```

## 🚀 Deployment Steps

### 1. Local Setup
```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.local.example .env.local
# Fill in your database URL

# Push schema to database
npm run db:push

# Start development server
npm run dev
```

### 2. Netlify Deployment
```bash
# Build locally to test
npm run build

# Deploy to Netlify
# (Either through Git integration or Netlify CLI)
```

### 3. Production Database Setup
```bash
# Run migrations on production database
npm run db:deploy
```

## 🔍 Database Recommendations by Use Case

**🏃‍♂️ Quick Start & Testing:**
- **Supabase** - Easy setup, great dashboard, free tier

**⚡ High Performance & Scale:**
- **Neon** - Serverless, auto-scaling, great for Netlify

**💰 Cost-Effective:**
- **Railway** - Simple pricing, good performance

**🔧 Full Control:**
- **DigitalOcean Managed PostgreSQL** or **AWS RDS**

## 🚨 Important Notes for Netlify

1. **Connection Limits**: Serverless functions have connection limits. Use connection pooling.
2. **Cold Starts**: First request might be slow. Consider using Prisma's connection pooling.
3. **Environment Variables**: Set them in Netlify dashboard, not just `.env` files.
4. **Build Time**: Include `prisma generate` in your build process.

## 🛠️ Troubleshooting

**Database Connection Issues:**
- Verify your DATABASE_URL format
- Check if your database allows external connections
- Ensure your IP is whitelisted (if required)

**Build Failures on Netlify:**
- Make sure `prisma generate` runs during build
- Check that all environment variables are set in Netlify
- Verify Node.js version compatibility

**Cold Start Performance:**
- Use connection pooling
- Consider keeping functions warm with scheduled pings
- Optimize your Prisma queries

Ready to set up your database? Choose your preferred provider and follow the steps above! 🚀