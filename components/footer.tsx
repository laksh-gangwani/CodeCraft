import React from 'react'

export default function Footer() {
  return (
    <footer className='mb-10 px-4 text-center text-gray-500'>
        <small className='mb-2 block test-xs'>
            &copy; 2030 Laksh. All rights reserved. 
        </small>
        <p className='text-xs'>
            <span className='font-semibold'>About this website:</span> built with React & Next.js (App Router & server Actions), TypeScript, Tailwind CSS, Framer Motion, React Email & Resend.
        </p>
    </footer>
  )
}
