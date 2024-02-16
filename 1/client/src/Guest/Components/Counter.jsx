

import React from 'react'
import './App.css'
import CountUp from 'react-countup'

import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';




export default function Counter() {


  useEffect(() => {
    AOS.init({
      // offset: 300,
      duration: 1000
    });

  },[])

  return (
    <>
    
    
    <section id="stats-counter" className="stats-counter animation " data-aos="fade-up">
      <div className="container " data-aos="zoom-out">
        <div className="row gy-4">
          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
            <h1  className="purecounter"><CountUp start={0} end={225} duration={2} delay={0}/></h1>
              
              <p>Happy Clients </p>
            
            </div>
          </div>
          {/* End  Item */}
          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <h1  className="purecounter"><CountUp start={0} end={521} duration={30} delay={0}/></h1>
              
              <p>NeW Arrivals</p>
            </div>
          </div>
          {/* End  Item */}
          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">

            <h1  className="purecounter"><CountUp start={0} end={450} duration={30} delay={0}/></h1>
              
              <p>Hours Of Suppor</p>
            </div>
          </div>
          {/* End Item */}
          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
            <h1  className="purecounter"><CountUp start={0} end={250} duration={30} delay={0}/></h1>
              
              <p>Hard Workers</p>
            </div>
          </div>
          {/* End Item */}
        </div>
      </div>
    </section>
   
  </>
  
  )
}





