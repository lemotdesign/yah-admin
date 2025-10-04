'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { signOut } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import { Icons } from '@/components/ui/icons'

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: 'home' },
  { name: 'Users', href: '/users', icon: 'users' },
  { name: 'Projects', href: '/projects', icon: 'folder' },
  { name: 'Analytics', href: '/analytics', icon: 'chart' },
  { name: 'Settings', href: '/settings', icon: 'settings' },
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
            className="h-6 w-6 text-primary-600"
          >
            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
          </svg>
          <span className="font-bold text-gray-900">YAH Admin</span>
        </Link>
        
        <nav className="ml-8 flex space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary-600 ${
                pathname === item.href
                  ? 'text-primary-600 border-b-2 border-primary-600'
                  : 'text-gray-600'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        
        <div className="ml-auto flex items-center space-x-4">
          <Button variant="outline" size="sm">
            Help
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => signOut({ callbackUrl: '/login' })}
          >
            Logout
          </Button>
        </div>
      </div>
    </div>
  )
}