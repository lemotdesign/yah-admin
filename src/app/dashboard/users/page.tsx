'use client'

import { Button, Avatar } from '@/components/ui';
import { Icons } from '@/components/ui/icons';

// Mock user data for demonstration
const mockUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'active' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'inactive' },
];

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Users</h1>
          <p className="text-gray-600">Manage user accounts and permissions</p>
        </div>
        <Button 
          color="primary" 
          variant="solid"
          iconLeading={Icons.plus}
          onPress={() => console.log('Add user')}
        >
          Add User
        </Button>
      </div>
      
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-medium">User List</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {mockUsers.map((user) => (
            <div key={user.id} className="px-6 py-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar size="md" fallback={user.name.split(' ').map(n => n[0]).join('')} />
                <div>
                  <h3 className="text-sm font-medium text-gray-900">{user.name}</h3>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-500">{user.role}</span>
                <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                  user.status === 'active' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {user.status}
                </span>
                <Button 
                  size="sm" 
                  variant="ghost" 
                  color="gray"
                  iconLeading={Icons.settings}
                  onPress={() => console.log('Edit user:', user.id)}
                >
                  Edit
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
