import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Icons } from '@/components/ui/icons'

export function DashboardNav() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <Link href="/dashboard" className="flex items-center space-x-2">
          <Icons.gitHub className="h-6 w-6" />
          <span className="font-bold">YAH Admin</span>
        </Link>
        <div className="ml-auto flex items-center space-x-4">
          <Button variant="outline" size="sm">
            Settings
          </Button>
          <Button variant="outline" size="sm">
            <a href="/api/auth/logout">Logout</a>
          </Button>
        </div>
      </div>
    </div>
  )
}