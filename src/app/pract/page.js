import React from 'react'

function page() {
  return (
    <div className='w-full h-screen grid place-content-center bg-black p-3 '>
        <div className='rounded-xl bg-white flex flex-col'>
            <img  className='w-40 h-40' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/250px-GitHub_Invertocat_Logo.svg.png' alt='' />
            <div className='p-1 flex flex-col '>
                <p className='text-2xl text-black '>GitHub</p>
                <p className='text-sm text-black sm:text-white md:text-green-800 md:text-2xl'>Sanket Mane </p>
            </div>
        </div>
    </div>
  )
}

export default page