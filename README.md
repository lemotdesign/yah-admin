# YAH Admin Dashboard

The administrative panel for YAH Digital, built with modern web technologies.

## Tech Stack

- **Frontend**: [Next.js 15](https://nextjs.org) with React 19 and TypeScript
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com)
- **Authentication**: [Auth0](https://auth0.com) with [@auth0/nextjs-auth0](https://github.com/auth0/nextjs-auth0)
- **Database**: [Prisma](https://www.prisma.io) with PostgreSQL
- **UI Components**: Untitled UI PRO kit integration ready

## Features

- 🔐 Secure authentication with Auth0
- 🎨 Modern, responsive UI with Tailwind CSS
- 📊 Dashboard with user profile and metrics
- 🗄️ Database integration with Prisma ORM
- 🚀 Fast development with Next.js App Router
- 📱 Mobile-friendly responsive design

## Prerequisites

Before you begin, ensure you have:

- Node.js 18+ installed
- PostgreSQL database (local or cloud-hosted)
- Auth0 account ([Sign up here](https://auth0.com))

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/lemotdesign/yah-admin.git
cd yah-admin
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

Update the `.env.local` file with your credentials:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/yah_admin?schema=public"

# Auth0 - Get these from your Auth0 dashboard
AUTH0_SECRET='use [openssl rand -hex 32] to generate a 32 bytes value'
AUTH0_BASE_URL='http://localhost:3000'
AUTH0_ISSUER_BASE_URL='https://YOUR_DOMAIN.auth0.com'
AUTH0_CLIENT_ID='YOUR_CLIENT_ID'
AUTH0_CLIENT_SECRET='YOUR_CLIENT_SECRET'
```

### 4. Set up Auth0

1. Create an Auth0 account at [auth0.com](https://auth0.com)
2. Create a new "Regular Web Application"
3. Configure Allowed Callback URLs: `http://localhost:3000/api/auth/callback`
4. Configure Allowed Logout URLs: `http://localhost:3000`
5. Copy your Domain, Client ID, and Client Secret to `.env.local`

Reference: [Auth0 Next.js Setup Guide](https://github.com/auth0-samples/auth0-nextjs-samples/tree/main/Sample-01)

### 5. Set up the database

Initialize Prisma and create the database:

```bash
npx prisma generate
npx prisma db push
```

Reference: [Prisma Quickstart](https://www.prisma.io/docs/getting-started/quickstart)

### 6. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## Project Structure

```
yah-admin/
├── prisma/
│   └── schema.prisma      # Database schema
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── auth/      # Auth0 API routes
│   │   ├── layout.tsx     # Root layout with Auth0 provider
│   │   └── page.tsx       # Dashboard home page
│   └── lib/
│       └── prisma.ts      # Prisma client instance
├── .env.example           # Environment variables template
├── .env.local             # Your local environment variables (not committed)
└── package.json
```

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Database Management

### Generate Prisma Client

```bash
npx prisma generate
```

### Push schema changes to database

```bash
npx prisma db push
```

### Open Prisma Studio (database GUI)

```bash
npx prisma studio
```

## Deployment

### Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Add your environment variables in Vercel project settings
4. Deploy!

Remember to update your Auth0 callback URLs for production.

### Deploy to Netlify

For Netlify deployment with Auth0:
- [Netlify + Auth0 Setup Guide](https://docs.netlify.com/extend/install-and-use/setup-guides/auth0/)

## References

- [Untitled UI + Next.js Integration](https://www.untitledui.com/react/integrations/nextjs)
- [Auth0 Next.js Samples](https://github.com/auth0-samples/auth0-nextjs-samples/tree/main/Sample-01)
- [Prisma Documentation](https://www.prisma.io/docs)
- [YAH Digital Branding](https://yah.digital/)

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Auth0 Documentation](https://auth0.com/docs)
- [Prisma Documentation](https://www.prisma.io/docs)

## License

Copyright © 2024 YAH Digital. All rights reserved.
