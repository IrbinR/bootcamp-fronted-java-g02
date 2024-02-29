import React from 'react'
import Link from 'next/link'
export default function HeaderLogin() {
  return (
    <header className="bg-amber-200 py-4 px-6">
        <div className="container mx-auto flex justify-between">
            <h1 className="font-bold">
                <Link href="/" className="hover:text-orange-800">Budget App</Link>
            </h1>
            
        </div>
    </header>
  )
}
