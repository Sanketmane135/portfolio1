"use client"
import Image from "next/image";
import location from '../images/—Pngtree—vector location icon_3788514.png'
import { useState } from "react";
import typescript from '../images/typescript.png';
import javascript from '../images/javascript.png';
import nextjs from '../images/next.png';
import telwind from '../images/telwind.png';
import react from '../images/react.png';
import mongo from '../images/mongo.png';
import express2 from '../images/express2.png';
import node from '../images/node.png';
import postgrey from '../images/postgrey.png';
import pandas from '../images/pandas.png';
import numpy from '../images/numpy.png';
import Link from "next/link";
import bagpack from '../images/bagpack.png';
import dyp from '../images/dyp.png';
import sarthi from '../images/sarthi.png';
import ness from'../images/ness.png';
import vs from '../images/vs2.png'
import git from '../images/git.png'
import alpha from '../images/alphiity.jpg'
import seoimg from '../images/seoimg.png'

export default function Home() {

let [value, setValue]=useState<number>(1);
let [secondValue, setsecondValue]=useState<number>(1);


const skills = (value: number) => {
  switch (value) {
    case 1:
      return <section className="px-1 md:px-5 w-full grid grid-cols-2 md:grid-cols-4">
              <div className="bg-zinc-900 flex w-auto px-3 py-1 items-center gap-2 rounded-lg mb-2 mx-1">
                <Image src={typescript} width={40} height={40} alt="type"/>
                <h3>Typescript</h3>
              </div>
              <div className="bg-zinc-900 flex w-auto px-3 py-1 items-center gap-2 rounded-lg mb-2 mx-1">
                <Image src={javascript} width={40} height={40} alt="type"/>
                <h3>Javascript</h3>
              </div>
              <div className="bg-zinc-900 flex w-auto px-3 py-1 items-center gap-2 rounded-lg mb-2 mx-1">
                <Image src={react} width={40} height={40} alt="type"/>
                <h3>React.js</h3>
              </div>
              <div className="bg-zinc-900 flex w-auto px-3 py-1 items-center gap-2 rounded-lg mb-2 mx-1">
                <Image src={nextjs} width={40} height={40} alt="type"/>
                <h3>Next.js</h3>
              </div>
              <div className="bg-zinc-900 flex w-auto px-3 py-1 items-center gap-2 rounded-lg mb-2 mx-1">
                <Image src={telwind} width={40} height={40} alt="type"/>
                <h3>Tailwind </h3>
              </div>
              
              </section>;
    case 2:
      return <section className="px-1 md:px-5 w-full grid grid-cols-2 md:grid-cols-4">
              <div className="bg-zinc-900 flex w-auto px-3 py-1 items-center gap-2 rounded-lg mb-2 mx-1">
                <Image src={mongo} width={40} height={40} alt="type"/>
                <h3>MOngoDB</h3>
              </div>
              <div className="bg-zinc-900 flex w-auto px-3 py-1 items-center gap-2 rounded-lg mb-2 mx-1">
                <Image src={node} width={40} height={40} alt="type"/>
                <h3>Node.js</h3>
              </div>
              <div className="bg-zinc-900 flex w-auto px-3 py-1 items-center gap-2 rounded-lg mb-2 mx-1">
                <Image src={express2} width={40} height={40} alt="type"/>
                <h3>Express.js</h3>
              </div>
            
              
              </section>;
    case 3:
      return <section className="px-1 md:px-5 w-full grid grid-cols-2 md:grid-cols-4">
      <div className="bg-zinc-900 flex w-auto px-3 py-1 items-center gap-2 rounded-lg mb-2 mx-1">
        <Image src={git} width={40} height={40} alt="type"/>
        <h3>GitHub</h3>
      </div>
      <div className="bg-zinc-900 flex w-auto px-3 py-1 items-center gap-2 rounded-lg mb-2 mx-1">
        <Image src={vs} width={40} height={40} alt="type"/>
        
        <h3>Vs Code </h3>
      </div>
      </section>;
    default:
      return <h1>No skill selected</h1>;
  }
};

const education=(secondValue:number)=>{
  switch(secondValue){
    case 1:
      return <div className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="p-0">
          <ul className="ml-10 border-l">
            <li className="relative ml-10 py-4">
              <a className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white">
                <span className="relative flex shrink-0 overflow-hidden rounded-full size-12 border">
                  <Image src={sarthi} width={40} height={40} alt="free" />
                </span>
              </a>
              <div className="flex flex-1 flex-col justify-start gap-1">
                <h2 className="font-semibold leading-none">Sarathi Foundation</h2>
                <p className="text-sm text-muted-foreground">Front-end developer( Freelanced )</p>
                <ul className="ml-4 list-outside list-disc">
                  <li className="prose pr-8 text-sm dark:prose-invert">
                  Designed and developed frontend of the website using core technologies and Tailwind CSS.
                  </li>
                  <li className="prose pr-8 text-sm dark:prose-invert">
                  Website was used to display all the created events by the foundation.
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>



        <div className="p-0">
          <ul className="ml-10 border-l">
            <li className="relative ml-10 py-4">
              <a className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white">
                <span className="relative flex shrink-0 overflow-hidden rounded-full h-10 border object-contain">
                  <Image src={alpha} width={40} height={40} alt="free" /> 
                </span>
              </a>
              <div className="flex flex-1 flex-col justify-start gap-1">
                <h2 className="font-semibold leading-none">Alphinity Soft tech pvt ltd</h2>
                <p className="text-sm text-muted-foreground">Intern </p>
                <ul className="ml-4 list-outside list-disc">
                  <li className="prose pr-8 text-sm dark:prose-invert">
                  Worked as a intern from 1 june - 1 july months where i worked on developing the frontend and handling backend with Express and MongoDB.
                  </li>
                  <li className="prose pr-8 text-sm dark:prose-invert">
                  Implemented next.js for the frontend and used MongoDB for the database.
                  </li>
                  <li className="prose pr-8 text-sm dark:prose-invert">
                   Gained my skills by working on the website of the coaching classes & college website
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    case 2:
      return <div className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="p-0">
              <ul className="ml-10 border-l">
                <li className="relative ml-10 py-4">
                  <a className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white">
                    <span className="relative flex shrink-0 overflow-hidden rounded-full size-12 border">
                      <Image src={dyp} width={50} height={50} alt="type"/>
                    </span>
                  </a>
                  <div className="flex flex-1 flex-col justify-start gap-1">
                    <time className="text-xs text-muted-foreground">
                      <span>2023</span>
                      <span>-</span>
                      <span>present</span>
                    </time>
                    <h2 className="font-semibold leading-none"> D. Y. Patil Technical Campus, Kolhapur</h2>
                    <p className="text-sm text-muted-foreground">B.Tech in Computer Science & Engineering</p>
                  </div>
                </li>
                
                <li className="relative ml-10 py-4">
                  <a className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white">
                    <span className="relative flex shrink-0 overflow-hidden rounded-full size-12 border">
                      <Image src={ness} width={40} height={40} alt="type"/>
                    </span>
                  </a>
                  <div className="flex flex-1 flex-col justify-start gap-1">
                    <time className="text-xs text-muted-foreground">
                      <span>2020</span>
                      <span>-</span>
                      <span>2022</span>
                    </time>
                    <h2 className="font-semibold leading-none">New English School & Junior College of Science, Shirala</h2>
                    <p className="text-sm text-muted-foreground">11th + 12th</p>
                  </div>
                </li>

                
              </ul>
            </div>
          </div>
      </div>
  }
}


  return (
    <div className=" mx-auto flex min-h-screen max-w-3xl flex-col px-8 font-sans antialiased bg-black __variable_d65c78 __variable_137a1a">
      
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
      <main className="grow">
        <article className="mt-8 flex flex-col gap-16 pb-16">
          <section>
            <div className="flex flex-col">
              <h1 className="__className_137a1a text-5xl font-bold">Sanket Mane</h1>
              <p className="flex items-center gap-1 mt-2">
              {/* <Image src={location} alt="location" width={40} height={40}/> */}
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="M480-80q-106 0-173-33.5T240-200q0-24 14.5-44.5T295-280l63 59q-9 4-19.5 9T322-200q13 16 60 28t98 12q51 0 98.5-12t60.5-28q-7-8-18-13t-21-9l62-60q28 16 43 36.5t15 45.5q0 53-67 86.5T480-80Zm1-220q99-73 149-146.5T680-594q0-102-65-154t-135-52q-70 0-135 52t-65 154q0 67 49 139.5T481-300Zm-1 100Q339-304 269.5-402T200-594q0-71 25.5-124.5T291-808q40-36 90-54t99-18q49 0 99 18t90 54q40 36 65.5 89.5T760-594q0 94-69.5 192T480-200Zm0-320q33 0 56.5-23.5T560-600q0-33-23.5-56.5T480-680q-33 0-56.5 23.5T400-600q0 33 23.5 56.5T480-520Zm0-80Z"/></svg>
              <span className="__className_137a1a "> Maharashtra, India.</span>
              </p>
              <p className="mt-3">
I’m a full-stack web developer passionate about building modern, scalable, and user-friendly applications. I specialize in Next.js, TypeScript, Tailwind CSS, and Node.js, Express.js with hands-on experience in databases like MongoDB.              </p>
              <div className="flex items-end gap-1 mt-4 main-text">
                <p>
                  <a href="/sanketsresume.pdf">Check out my resume here <span className="text-2xl ">↗</span></a>
                </p>
              </div>

              <section className="mt-8 flex items-center gap-8">
                <section className="flex gap-6 items-center">
                  <a href="https://www.linkedin.com/in/sanket-mane-1986092ab/">
                    <svg fill="#f0f0f0" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 310"  stroke="#f0f0f0"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="XMLID_801_"> <path id="XMLID_802_" d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73 C77.16,101.969,74.922,99.73,72.16,99.73z"></path> <path id="XMLID_803_" d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4 c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"></path> <path id="XMLID_804_" d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599 c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319 c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995 C310,145.43,300.549,94.761,230.454,94.761z"></path> </g> </g></svg>
                  </a>
                  <a href="https://github.com/Sanketmane135">
                    <svg width="35px" height="35px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#ffffff" fill-rule="evenodd" d="M8 1C4.133 1 1 4.13 1 7.993c0 3.09 2.006 5.71 4.787 6.635.35.064.478-.152.478-.337 0-.166-.006-.606-.01-1.19-1.947.423-2.357-.937-2.357-.937-.319-.808-.778-1.023-.778-1.023-.635-.434.048-.425.048-.425.703.05 1.073.72 1.073.72.624 1.07 1.638.76 2.037.582.063-.452.244-.76.444-.935-1.554-.176-3.188-.776-3.188-3.456 0-.763.273-1.388.72-1.876-.072-.177-.312-.888.07-1.85 0 0 .586-.189 1.924.716A6.711 6.711 0 018 4.381c.595.003 1.194.08 1.753.236 1.336-.905 1.923-.717 1.923-.717.382.963.142 1.674.07 1.85.448.49.72 1.114.72 1.877 0 2.686-1.638 3.278-3.197 3.45.251.216.475.643.475 1.296 0 .934-.009 1.688-.009 1.918 0 .187.127.404.482.336A6.996 6.996 0 0015 7.993 6.997 6.997 0 008 1z" clip-rule="evenodd"></path></g></svg>
                  </a>
                </section>
              </section>
            </div>
          </section>


{/* =========== skills ============= */}
          <section>
            <h2 className=" title sm:text-3xl mb-4">Technologies i know </h2>
            <div className="h-10  items-center justify-center rounded-md bg-slate-900 p-1 text-muted-foreground mb-2 grid w-full grid-cols-3">
              <button onClick={()=>{setValue(1)}} className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${value === 1 ? "bg-slate-700 text-white" : "bg-transparent "} `}>Frontend</button> 
              <button onClick={()=>{setValue(2)}} className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${value === 2 ? "bg-slate-700 text-white" : "bg-transparent "} `}>Backend</button>
              <button onClick={()=>{setValue(3)}} className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${value === 3 ? "bg-slate-700 text-white" : "bg-transparent "} `}>Other</button>
            </div>
            {skills(value)}
          </section>


{/* ========= work and exprience ========== */}
          <section>
            <h2 className=" sm:text-3xl mb-4"> Experience</h2>
            <div className="h-10 items-center justify-center rounded-md bg-slate-900 p-1 text-muted-foreground mb-2 grid w-full grid-cols-2">
              <button className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${secondValue === 1 ? "bg-slate-700 text-white" : "bg-transparent "} `} onClick={()=>{setsecondValue(1)}}>Work</button>
              <button className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  ${secondValue === 2 ? "bg-slate-700 text-white" : "bg-transparent "}  ` }  onClick={()=>{setsecondValue(2)}}>Education</button>
            </div>
            {
              education(secondValue)
            }
          </section>

{/* ============ project ============== */}
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

          <section className="flex flex-col gap-8">
                  <div className="flex justify-between">
                    <h2 className="__className_137a1a title sm:text-3xl">Featured Blog</h2>
                    <a  href={"/blogs"}  className="link flex items-center gap-2 font-light justify-between">
                      <span>view more</span>
                      <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#999999"><path d="M630-444H192v-72h438L429-717l51-51 288 288-288 288-51-51 201-201Z"/></svg>
                    </a>
                  </div>
          </section>

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
              <a>
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
  );
}
