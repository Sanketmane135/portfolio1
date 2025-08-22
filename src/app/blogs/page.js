import Link from 'next/link'
import React from 'react'

function page() {
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
        <h1 className='__className_137a1a title text-3xl'>Blogs!</h1>
        <div>
            <div>
              <a href={"/blogs/hello-world"}>
                <article className="py-2 transition-colors duration-300 hover:bg-gray-900 hover:cursor-pointer rounded-md">
                  <div className=" mx-auto px-4">
                    <header className="mb-2">
                      <h2 className="text-xl font-bold mb-2 transition-colors duration-300">Hello World! First blog post.</h2>
                      <p className="text-sm text-muted-foreground">Feb 25, 2025</p>
                    </header>

                    <div className="mt-2">
                      <p className="text-muted-foreground leading-relaxed">
                      This blog post has an complete overview of my blog section as how does it works and what are its features.
                      </p>
                    </div>
                  </div>
                </article>
              </a>

              <div className="shrink-0 h-[1px] w-full bg-gray-700 my-2"></div>
              <div></div>
            </div>
            


            <div>
              <a href={"/blogs/tourism"}>
                <article className="py-2 transition-colors duration-300 hover:bg-gray-900 hover:cursor-pointer rounded-md">
                  <div className=" mx-auto px-4">
                    <header className="mb-2">
                      <h2 className="text-xl font-bold mb-2 transition-colors duration-300"> How it is imp to Easy and Fast trip booking</h2>
                      <p className="text-sm text-muted-foreground">April 6, 2025</p>
                    </header>

                    <div className="mt-2">
                      <p className="text-muted-foreground leading-relaxed">
                      Here is brief overview of why it is important to have easy and customize trip booking platforms
                      </p>
                    </div>
                  </div>
                </article>
              </a>

              <div className="shrink-0 h-[1px] w-full bg-gray-700 my-2"></div>
              <div></div>
            </div>
          </div>
      </main>

          
    </div>
  )
}

export default page