'use client'

import { Button } from '@/components/ui';
import { Icons } from '@/components/ui/icons';

// Mock analytics data
const analyticsData = {
  pageViews: { current: 12840, previous: 9567, change: 34.2 },
  uniqueVisitors: { current: 4329, previous: 3842, change: 12.7 },
  bounceRate: { current: 42.3, previous: 48.1, change: -12.1 },
  avgSessionDuration: { current: 185, previous: 162, change: 14.2 }
};

const topPages = [
  { path: '/dashboard', views: 2456, change: 18.3 },
  { path: '/projects', views: 1892, change: -5.2 },
  { path: '/users', views: 1634, change: 23.1 },
  { path: '/analytics', views: 987, change: 12.8 },
  { path: '/settings', views: 723, change: -8.4 }
];

export default function AnalyticsPage() {
  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
          <p className="text-gray-600">Track performance and insights</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button 
            size="sm" 
            variant="outline" 
            color="gray"
            iconLeading={Icons.chevronDown}
          >
            Last 30 days
          </Button>
          <Button 
            size="sm" 
            color="primary" 
            variant="solid"
            iconLeading={Icons.plus}
          >
            Export Report
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-600">Page Views</p>
            <Icons.analytics className="h-4 w-4 text-gray-400" />
          </div>
          <div className="mt-2">
            <p className="text-3xl font-bold text-gray-900">{analyticsData.pageViews.current.toLocaleString()}</p>
            <p className={`text-sm ${analyticsData.pageViews.change > 0 ? 'text-success-600' : 'text-error-600'}`}>
              {analyticsData.pageViews.change > 0 ? '+' : ''}{analyticsData.pageViews.change}% from last month
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-600">Unique Visitors</p>
            <Icons.user className="h-4 w-4 text-gray-400" />
          </div>
          <div className="mt-2">
            <p className="text-3xl font-bold text-gray-900">{analyticsData.uniqueVisitors.current.toLocaleString()}</p>
            <p className={`text-sm ${analyticsData.uniqueVisitors.change > 0 ? 'text-success-600' : 'text-error-600'}`}>
              {analyticsData.uniqueVisitors.change > 0 ? '+' : ''}{analyticsData.uniqueVisitors.change}% from last month
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-600">Bounce Rate</p>
            <Icons.analytics className="h-4 w-4 text-gray-400" />
          </div>
          <div className="mt-2">
            <p className="text-3xl font-bold text-gray-900">{analyticsData.bounceRate.current}%</p>
            <p className={`text-sm ${analyticsData.bounceRate.change < 0 ? 'text-success-600' : 'text-error-600'}`}>
              {analyticsData.bounceRate.change > 0 ? '+' : ''}{analyticsData.bounceRate.change}% from last month
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-600">Avg. Session Duration</p>
            <Icons.analytics className="h-4 w-4 text-gray-400" />
          </div>
          <div className="mt-2">
            <p className="text-3xl font-bold text-gray-900">{formatDuration(analyticsData.avgSessionDuration.current)}</p>
            <p className={`text-sm ${analyticsData.avgSessionDuration.change > 0 ? 'text-success-600' : 'text-error-600'}`}>
              {analyticsData.avgSessionDuration.change > 0 ? '+' : ''}{analyticsData.avgSessionDuration.change}% from last month
            </p>
          </div>
        </div>
      </div>

      {/* Top Pages */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Top Pages</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {topPages.map((page, index) => (
            <div key={page.path} className="px-6 py-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="text-sm font-medium text-gray-500">#{index + 1}</span>
                <span className="text-sm font-medium text-gray-900">{page.path}</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">{page.views.toLocaleString()} views</span>
                <span className={`text-sm ${page.change > 0 ? 'text-success-600' : 'text-error-600'}`}>
                  {page.change > 0 ? '+' : ''}{page.change}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Demo Notice */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-blue-800">
          <strong>Demo Analytics:</strong> This analytics data is simulated for demonstration purposes. 
          Real analytics would be integrated with services like Google Analytics, Mixpanel, or custom tracking.
        </p>
      </div>
    </div>
  )
}
