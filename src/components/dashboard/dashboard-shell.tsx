import Link from 'next/link'
import { cn } from '@/lib/utils'

const sidebarItems = [
  {
    title: 'Dashboard',
    href: '/dashboard',
  },
  {
    title: 'How-to Guides',
    href: '/dashboard/guides',
  },
  {
    title: 'Billing',
    href: '/dashboard/billing',
  },
  {
    title: 'Support Tickets',
    href: '/dashboard/tickets',
  },
  {
    title: 'Chat',
    href: '/dashboard/chat',
  },
  {
    title: 'Settings',
    href: '/dashboard/settings',
  },
]

interface DashboardShellProps extends React.HTMLAttributes<HTMLDivElement> {}

export function DashboardShell({ className, ...props }: DashboardShellProps) {
  return (
    <div className={cn('pb-12', className)} {...props}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Navigation
          </h2>
          <div className="space-y-1">
            {sidebarItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}