'use client'

import { Button, Avatar } from '@/components/ui';
import { Icons } from '@/components/ui/icons';

// Mock project data
type ProjectStatus = 'active' | 'planning' | 'on-hold' | 'completed';
type ProjectPriority = 'high' | 'medium' | 'low';

interface Project {
  id: number;
  name: string;
  description: string;
  status: ProjectStatus;
  priority: ProjectPriority;
  progress: number;
  dueDate: string;
  assignees: Array<{ name: string; avatar: string | null }>;
  tech: string[];
}

const projects: Project[] = [
  {
    id: 1,
    name: 'YAH Admin Dashboard',
    description: 'Next.js admin panel with authentication and user management',
    status: 'active',
    priority: 'high',
    progress: 75,
    dueDate: '2024-02-15',
    assignees: [
      { name: 'John Doe', avatar: null },
      { name: 'Jane Smith', avatar: null }
    ],
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS']
  },
  {
    id: 2,
    name: 'Customer Portal',
    description: 'Client-facing portal for project management and billing',
    status: 'planning',
    priority: 'medium',
    progress: 25,
    dueDate: '2024-03-01',
    assignees: [
      { name: 'Bob Johnson', avatar: null }
    ],
    tech: ['React', 'Node.js', 'PostgreSQL']
  },
  {
    id: 3,
    name: 'Mobile App',
    description: 'Cross-platform mobile application for field operations',
    status: 'on-hold',
    priority: 'low',
    progress: 10,
    dueDate: '2024-04-30',
    assignees: [
      { name: 'Alice Brown', avatar: null },
      { name: 'Charlie Wilson', avatar: null },
      { name: 'Diana Prince', avatar: null }
    ],
    tech: ['React Native', 'Firebase', 'Redux']
  }
];

const statusColors: Record<ProjectStatus, string> = {
  active: 'bg-success-100 text-success-800',
  planning: 'bg-brand-100 text-brand-800',
  'on-hold': 'bg-gray-100 text-gray-800',
  completed: 'bg-success-100 text-success-800'
};

const priorityColors: Record<ProjectPriority, string> = {
  high: 'bg-error-100 text-error-800',
  medium: 'bg-yellow-100 text-yellow-800',
  low: 'bg-gray-100 text-gray-800'
};

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
          <p className="text-gray-600">Manage projects and tasks</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button 
            size="sm" 
            variant="outline" 
            color="gray"
            iconLeading={Icons.chevronDown}
          >
            Filter
          </Button>
          <Button 
            size="sm" 
            color="primary" 
            variant="solid"
            iconLeading={Icons.plus}
          >
            New Project
          </Button>
        </div>
      </div>

      {/* Project Stats */}
      <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-600">Total Projects</p>
            <Icons.projects className="h-4 w-4 text-gray-400" />
          </div>
          <p className="text-3xl font-bold text-gray-900 mt-2">{projects.length}</p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-600">Active</p>
            <Icons.projects className="h-4 w-4 text-success-500" />
          </div>
          <p className="text-3xl font-bold text-gray-900 mt-2">
            {projects.filter(p => p.status === 'active').length}
          </p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-600">In Planning</p>
            <Icons.projects className="h-4 w-4 text-brand-500" />
          </div>
          <p className="text-3xl font-bold text-gray-900 mt-2">
            {projects.filter(p => p.status === 'planning').length}
          </p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-600">On Hold</p>
            <Icons.projects className="h-4 w-4 text-gray-400" />
          </div>
          <p className="text-3xl font-bold text-gray-900 mt-2">
            {projects.filter(p => p.status === 'on-hold').length}
          </p>
        </div>
      </div>

      {/* Projects List */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">All Projects</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {projects.map((project) => (
            <div key={project.id} className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-medium text-gray-900">{project.name}</h3>
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${statusColors[project.status]}`}>
                      {project.status}
                    </span>
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${priorityColors[project.priority]}`}>
                      {project.priority} priority
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-gray-600">Progress</span>
                      <span className="text-sm font-medium text-gray-900">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-brand-600 h-2 rounded-full" 
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="inline-flex px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Team & Due Date */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-600">Team:</span>
                      <div className="flex -space-x-1">
                        {project.assignees.map((assignee, index) => (
                          <Avatar 
                            key={index}
                            size="sm" 
                            fallback={assignee.name.split(' ').map(n => n[0]).join('')}
                            className="border-2 border-white"
                          />
                        ))}
                      </div>
                    </div>
                    <div className="text-sm text-gray-600">
                      Due: {new Date(project.dueDate).toLocaleDateString()}
                    </div>
                  </div>
                </div>
                
                <div className="ml-6 flex items-center space-x-2">
                  <Button size="sm" variant="ghost" color="gray" iconLeading={Icons.settings}>
                    Settings
                  </Button>
                  <Button size="sm" variant="outline" color="primary">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Demo Notice */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-blue-800">
          <strong>Demo Projects:</strong> This project data is simulated for demonstration purposes. 
          Real project management would integrate with tools like Jira, Asana, or custom project tracking systems.
        </p>
      </div>
    </div>
  )
}
