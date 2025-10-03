import { auth0 } from '@/lib/auth0';
import { redirect } from 'next/navigation';

export default async function Home() {
  const session = await auth0.getSession();
  const user = session?.user;
  
  // Redirect authenticated users to dashboard
  if (user) {
    redirect('/dashboard');
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">Y</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">YAH Admin</h1>
          </div>
          <nav>
            <a
              href="/auth/login"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Login
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-12 text-center">
          <div className="max-w-md mx-auto">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-white font-bold text-4xl">Y</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              YAH Admin Dashboard
            </h2>
            <p className="text-gray-600 mb-8">
              A modern administrative panel built with Next.js, Auth0, and Prisma.
              Please log in to access the dashboard.
            </p>
            <a
              href="/auth/login"
              className="inline-block px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-gray-200 mt-12">
        <div className="text-center text-sm text-gray-500">
          <p>© 2024 YAH Digital. All rights reserved.</p>
          <p className="mt-2">
            Powered by Next.js, Auth0, and Prisma |{' '}
            <a
              href="https://yah.digital/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700"
            >
              yah.digital
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
