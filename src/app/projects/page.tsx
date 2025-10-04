import { DashboardShell } from '@/components/dashboard/dashboard-shell'
import { Button } from '@/components/ui/button'

const mockProjects = [
  {
    id: 1,
    name: 'E-commerce Platform',
    client: 'TechCorp Inc.',
    status: 'In Progress',
    progress: 75,
    dueDate: '2025-01-15',
    team: ['John Doe', 'Jane Smith'],
    budget: '$50,000'
  },
  {
    id: 2,
    name: 'Mobile App Redesign',
    client: 'StartupXYZ',
    status: 'Planning',
    progress: 20,
    dueDate: '2025-02-28',
    team: ['Mike Johnson', 'Sarah Wilson'],
    budget: '$25,000'
  },
  {
    id: 3,
    name: 'Corporate Website',
    client: 'BigCorp Ltd.',
    status: 'Completed',
    progress: 100,
    dueDate: '2024-12-01',
    team: ['John Doe', 'Sarah Wilson', 'Mike Johnson'],
    budget: '$75,000'
  },
  {
    id: 4,
    name: 'SaaS Dashboard',
    client: 'CloudTech',
    status: 'In Progress',
    progress: 45,
    dueDate: '2025-03-15',
    team: ['Jane Smith', 'John Doe'],
    budget: '$100,000'
  }
]

export default function ProjectsPage() {
  return (
    <DashboardShell>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
            <p className="text-gray-600">Manage and track all your projects</p>
          </div>
          <Button className="bg-primary-600 hover:bg-primary-700 text-white">
            New Project
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-sm font-medium text-gray-900">Total Projects</h3>
            <p className="text-2xl font-bold text-primary-600 mt-2">24</p>
            <p className="text-sm text-gray-500 mt-1">+3 this month</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-sm font-medium text-gray-900">In Progress</h3>
            <p className="text-2xl font-bold text-blue-600 mt-2">8</p>
            <p className="text-sm text-gray-500 mt-1">33% of total</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-sm font-medium text-gray-900">Completed</h3>
            <p className="text-2xl font-bold text-green-600 mt-2">14</p>
            <p className="text-sm text-gray-500 mt-1">58% of total</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-sm font-medium text-gray-900">Total Value</h3>
            <p className="text-2xl font-bold text-purple-600 mt-2">$1.2M</p>
            <p className="text-sm text-gray-500 mt-1">This year</p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
                  <p className="text-sm text-gray-600">{project.client}</p>
                </div>
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                  project.status === 'Completed'
                    ? 'bg-green-100 text-green-800'
                    : project.status === 'In Progress'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {project.status}
                </span>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Progress</span>
                  <span>{project.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      project.progress === 100 ? 'bg-green-500' : 'bg-blue-500'
                    }`}
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Due Date:</span>
                  <span>{new Date(project.dueDate).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Budget:</span>
                  <span className="font-medium">{project.budget}</span>
                </div>
                <div>
                  <span>Team:</span>
                  <div className="mt-1 flex flex-wrap gap-1">
                    {project.team.map((member, index) => (
                      <span key={index} className="inline-flex px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">
                        {member}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <Button variant="outline" size="sm" className="w-full">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardShell>
  )
}