export default function TestPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-green-600 mb-4">✅ Deployment Successful!</h1>
        <p className="text-lg text-gray-600 mb-8">YAH Admin is running on Netlify</p>
        <div className="space-y-2 text-sm text-gray-500">
          <p>Build Date: {new Date().toISOString()}</p>
          <p>Environment: {process.env.NODE_ENV || 'development'}</p>
        </div>
        <div className="mt-8">
          <a 
            href="/"
            className="inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  )
}