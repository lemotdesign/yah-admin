# Untitled UI PRO Integration Guide

This guide explains how to integrate Untitled UI PRO components into the YAH Admin Dashboard.

## About Untitled UI PRO

Untitled UI PRO is a premium UI kit with professionally designed React components. It requires a license to use.

## Prerequisites

- Valid Untitled UI PRO license
- Access to Untitled UI PRO package

## Installation

### Option 1: NPM Package (if available)

If you have access to the private NPM package:

```bash
# Add registry token to .npmrc
echo "//registry.npmjs.org/:_authToken=YOUR_TOKEN" >> .npmrc

# Install the package
npm install @untitledui/react
```

### Option 2: Manual Installation

If you have the source files:

1. Create a `components/ui` directory:
   ```bash
   mkdir -p src/components/ui
   ```

2. Copy Untitled UI components into the directory

3. Import and use in your pages

## Integration with Next.js

According to the [Untitled UI + Next.js Integration Guide](https://www.untitledui.com/react/integrations/nextjs):

### 1. Configure Tailwind

Update `tailwind.config.ts` to include Untitled UI paths:

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    // Add Untitled UI paths
    './node_modules/@untitledui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // Untitled UI theme extensions
    },
  },
  plugins: [],
}
export default config
```

### 2. Use Components

```tsx
import { Button, Card, Input } from '@untitledui/react'

export default function MyPage() {
  return (
    <Card>
      <Input placeholder="Enter text" />
      <Button>Submit</Button>
    </Card>
  )
}
```

## Recommended Components for Admin Dashboard

### Navigation
- Sidebar
- TopBar
- Breadcrumbs

### Forms
- Input
- Select
- Checkbox
- Radio
- Switch
- DatePicker

### Data Display
- Table
- Card
- Badge
- Avatar
- Stats

### Feedback
- Alert
- Toast
- Modal
- Loading

### Layout
- Container
- Grid
- Stack

## Example: Dashboard Layout

```tsx
import { 
  Sidebar, 
  TopBar, 
  Card, 
  Stats,
  Table 
} from '@untitledui/react'

export default function Dashboard() {
  return (
    <div className="flex h-screen">
      <Sidebar>
        {/* Navigation items */}
      </Sidebar>
      
      <div className="flex-1 flex flex-col">
        <TopBar>
          {/* User menu, notifications */}
        </TopBar>
        
        <main className="flex-1 p-6">
          <div className="grid grid-cols-3 gap-6 mb-6">
            <Stats title="Users" value="1,234" />
            <Stats title="Projects" value="56" />
            <Stats title="Revenue" value="$12,345" />
          </div>
          
          <Card>
            <Table>
              {/* Data table */}
            </Table>
          </Card>
        </main>
      </div>
    </div>
  )
}
```

## Customization

### Colors

Update the theme in `tailwind.config.ts` to match YAH Digital branding:

```typescript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#f0f9ff',
        // ... Add your brand colors
        600: '#YOUR_PRIMARY_COLOR',
        // ...
      },
    },
  },
}
```

### Fonts

If YAH Digital has specific brand fonts, configure them in `src/app/layout.tsx`.

## Resources

- [Untitled UI React Documentation](https://www.untitledui.com/react)
- [Untitled UI + Next.js Integration](https://www.untitledui.com/react/integrations/nextjs)
- [YAH Digital Branding](https://yah.digital/)

## Note

This project structure is ready for Untitled UI PRO integration. Once you have your license and components, follow this guide to integrate them seamlessly.
