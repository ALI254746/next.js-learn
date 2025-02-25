import React from 'react'
import Head from 'next/head'
import Navbar from '@/components/navbar/navbar'
import Link from 'next/link'
export default function About() {
  return (
    <div>
          <Head>
            <title>About page</title>
            </Head>
      <h1 className='bg-slate-200 text-pretty font-mono'>about</h1>
      <Navbar/>
    <Link href={"/"}>
    <button className='mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600'>navbar</button>
    </Link>
    </div>
  )
}
