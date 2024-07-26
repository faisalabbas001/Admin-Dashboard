"use client"
import Layout from "../components/layout"
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { Circle } from 'rc-progress';
import CountUp from 'react-countup';
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Image from "next/image";
const WaterFall=dynamic(()=>import('./charts/WaterFall'),{
  loading:()=> <p> char is loading...</p>
});

const AniChart=dynamic(()=>import('./charts/AniCharts'),{
  loading:()=> <p> char is loading...</p>
});


const Home = () => {

  return (
  <>
  <Layout>
  <div className="fixed right-20 mt-80 z-50">
      <a href="https://wa.me/923497794992">
        <Image src="/whatsapp.png" alt="whatsapp image" width={50} height={50} />
      </a>
    </div>
    <div className="fixed right-20 mt-56 z-50">
      <a href="https://www.instagram.com/faisalcodemaster/">
        <Image src="/instagram.png" alt="instagram image" width={50} height={50} />
      </a>
    </div>
   <div className=" grid grid-cols-4 gap-6">
 <div className="  lg:col-span-1 sm:col-span-4 xs:col-span-4 hover:scale-105 transition-duration-105">
  <div className=" mx-auto bg-sky-50 rounded-xl  shadow-lg">
<div className=" flex justify-between">
  <div className=" ml-5 mt-5"><PeopleAltIcon  fontSize="large"   />
  </div>
  <div className=" mr-5 mt-5 roundprogress">
    <Circle 
        percent={77}
        trailWidth={8}
        strokeWidth={4}
        strokeColor='rgb(2,120,199)'
        trailColor="#b3a4f3"
      /> 
  </div>
</div>


<div className="pl-7 py-5">
  <div className=" text-blue-500 font-semibold">
    total users
  </div>
  <div className=" text-3xl font-semibold">
  <CountUp start={0} end={344} delay={2}/>
  </div>
</div>
  </div>

 </div>
 <div className="  lg:col-span-1 sm:col-span-4 xs:col-span-4 hover:scale-105 transition-duration-105">
  <div className=" mx-auto bg-sky-50 rounded-xl shadow-lg">
<div className=" flex justify-between">
  <div className=" ml-5 mt-5"><PeopleAltIcon  fontSize="large"   />
  </div>
  <div className=" mr-5 mt-5 roundprogress">
    <Circle 
        percent={77}
        trailWidth={8}
        strokeWidth={4}
        strokeColor='rgb(2,120,199)'
        trailColor="#b3a4f3"
      /> 
  </div>
</div>


<div className="pl-7 py-5">
  <div className=" text-blue-500 font-semibold">
    total users
  </div>
  <div className=" text-3xl font-semibold">
  <CountUp start={0} end={278} delay={2}/>
  </div>
</div>
  </div>

 </div>
 <div className="  lg:col-span-1 sm:col-span-4 xs:col-span-4 hover:scale-105 transition-duration-105">
  <div className=" mx-auto bg-sky-50 rounded-xl shadow-lg">
<div className=" flex justify-between">
  <div className=" ml-5 mt-5"><PeopleAltIcon  fontSize="large"   />
  </div>
  <div className=" mr-5 mt-5 roundprogress">
    <Circle 
        percent={77}
        trailWidth={8}
        strokeWidth={4}
        strokeColor='rgb(2,120,199)'
        trailColor="#b3a4f3"
      /> 
  </div>
</div>


<div className="pl-7 py-5">
  <div className=" text-blue-500 font-semibold">
    total users
  </div>
  <div className=" text-3xl font-semibold">
  <CountUp start={0} end={233} delay={2}/>
  </div>
</div>
  </div>

 </div>
 <div className="  lg:col-span-1 sm:col-span-4 xs:col-span-4 hover:scale-105 transition-duration-105">
  <div className=" mx-auto bg-sky-50 rounded-xl   shadow-lg">
<div className=" flex justify-between">
  <div className=" ml-5 mt-5"><PeopleAltIcon  fontSize="large"   />
  </div>
  <div className=" mr-5 mt-5 roundprogress">
    <Circle 
        percent={77}
        trailWidth={8}
        strokeWidth={4}
        strokeColor='rgb(2,120,199)'
        trailColor="#b3a4f3"
      /> 
  </div>
</div>


<div className="pl-7 py-5">
  <div className=" text-blue-500 font-semibold">
    total users
  </div>
  <div className=" text-3xl font-semibold">
  <CountUp start={0} end={155} delay={2}/>
  
  </div>
</div>
  </div>

 </div>
 
   </div>


   <div className="grid lg:grid-cols-12 sm:grid-cols-7 gap-4 mt-3">
    <div className=" col-span-6 rounded-lg shadow-lg px-4 py-4 bg-white">
  <WaterFall/>
  </div>
  <div className="col-span-6  rounded-lg shadow-lg px-4 py-4 bg-white">
  <AniChart/>
  </div>
    </div>
  
  </Layout>
  
  </>
  )
}

export default Home