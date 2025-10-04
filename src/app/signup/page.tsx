import { SignupForm } from '@/components/auth/signup-form'

export default function SignupPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left side - Branding (hidden on mobile) */}
      <div className="hidden lg:flex lg:w-1/2 bg-primary-600 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-800" />
        <div className="relative z-10 flex flex-col justify-between p-12 text-white">
          <div className="flex items-center text-xl font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-3 h-8 w-8"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            YAH Digital Admin
          </div>
          <div className="space-y-4">
            <blockquote className="text-lg">
              &ldquo;Join our platform and start managing your digital experiences with ease.&rdquo;
            </blockquote>
            <footer className="text-sm opacity-80">— Welcome to YAH Digital</footer>
          </div>
        </div>
      </div>

      {/* Right side - Signup Form */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          {/* Mobile branding */}
          <div className="lg:hidden text-center">
            <div className="flex items-center justify-center text-2xl font-bold text-primary-600 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-3 h-8 w-8"
              >
                <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
              </svg>
              YAH Digital Admin
            </div>
          </div>

          {/* Signup Form Section */}
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">Create your account</h2>
              <p className="mt-2 text-sm text-gray-600">
                Join YAH Digital to get started
              </p>
            </div>
            
            <SignupForm />
            
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <a href="/login" className="font-medium text-primary-600 hover:text-primary-500">
                  Sign in here
                </a>
              </p>
            </div>
            
            <p className="text-center text-xs text-gray-500">
              By creating an account, you agree to our{" "}
              <a href="/terms" className="underline hover:text-primary-600">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="/privacy" className="underline hover:text-primary-600">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}