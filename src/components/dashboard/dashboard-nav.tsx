'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { signOut } from 'next-auth/react'
import { Button, Avatar } from '@/components/ui'
import { Icons } from '@/components/ui/icons'

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: Icons.home },
  { name: 'Users', href: '/dashboard/users', icon: Icons.user },
  { name: 'Projects', href: '/dashboard/projects', icon: Icons.projects },
  { name: 'Analytics', href: '/dashboard/analytics', icon: Icons.analytics },
  { name: 'Settings', href: '/dashboard/settings', icon: Icons.settings },
]

export function DashboardNav() {
  const pathname = usePathname()

  return (
    <div className="border-b bg-white">
      <div className="flex h-16 items-center px-6">
        <Link href="/dashboard" className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 text-brand-600"
          >
            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
          </svg>
          <span className="font-bold text-gray-900">YAH Admin</span>
        </Link>
        
        <nav className="ml-8 flex space-x-6">
          {navigation.map((item) => {
            const IconComponent = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-brand-600 px-3 py-2 rounded-md ${
                  pathname === item.href
                    ? 'text-brand-600 bg-brand-50'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <IconComponent className="h-4 w-4" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
        
        <div className="ml-auto flex items-center space-x-4">
          <Avatar size="sm" fallback="YA" />
          <Button 
            variant="ghost" 
            size="sm"
            iconLeading={Icons.logout}
            onPress={() => signOut({ callbackUrl: '/login' })}
          >
            Logout
          </Button>
        </div>
      </div>
    </div>
  )
}