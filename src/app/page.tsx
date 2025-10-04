import { redirect } from 'next/navigation'

export default function HomePage() {
  // For now, redirect directly to login until Auth0 is properly configured
  redirect('/login')
}