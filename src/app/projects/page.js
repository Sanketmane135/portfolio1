import React from 'react'
import numpy from '../../images/numpy.png';
import Image from 'next/image';
import Link from 'next/link';
import bagpack from '../../images/bagpack.png'

import seoimg from '../../images/seoimg.png'

export default function page() {
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
            <h1 className='__className_137a1a title text-3xl'>Projects</h1>
           <section className="flex flex-col gap-8">
                       <div className="flex justify-between">
                         <h2 className="__className_137a1a title sm:text-3xl"> Featured Projects</h2>
                         <a  href={"/projects"}  className="link flex items-center gap-2 font-light">
                           <span>VIEW MORE</span>
                           <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#999999"><path d="M630-444H192v-72h438L429-717l51-51 288 288-288 288-51-51 201-201Z"/></svg>
                         </a>
                       </div>
                       <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
           
                         <div className="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col  items-center  ">
           
                           <div className="flex flex-col space-y-1.5 p-6">
                             <a className="h-40 w-full object-cover object-top rounded-md">
                               <Image src={bagpack} width={300} height={300} alt="project "/>
                             </a>
                           </div>
           
                           <div className="p-6 pt-2 flex flex-col gap-2">
                             <div className="text-2xl font-semibold leading-none tracking-tight">
                               Bag-Pack Trip Booking Web
                             </div>
                             This is used to book and plan trips where you can book trip from build in packages and also provide custom trip booking facility
                           </div>
           
                           <div className="p-6 pt-0 flex h-full flex-col items-start justify-between gap-4">
                             <div className="mt-2 flex flex-wrap gap-1">
                               <div className=" cursor-default inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-stone-700  text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]">
                               Next.js
                               </div>
                               <div className=" cursor-default inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-stone-700 text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]">
                               css
                               </div>
                               <div className=" cursor-default  inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-stone-700 text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]">
                               MongoDB
                               </div>
                             </div>
                             <div className="flex flex-row flex-wrap items-start gap-1">
                               <a>
                                 <div className="items-center rounded-full text-gray-950 border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-slate-100 cursor-pointer text-primary-foreground hover:bg-primary/80 flex gap-2 px-2 py-1 text-[10px]">
                                 <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#999999"><path d="M480-96q-79 0-149-30t-122.5-82.5Q156-261 126-331T96-480q0-80 30-149.5t82.5-122Q261-804 331-834t149-30q80 0 149.5 30t122 82.5Q804-699 834-629.5T864-480q0 79-30 149t-82.5 122.5Q699-156 629.5-126T480-96Zm0-75q17-17 34-63.5T540-336H420q9 55 26 101.5t34 63.5Zm-91-10q-14-30-24.5-69T347-336H204q29 57 77 97.5T389-181Zm182 0q60-17 108-57.5t77-97.5H613q-7 47-17.5 86T571-181ZM177-408h161q-2-19-2.5-37.5T335-482q0-18 .5-35.5T338-552H177q-5 19-7 36.5t-2 35.5q0 18 2 35.5t7 36.5Zm234 0h138q2-20 2.5-37.5t.5-34.5q0-17-.5-35t-2.5-37H411q-2 19-2.5 37t-.5 35q0 17 .5 35t2.5 37Zm211 0h161q5-19 7-36.5t2-35.5q0-18-2-36t-7-36H622q2 19 2.5 37.5t.5 36.5q0 18-.5 35.5T622-408Zm-9-216h143q-29-57-77-97.5T571-779q14 30 24.5 69t17.5 86Zm-193 0h120q-9-55-26-101.5T480-789q-17 17-34 63.5T420-624Zm-216 0h143q7-47 17.5-86t24.5-69q-60 17-108 57.5T204-624Z"/></svg>
                                   Website
                                 </div>
                               </a>
           
                               <a>
                                 <div className="items-center rounded-full text-gray-950 border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-slate-100 cursor-pointer text-primary-foreground hover:bg-primary/80 flex gap-2 px-2 py-1 text-[10px]">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github size-3"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                                   Github
                                 </div>
                               </a>
                             </div>
                           </div>
                         </div>
                         <div className="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col items-center">
           
                           <div className="flex flex-col space-y-1.5 p-6">
                             <a className="h-40 w-full object-cover object-top rounded-md">
                               <Image src={seoimg} width={300} height={300} alt="project "/>
                             </a>
                           </div>
           
                           <div className="p-6 pt-4 flex flex-col gap-2">
                             <div className="text-2xl font-semibold leading-none tracking-tight">
                              AI driven SEO Assistant
                             </div>
                             This is an AI driven SEO assistant which helps you to write SEO friendly content and also provides you with the keywords and other suggestions to improve your content.
                           </div>
           
                           <div className="p-6 pt-0 flex h-full flex-col items-start justify-between gap-4">
                             <div className="mt-2 flex flex-wrap gap-1">
                               <div className=" cursor-default inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-stone-700  text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]">
                               Next.js
                               </div>
                               <div className=" cursor-default inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-stone-700 text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]">
                               Tailwind CSS
                               </div>
                               <div className=" cursor-default  inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-stone-700 text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]">
                               MongoDB
                               </div>
                                 <div className=" cursor-default  inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-stone-700 text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]">
                               Typescript
                               </div>
                             </div>
                             <div className="flex flex-row flex-wrap items-start gap-1">
                               <a>
                                 <div className="items-center rounded-full text-gray-950 border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-slate-100 cursor-pointer text-primary-foreground hover:bg-primary/80 flex gap-2 px-2 py-1 text-[10px]">
                                 <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#999999"><path d="M480-96q-79 0-149-30t-122.5-82.5Q156-261 126-331T96-480q0-80 30-149.5t82.5-122Q261-804 331-834t149-30q80 0 149.5 30t122 82.5Q804-699 834-629.5T864-480q0 79-30 149t-82.5 122.5Q699-156 629.5-126T480-96Zm0-75q17-17 34-63.5T540-336H420q9 55 26 101.5t34 63.5Zm-91-10q-14-30-24.5-69T347-336H204q29 57 77 97.5T389-181Zm182 0q60-17 108-57.5t77-97.5H613q-7 47-17.5 86T571-181ZM177-408h161q-2-19-2.5-37.5T335-482q0-18 .5-35.5T338-552H177q-5 19-7 36.5t-2 35.5q0 18 2 35.5t7 36.5Zm234 0h138q2-20 2.5-37.5t.5-34.5q0-17-.5-35t-2.5-37H411q-2 19-2.5 37t-.5 35q0 17 .5 35t2.5 37Zm211 0h161q5-19 7-36.5t2-35.5q0-18-2-36t-7-36H622q2 19 2.5 37.5t.5 36.5q0 18-.5 35.5T622-408Zm-9-216h143q-29-57-77-97.5T571-779q14 30 24.5 69t17.5 86Zm-193 0h120q-9-55-26-101.5T480-789q-17 17-34 63.5T420-624Zm-216 0h143q7-47 17.5-86t24.5-69q-60 17-108 57.5T204-624Z"/></svg>
                                   Website
                                 </div>
                               </a>
                             </div>
                           </div>
                         </div>
                         
                        
                       </section>
                     </section>
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
