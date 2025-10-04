import { DashboardShell } from '@/components/dashboard/dashboard-shell'

export default function AnalyticsPage() {
  return (
    <DashboardShell>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
          <p className="text-gray-600">Track performance and insights</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-sm font-medium text-gray-900">Page Views</h3>
            <p className="text-2xl font-bold text-primary-600 mt-2">125,429</p>
            <p className="text-sm text-green-600 mt-1">+12.5% from last month</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-sm font-medium text-gray-900">Unique Visitors</h3>
            <p className="text-2xl font-bold text-blue-600 mt-2">8,429</p>
            <p className="text-sm text-green-600 mt-1">+8.2% from last month</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-sm font-medium text-gray-900">Bounce Rate</h3>
            <p className="text-2xl font-bold text-orange-600 mt-2">34.2%</p>
            <p className="text-sm text-red-600 mt-1">+2.1% from last month</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-sm font-medium text-gray-900">Conversion Rate</h3>
            <p className="text-2xl font-bold text-green-600 mt-2">3.4%</p>
            <p className="text-sm text-green-600 mt-1">+0.8% from last month</p>
          </div>
        </div>

        {/* Charts Placeholder */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Traffic Overview</h3>
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Chart would be displayed here</p>
            </div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">User Engagement</h3>
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Chart would be displayed here</p>
            </div>
          </div>
        </div>

        {/* Top Pages */}
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Top Pages</h3>
          </div>
          <div className="divide-y divide-gray-200">
            {[
              { page: '/dashboard', views: 15420, change: '+12%' },
              { page: '/projects', views: 8930, change: '+8%' },
              { page: '/users', views: 6540, change: '+15%' },
              { page: '/analytics', views: 4320, change: '+22%' },
              { page: '/settings', views: 2180, change: '+5%' },
            ].map((item, index) => (
              <div key={index} className="px-6 py-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">{item.page}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <p className="text-sm text-gray-600">{item.views} views</p>
                  <p className="text-sm text-green-600">{item.change}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Real-time Activity */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Real-time Activity</h3>
          <div className="space-y-3">
            {[
              { action: 'New user registered', time: '2 minutes ago', type: 'user' },
              { action: 'Project "E-commerce Platform" updated', time: '5 minutes ago', type: 'project' },
              { action: 'User login: john@example.com', time: '8 minutes ago', type: 'auth' },
              { action: 'New project created: "Mobile App"', time: '12 minutes ago', type: 'project' },
              { action: 'Settings updated', time: '15 minutes ago', type: 'system' },
            ].map((activity, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className={`w-2 h-2 rounded-full ${
                  activity.type === 'user' ? 'bg-blue-500' :
                  activity.type === 'project' ? 'bg-green-500' :
                  activity.type === 'auth' ? 'bg-yellow-500' :
                  'bg-gray-500'
                }`}></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">{activity.action}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardShell>
  )
}