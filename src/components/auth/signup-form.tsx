'use client'

import * as React from 'react'
import { signIn } from 'next-auth/react'
import { Button, Input } from '@/components/ui'
import { Icons } from '@/components/ui/icons'

interface SignupFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SignupForm({ className, ...props }: SignupFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

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
    <div className={`space-y-6 ${className || ''}`} {...props}>      
      <div className="text-center space-y-4">
        <p className="text-sm text-gray-600">
          Create your account quickly and securely using your GitHub account.
        </p>
        <Button
          variant="outline"
          color="gray"
          fullWidth
          isDisabled={isLoading}
          onPress={handleGitHubSignup}
          iconLeading={isLoading ? Icons.spinner : Icons.gitHub}
          loading={isLoading}
        >
          Continue with GitHub
        </Button>
      </div>
      
      <div className="text-center">
        <p className="text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="font-medium text-brand-600 hover:text-brand-500">
            Sign in here
          </a>
        </p>
      </div>
    </div>
  )
}