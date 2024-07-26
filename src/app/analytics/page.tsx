"use client"
import Layout from "../components/layout";
// import PiChart from "./charts/PieCharts"
// import AreaChart from './charts/AreaChats'
import dynamic from "next/dynamic";

const PiChart=dynamic(()=>import('./charts/PieCharts'),{
  loading:()=> <p> char is loading...</p>
});
const AreaChart=dynamic(()=>import('./charts/AreaChats'),{
  loading:()=> <p> char is loading...</p>
});
const GeoChart=dynamic(()=>import('./charts/GeoChart'),{
  loading:()=> <p> char is loading...</p>
});

const AniChart=dynamic(()=>import('./charts/AniChart'),{
  loading:()=> <p> char is loading...</p>
});
const Analytics = () => {
  return (
  <>
  <Layout>
 

  <h2 className=" text-lg mb-2">Analytics</h2>
    <div className="grid lg:grid-cols-12 sm:grid-cols-7 gap-4 mt-3">
    <div className=" col-span-6 rounded-lg shadow-lg px-4 py-4 bg-white">
  <PiChart/>
  </div>
  <div className="col-span-6  rounded-lg shadow-lg px-4 py-4 bg-white">
  <AreaChart/>
  </div>
    </div>


    <div className="grid lg:grid-cols-12 sm:grid-cols-7 gap-4 mt-3">
    <div className=" col-span-6 rounded-lg shadow-lg px-4 py-4 bg-white">
  <GeoChart/>
  </div>
  <div className="col-span-6  rounded-lg shadow-lg px-4 py-4 bg-white">
  <AniChart/>
  </div>
    </div>
 
  </Layout>
  </>
  )
}
export default Analytics