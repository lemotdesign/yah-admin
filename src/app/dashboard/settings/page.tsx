'use client'

import { Button, Input, Avatar } from '@/components/ui';
import { Icons } from '@/components/ui/icons';

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600">Manage application settings</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Settings Navigation */}
        <div className="lg:col-span-1">
          <nav className="bg-white rounded-lg border border-gray-200 p-4">
            <h2 className="text-sm font-medium text-gray-900 mb-4">Settings Categories</h2>
            <ul className="space-y-2">
              {[
                { name: 'Profile', icon: Icons.user, active: true },
                { name: 'Account', icon: Icons.settings, active: false },
                { name: 'Security', icon: Icons.settings, active: false },
                { name: 'Notifications', icon: Icons.settings, active: false },
                { name: 'Billing', icon: Icons.settings, active: false },
                { name: 'Team', icon: Icons.user, active: false },
              ].map((item) => {
                const IconComponent = item.icon;
                return (
                  <li key={item.name}>
                    <a
                      href="#"
                      className={`flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        item.active 
                          ? 'bg-brand-50 text-brand-600' 
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      <IconComponent className="h-4 w-4" />
                      <span>{item.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg border border-gray-200">
            {/* Profile Section */}
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Profile Settings</h3>
              <p className="text-sm text-gray-600">Update your personal information and profile details.</p>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Profile Picture */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Profile Picture</label>
                <div className="flex items-center space-x-4">
                  <Avatar size="xl" fallback="YA" />
                  <div>
                    <Button size="sm" variant="outline" color="gray">
                      Change Avatar
                    </Button>
                    <p className="text-xs text-gray-500 mt-1">JPG, GIF or PNG. 1MB max.</p>
                  </div>
                </div>
              </div>

              {/* Basic Information */}
              <div className="grid gap-4 sm:grid-cols-2">
                <Input
                  label="First Name"
                  placeholder="Enter your first name"
                  defaultValue="John"
                />
                <Input
                  label="Last Name"
                  placeholder="Enter your last name"
                  defaultValue="Doe"
                />
              </div>

              <Input
                label="Email Address"
                type="email"
                placeholder="Enter your email"
                defaultValue="john.doe@example.com"
                helperText="This email will be used for account notifications"
              />

              <Input
                label="Job Title"
                placeholder="Enter your job title"
                defaultValue="Administrator"
              />

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                <textarea
                  rows={4}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 focus:outline-none"
                  placeholder="Tell us a little about yourself..."
                  defaultValue="Full-stack developer and administrator with experience in Next.js, React, and modern web technologies."
                />
              </div>

              {/* Company Information */}
              <div className="border-t border-gray-200 pt-6">
                <h4 className="text-md font-medium text-gray-900 mb-4">Company Information</h4>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input
                    label="Company Name"
                    placeholder="Enter company name"
                    defaultValue="YAH Digital"
                  />
                  <Input
                    label="Website"
                    placeholder="https://example.com"
                    defaultValue="https://yahdigital.com"
                  />
                </div>
              </div>

              {/* Preferences */}
              <div className="border-t border-gray-200 pt-6">
                <h4 className="text-md font-medium text-gray-900 mb-4">Preferences</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900">Email Notifications</p>
                      <p className="text-xs text-gray-500">Receive notifications via email</p>
                    </div>
                    <button
                      type="button"
                      className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-brand-600 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
                      role="switch"
                      aria-checked="true"
                    >
                      <span className="translate-x-5 inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900">Marketing Communications</p>
                      <p className="text-xs text-gray-500">Receive marketing and promotional emails</p>
                    </div>
                    <button
                      type="button"
                      className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
                      role="switch"
                      aria-checked="false"
                    >
                      <span className="translate-x-0 inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900">Dark Mode</p>
                      <p className="text-xs text-gray-500">Use dark theme for the interface</p>
                    </div>
                    <button
                      type="button"
                      className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
                      role="switch"
                      aria-checked="false"
                    >
                      <span className="translate-x-0 inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="border-t border-gray-200 pt-6 flex items-center justify-between">
                <Button variant="outline" color="gray">
                  Cancel
                </Button>
                <div className="flex items-center space-x-3">
                  <Button variant="outline" color="error">
                    Delete Account
                  </Button>
                  <Button color="primary" variant="solid">
                    Save Changes
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Notice */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-blue-800">
          <strong>Demo Settings:</strong> This settings interface is for demonstration purposes. 
          Changes made here won't be persisted. Real settings would integrate with a backend API and database.
        </p>
      </div>
    </div>
  )
}
