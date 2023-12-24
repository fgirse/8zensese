import React from 'react'
import Link from'next/link';
import Image from'next/image'; 
import useSignup from "../app/components/useSignup"
const Home = () => {
  return (
    <main className ="min-h-screen">
     
<div className=" py-3 grid grid-cols-7 grid-rows-[7vh_7vh_1vh_8vh] gap-1">
    <div className="col-span-4 row-span-2">
  <h1 className='headingA text-Gray-400 text-3xl leading-8 font-extrabold uppercase text-left font-bouwlbySC'>timeless</h1>  
    
    </div>
    <div className="col-span-4 row-span-2 col-start-1 row-start-3">
    <h1 className='headingA relative -top-14 text-amber-200 text-[3.7rem] font-raleway leading-6 font-extrabold uppercase text-left '>Design</h1>  
    </div>
    <div className="col-span-3 row-span-4 col-start-5 row-start-1"></div>
    <div className="col-start-3 col-span-3 row-start-5 mb-5">
      <Link href="#" className='px-3 py-2 bg-slate-600 rounded-xl  text-xl text-center text-white'>send email</Link> 
    </div>
    <div className="col-span-5 row-span-3 col-start-2 row-start-6">
    <Image
                  src="/images/sideboardobg.png"
                  className="mx-auto"
                  width="600"
                  height="420"
                  alt="banner image"
                  priority
                />
    </div>
    <div className='col-span-3 row-span-5 col-start-3 row-start-9'>
    <Image
                  src="/images/LogoEZ.png"
                  className="mx-auto rounded-xl shadow-2xl shadow-slate-200/60"
                  width="250"
                  height="250"
                  alt="banner image"
                  priority
                />
    </div>
</div>
    
    </main>
  )
}

export default Home