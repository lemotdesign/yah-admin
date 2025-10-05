"use client"

import { Button } from "@/components/base/buttons/button"

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      name: "YAH Marketing Website",
      status: "Active",
      progress: 85,
      team: ["John", "Sarah", "Mike"],
      dueDate: "2025-01-15"
    },
    {
      id: 2,
      name: "Client Portal",
      status: "In Progress",
      progress: 60,
      team: ["Alice", "Bob"],
      dueDate: "2025-02-01"
    },
    {
      id: 3,
      name: "Analytics Dashboard",
      status: "Planning",
      progress: 25,
      team: ["Eve", "Charlie"],
      dueDate: "2025-03-01"
    }
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
          <p className="text-muted-foreground">
            Manage your projects and track progress.
          </p>
        </div>
        <Button onPress={() => console.log('New project')}>
          New Project
        </Button>
      </div>

      <div className="grid gap-4">
        {projects.map((project) => (
          <div key={project.id} className="p-6 border rounded-lg">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-semibold text-lg">{project.name}</h3>
                <p className="text-sm text-muted-foreground">Due: {project.dueDate}</p>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                project.status === 'Active' ? 'bg-green-100 text-green-800' :
                project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {project.status}
              </span>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span>Progress</span>
                <span>{project.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full" 
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-muted-foreground">Team: {project.team.join(', ')}</p>
              </div>
              <div className="space-x-2">
                <Button variant="outline" size="sm" onPress={() => console.log('Edit project', project.id)}>
                  Edit
                </Button>
                <Button variant="outline" size="sm" onPress={() => console.log('View project', project.id)}>
                  View
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
