import Link from 'next/link'
import React from 'react'

export const metadata={
  title:"About Us",
  description:"this is a blog about page"
}
export default function AboutLayout({children}) {
  return (
    <main>
        <nav className='my-6'>
          <ul className='flex gap-20'>
            <li><Link href="/about/mission">Mission</Link></li>
            <li><Link href="/about/vision">Vision</Link></li>
          </ul>
        </nav>
        {children}
    </main>
  )
}
