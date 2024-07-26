 "use client"
 import React from 'react'
  import Layout from '../components/layout';
  import AppProfile from './AppProfile';
  import dynamic from "next/dynamic";
const GeoCharts=dynamic(()=>import('./charts/GeoCharts'),{
  loading:()=> <p> char is loading...</p>
});
  const Profilr = () => {
    return (
      <Layout>
        <AppProfile/>

  

<GeoCharts/>

      </Layout>
    )
  }
  
  export default Profilr