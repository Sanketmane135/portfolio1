"use client"
import Link from 'next/link'
import React, { useState } from 'react'

function page() {

    const [value, setValue]= useState(0)
  return (
    <div className='mx-auto flex min-h-screen max-w-3xl flex-col px-8 font-sans antialiased bg-black __variable_d65c78 __variable_137a1a'>
          <header className="sticky top-0 z-50 bg-black py-6 backdrop-blur-sm">
                <nav className="flex items-center justify-between">
                  <ul className="flex gap-4 sm:gap-8">
                    <Link href={"/"}><li className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer  ">Home</li></Link>
                    <Link href={"/projects"}><li className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer">Projects</li></Link>
                    <Link href={"/blogs"}><li className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer">Blog</li></Link>
                    <Link href={"/contact"}><li className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer">Contact</li></Link>
                  </ul>
                  
                </nav>
          </header>

        <main className='grow'>
            <article className='mt-8 flex flex-col gap-8 pb-16'>
                <a href={"/blogs"}  className="link flex items-center gap-2 font-light">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#999999"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg>
                <span>Back to Blogs</span>
                </a>
                <header>
                    <h1 className='font-serif text-3xl'>Why Quick, Easy & Customized Trip Booking Matters</h1>
                    <p className='mt-2 text-xs text-muted-foreground'>
                    April 10, 2025 
                    </p>
                </header>
                
                <main className='prose dark:prose-invert '>
                  <p className='pb-3'>
                  Planning a trip shouldn’t feel like a full-time job. Fast, simple, and even customized booking is changing the way we travel and here’s why it matters:
                  </p>
                  <hr></hr>
                  <section className='pt-3 '>
                    <div className='p-4'>
                      <li className='list-disc text-xl'> Saves You Time and Headaches :</li>
                      <p className='pl-6'>A smooth booking process means less time stressing, more time dreaming about your trip.</p>
                    </div>
                    
                    <div className='p-4'>
                      <li className='list-disc text-xl'>Lets You Customize Your Plan :</li>
                      <p className='pl-6'>Everyone travels differently. Quick, flexible booking lets you choose flights, hotels, and activities that fit your vibe , not some pre-set package.</p>
                    </div>

                    <div className='p-4'>
                      <li className='list-disc text-xl'>  Builds Confidence :</li>
                      <p className='pl-6'>Clear options = better decisions. Know exactly what you're getting before you click “book.”.</p>
                    </div>

                    <div className='p-4'>
                      <li className='list-disc text-xl'>   Gives You More Time for Fun Stuff:</li>
                      <p className='pl-6'>A smooth booking process means less time stressing, more time dreaming about your trip.</p>
                    </div>



                  </section>
                 
                </main>
                
                
            </article>

        </main>
        <footer className="flex flex-col items-center justify-center pb-32 sm:flex-row-reverse sm:justify-between">
             

             <section className="mt-8 sm:mt-0">
               <p className="text-center text-xs text-muted-foreground">
                 <span>© 2025  </span>
                 <a href="/">Sanketmane</a>
               </p>
             </section>
     </footer>



    </div>
  )
}

export default page