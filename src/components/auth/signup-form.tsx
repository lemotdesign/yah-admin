'use client'

import * as React from 'react'
import { signIn } from 'next-auth/react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Icons } from '@/components/ui/icons'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface SignupFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SignupForm({ className, ...props }: SignupFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    company: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match')
      setIsLoading(false)
      return
    }

    // Simulate account creation
    setTimeout(() => {
      setIsLoading(false)
      alert('Account created successfully! Redirecting to dashboard...')
      window.location.href = '/dashboard'
    }, 2000)
  }

  async function handleGitHubSignup() {
    setIsLoading(true)
    try {
      await signIn('github', { callbackUrl: '/dashboard' })
    } catch (error) {
      console.error('GitHub signup failed:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={cn('space-y-6', className)} {...props}>
      <Tabs defaultValue="email" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="email">Email Signup</TabsTrigger>
          <TabsTrigger value="github">GitHub</TabsTrigger>
        </TabsList>
        
        <TabsContent value="email" className="space-y-4">
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                  First Name
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="John"
                  type="text"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  autoCapitalize="words"
                  autoComplete="given-name"
                  disabled={isLoading}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  name="lastName"
                  placeholder="Doe"
                  type="text"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  autoCapitalize="words"
                  autoComplete="family-name"
                  disabled={isLoading}
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                placeholder="name@example.com"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                disabled={isLoading}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="company" className="text-sm font-medium text-gray-700">
                Company (Optional)
              </Label>
              <Input
                id="company"
                name="company"
                placeholder="Your Company"
                type="text"
                value={formData.company}
                onChange={handleInputChange}
                autoComplete="organization"
                disabled={isLoading}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                Password
              </Label>
              <Input
                id="password"
                name="password"
                placeholder="Create a password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                autoComplete="new-password"
                disabled={isLoading}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                Confirm Password
              </Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm your password"
                type="password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                autoComplete="new-password"
                disabled={isLoading}
                required
              />
            </div>
            
            <Button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-primary-600 hover:bg-primary-700 text-white"
            >
              {isLoading && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              Create Account
            </Button>
          </form>
        </TabsContent>
        
        <TabsContent value="github" className="space-y-4">
          <div className="text-center space-y-4">
            <p className="text-sm text-gray-600">
              Sign up with your GitHub account for quick access
            </p>
            <Button
              variant="outline"
              type="button"
              disabled={isLoading}
              onClick={handleGitHubSignup}
              className="w-full border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              {isLoading ? (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Icons.gitHub className="mr-2 h-4 w-4" />
              )}
              Continue with GitHub
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}