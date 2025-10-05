"use client"

import { Button } from "@/components/base/buttons/button"

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
        <p className="text-muted-foreground">
          View your analytics and performance metrics.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-6 border rounded-lg">
          <h3 className="font-semibold">Total Users</h3>
          <p className="text-2xl font-bold">1,234</p>
          <p className="text-sm text-muted-foreground">+12% from last month</p>
        </div>
        <div className="p-6 border rounded-lg">
          <h3 className="font-semibold">Active Sessions</h3>
          <p className="text-2xl font-bold">892</p>
          <p className="text-sm text-muted-foreground">+8% from last month</p>
        </div>
        <div className="p-6 border rounded-lg">
          <h3 className="font-semibold">Page Views</h3>
          <p className="text-2xl font-bold">45,678</p>
          <p className="text-sm text-muted-foreground">+15% from last month</p>
        </div>
        <div className="p-6 border rounded-lg">
          <h3 className="font-semibold">Bounce Rate</h3>
          <p className="text-2xl font-bold">32%</p>
          <p className="text-sm text-muted-foreground">-5% from last month</p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Performance Overview</h2>
        <div className="p-6 border rounded-lg">
          <p className="text-muted-foreground">
            Analytics dashboard will show detailed metrics, charts, and insights about your application performance.
          </p>
          <div className="mt-4">
            <Button onPress={() => console.log('Refresh analytics')}>
              Refresh Data
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
