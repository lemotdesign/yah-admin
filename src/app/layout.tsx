import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ErrorBoundary } from '@/components/error-boundary'
import { RouteProvider } from '@/providers/route-provider'
import { ThemeProvider } from '@/providers/theme-provider'
import { AuthProvider } from '@/providers/auth-provider'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'YAH Admin - Administrative Panel',
  description: 'Administrative panel for YAH Digital',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="bg-primary antialiased">
        <ErrorBoundary>
          <AuthProvider>
            <RouteProvider>
              <ThemeProvider>
                {children}
              </ThemeProvider>
            </RouteProvider>
          </AuthProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}