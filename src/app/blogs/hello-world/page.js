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
                <a href={"/blogs"} className="link flex items-center gap-2 font-light">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#999999"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg>
                <span>Back to Blogs</span>
                </a>
                <header>
                    <h1 className='font-serif text-3xl'>Hello World! First blog post.</h1>
                    <p className='mt-2 text-xs text-muted-foreground'>
                    November 23, 2024   
                    </p>
                </header>
                
                
                <main  className='prose dark:prose-invert '>
                    <h2 className='text-2xl'>Wel-come to my blog</h2>
                    <p>Hope you are doing well! 😉</p>
                    <p className='pt-2'>
                    Let's talk about my blog section. Here in this blog page I can add the normal 
                    <code  className="relative text-blue-700 before:content-['`'] after:content-['`']">
                        <span className="sh__line">
                            <span className="sh__token--class text-blue-700">MarkDown</span>
                        </span>
                        
                    </code>
                    text and also I can add the custome 
                    <code>
                        <span   className="relative text-blue-700 before:content-['`'] after:content-['`']" >HTML</span>
                    </code>
                    code 
                    <code  className="relative text-blue-700 before:content-['`'] after:content-['`']">
                        <span className='text-blue-700'>JSX</span>
                    </code>
                    components which will be rendered in the browser.
                    </p>

                    <p className='pt-2 pb-2'>Let's explore each of them </p>
                    <hr></hr>

                    <h3 className='text-2xl pt-3'>- HTML code example:</h3>
                    <p className='pl-4'>I'll be rendering the following HTML code:</p>
                    <div className="bg-[#1E1E1E] p-4 rounded-md overflow-x-auto">
                        <pre className="text-white text-sm">
                            <code>
                            {/* {`<p>Make sure to checkout <a href="/projects" style={{color:"#9694FF"}}></a></p>`} */}

                            <span className='text-gray-500'>{`<`}</span>
                            <span className='text-green-600'>{`p`}</span>
                            <span className='text-gray-500'>{`>`}</span>
                            

                            <span className='text-rose-800'>
                                Make sure to checkout
                            </span>
                            
                            <span className='text-gray-500'>{`<`}</span>
                            <span className='text-green-600'>{`a`}</span>
                            <span className='text-blue-600  p-2'>{`href`}</span>
                            <span>=</span>
                            <span className='text-green-600'>{`"/projects"`}</span>
                            <span className='text-blue-600  p-2'>{`style`}</span>
                            <span className='text-gray-500'>{`=`}</span>
                            <span className='text-gray-500'>{`{`}</span>
                            <span className='text-gray-500'>{`{`}</span>
                            <span>color</span>
                            <span className='text-gray-500'>{`:`}</span>
                            <span className='text-green-600'>{`"#9694FF"`}</span>
                            <span className='text-gray-500'>{`}`}</span>
                            <span className='text-gray-500'>{`}`}</span>
                            <span className='text-gray-500'>{`>`}</span>
                            <span className='text-rose-800'>
                                Project Here
                            </span>
                            <span className='text-gray-500'>{`</`}</span>
                            <span className='text-green-600'>{`a`}</span>
                            <span className='text-gray-500'>{`>`}</span>
                            <span className='text-gray-500'>{`!`}</span>
                            <span className='text-gray-500'>{`</`}</span>
                            <span className='text-green-600'>{`p`}</span>
                            <span className='text-gray-500'>{`>`}</span>

                            
                            </code>
                            </pre>
                        </div>
                        <p className='pt-3'>Output of above code :</p>
                        <p className='p-2'>Make sure to checkout <a href="/projects" style={{ color: "#9694FF" }}>project here</a>!</p>

                        <ul>
                            <li className='pl-2 pb-4'>Also we can include TailwindCSS utilities to style the HTML elements.</li>
                        </ul>

                        <hr></hr>

                        <h3 className='text-3xl pt-2'>- Now let's render a JSX component:</h3>

                        <ul>
                            <li className='pl-5'>Following is a simple counter created using JSX:</li>
                        </ul>

                        <div className='flex pt-4 pb-4 items-center gap-5 justify-center'>
                            <button className='inline-flex items-center bg-slate-50 text-slate-950 justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2'  disabled={value === 0} onClick={()=>{setValue(value-1)}}>
                                -
                            </button>
                            <p>{value}</p>
                            <button className='inline-flex items-center bg-slate-50 text-slate-950 justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2'  onClick={()=>{setValue(value+1)}}>
                                +
                            </button>
                        </div>

                        <p className='pl-5'>
                            You can actually interact with it! By clicking 
                        <code className="relative before:content-['`'] after:content-['`']" >
                            <span>+</span>
                        </code>
                        and 
                        <code className="relative before:content-['`'] after:content-['`']" >
                            <span>-</span>
                        </code>
                        buttons you can increase or decrease the count respectively.
                        </p>
                        <ul>
                            <li className='pt-3 pl-4 pb-3'>
                             Also we can embed YouTube video using custom YouTubeEmbed Component!
                            </li>
                        </ul>

                        <div>
                            <iframe className='aspect-video p-4 w-full rounded-lg' width="560" height="315" src="https://www.youtube.com/embed/VyyTSwObx4Q?si=2aXAvrgG_v9nKb2C" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>

                        <hr></hr>

                        <div>
                            <p className='text-center p-4'> 
                            Thankyou for reading the blogpost! Make sure to follow us on social media and subscribe to our newsletter for more updates.
                            </p>
                        </div>
                </main>
                <footer className="flex flex-col items-center justify-center pb-32 sm:flex-row-reverse sm:justify-between">
             

             <section className="mt-8 sm:mt-0">
               <p className="text-center text-xs text-muted-foreground">
                 <span>© 2025  </span>
                 <a href="/">Sanketmane</a>
               </p>
             </section>
     </footer>

            </article>

        </main>


    </div>
  )
}

export default page