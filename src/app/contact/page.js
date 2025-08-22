import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className="mx-auto flex min-h-screen max-w-3xl flex-col px-8 font-sans antialiased bg-black __variable_d65c78 __variable_137a1a">
      <header className="sticky top-0 z-50 bg-black py-6 backdrop-blur-sm">
        <nav className="flex items-center justify-between">
          <ul className="flex gap-4 sm:gap-8">
            <Link href={"/"}><li className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer">Home</li></Link>
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
            <div className='mt-10'>
              <div className='rounded-lg border text-card-foreground shadow-sm mb-10'>
                <div className='flex flex-col space-y-1.5 p-6'>
                  <h1 className='text-2xl font-bold'>Leave a Message</h1>
                </div>

                <div className='p-6 pt-0'>
                  <form className='space-y-4' action="https://formspree.io/f/mjkonoqa" method="POST">
                    
                    {/* Name */}
                    <div className='space-y-2'>
                      <label htmlFor="name" className='text-sm font-medium leading-none'>Name</label>
                      <input 
                        id='name' 
                        name='name' 
                        placeholder='Enter your name' 
                        required 
                        minLength={3} 
                        className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:text-sm'
                      />
                      <p className="text-xs text-red-500 hidden peer-invalid:block">⚠️ Please enter at least 3 characters</p>
                    </div>

                    {/* Email */}
                    <div className='space-y-2'>
                      <label htmlFor="email" className='text-sm font-medium leading-none'>Email</label>
                      <input 
                        type='email' 
                        id='email' 
                        name='email' 
                        placeholder='Enter your email' 
                        required 
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" 
                        title="Please use only lowercase letters in email" 
                        className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:text-sm'
                      />
                      <p className="text-xs text-red-500 hidden peer-invalid:block">⚠️ Please enter a valid lowercase email</p>
                    </div>

                    {/* Message */}
                    <div className='space-y-2'>
                      <label htmlFor="message" className='text-sm font-medium leading-none'>Message</label>
                      <textarea 
                        id='message' 
                        name='message' 
                        placeholder='Enter your message' 
                        required 
                        minLength={10} 
                        className='flex w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:text-sm'
                      />
                      <p className="text-xs text-red-500 hidden peer-invalid:block">⚠️ Message should be at least 10 characters</p>
                    </div>

                    {/* Button */}
                    <button 
                      type='submit' 
                      className='inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium bg-slate-50 text-slate-950 hover:bg-primary/90 h-10 px-4 py-2'
                    >
                      Send message
                    </button>
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
            <span>© 2025 </span>
            <a href="/">Sanketmane</a>
          </p>
        </section>
      </footer>
    </div>
  )
}
