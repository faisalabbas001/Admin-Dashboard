 import React from 'react'
 import Layout from '../components/layout'
 import dynamic from "next/dynamic";

 const ColumnChart=dynamic(()=>import('./charts/ColumnChart'),{
   loading:()=> <p> char is loading...</p>
 });
 const ComboChart=dynamic(()=>import('./charts/ComboChart'),{
   loading:()=> <p> char is loading...</p>
 });
 const ScatterChart=dynamic(()=>import('./charts/ScatterChart'),{
   loading:()=> <p> char is loading...</p>
 });
 
 const WordChar=dynamic(()=>import('./charts/WordChar'),{
   loading:()=> <p> char is loading...</p>
 });




 const Project = () => {
   return (
    <>
    <Layout>
    <div className="grid lg:grid-cols-12 sm:grid-cols-7 gap-4 mt-3">
    <div className=" col-span-6 rounded-lg shadow-lg px-4 py-4 bg-white">
  <ColumnChart/>
  </div>
  <div className="col-span-6  rounded-lg shadow-lg px-4 py-4 bg-white">
  <ComboChart/>
  </div>
    </div>


    <div className="grid lg:grid-cols-12 sm:grid-cols-7 gap-4 mt-3">
    <div className=" col-span-6 rounded-lg shadow-lg px-4 py-4 bg-white">
  <ScatterChart/>
  </div>
  <div className="col-span-6  rounded-lg shadow-lg px-4 py-4 bg-white">
  <WordChar/>
  </div>
    </div>
 
  </Layout>
  </>
   )
 }
 
 export default Project




