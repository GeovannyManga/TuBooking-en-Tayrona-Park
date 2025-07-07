import React from 'react'
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import CardRegion from "../components/CardRegion";
import CarrucelRegion from "../components/CarrucelRegion";
import Cards from "../components/Cards";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className=''>
         <NavBar></NavBar>
         <Banner></Banner>
         <CardRegion></CardRegion>
         <Cards></Cards>
         <CarrucelRegion></CarrucelRegion>
         <Footer></Footer>

    </div>
  )
}
