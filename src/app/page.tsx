import { redirect } from 'next/navigation'

export default function HomePage() {
  // For now, redirect directly to login until GitHub OAuth is properly configured
  redirect('/login')
}