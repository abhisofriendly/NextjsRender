import React from 'react';
import Header from '../../components/includes/header'
import Head from 'next/head';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const MainLayout=(props)=>{
  return(
    <>
      <Head>
        <title>MyApp.com</title>
      </Head>
      <Header/>
      <div className="container-fluid">
      {props.children}
      </div>
    </>
  )
}

export default MainLayout