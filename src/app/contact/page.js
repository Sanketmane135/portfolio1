import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className="mx-auto flex min-h-screen max-w-3xl flex-col px-8 font-sans antialiased bg-black __variable_d65c78 __variable_137a1a">
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
          <article className='w-full mt-16 flex justify-center items-center'>
            <div className='header'>
                <h1 className='text-3xl font-semibold text-center'>Get in touch!</h1>
                <p className='text-sm text-foreground mt-3 text-center'>Feel free to leave any enqury or question you may have. I'll get back to you as soon as possible!</p>
                <div className=' mt-10'>
                  <div className='rounded-lg border  text-card-foreground shadow-sm mb-10'>
                    <div className='flex flex-col space-y-1.5 p-6'>
                      <h1 className='text-2xl font-bold '>Leave a Message</h1>
                    </div>

                    <div className='p-6 pt-0'>
                        <form className='space-y-4' action="https://formspree.io/f/mjkonoqa" method="POST">
                          <div className='space-y-2'>
                            <label className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70' for="name">Name</label>
                            <input className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm' id='name' placeholder='Enter your name' name='name'></input>
                         </div>
                         <div className='space-y-2'>
                            <label className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70' for="name">Email</label>
                            <input className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm' type='gmail' id='email' placeholder='Enter your email' name='email'></input>
                         </div>

                         <div className='space-y-2'>
                            <label className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70' for="name">Email</label>
                            <textarea className='flex w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm min-h-[100px]' id='message' placeholder='Enter your message' name='message'></textarea>
                         </div>

                         <button className='inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-slate-50 text-slate-950 hover:bg-primary/90 h-10 px-4 py-2' type='submit'>Send message</button>
                        </form>
                    </div>
                  </div>
                </div>
            </div>
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
