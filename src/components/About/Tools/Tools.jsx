import React from 'react'

import html from '../../../assets/git_.png'
import css from '../../../assets/github_.webp'
import java from '../../../assets/mysql_.png'
import jquery from '../../../assets/npm.png'

function Tools() {
  return (
    <div className='div_card_skills row mt-2'>
   
     <div className=" col-lg-3 col-md-6 col-sm-12 mt-4 ">
       <div className="card_Skill  flex">
        <div style={{width : '70px' , height : '50px'}}>
          <img src={html} alt="" style={{width : '100%' , height : '100%'}}/>
        </div>
        <p className='m-0 p-0'>Git</p>
       </div>
       </div>
     <div className=" col-lg-3 col-md-6 col-sm-12 mt-4 ">
       <div className="card_Skill  flex">
        <div style={{width : '70px' , height : '50px'}}>
          <img src={css} alt="" style={{width : '100%' , height : '100%'}}/>
        </div>
        <p className='m-0 p-0'>GitHub</p>
       </div>
       </div>
   
     <div className=" col-lg-3 col-md-6 col-sm-12 mt-4 ">
       <div className="card_Skill  flex">
        <div style={{width : '70px' , height : '50px'}}>
          <img src={jquery} alt="" style={{width : '100%' , height : '100%'}}/>
        </div>
        <p className='m-0 p-0'>NPM</p>
       </div>
       </div>
   
     <div className=" col-lg-3 col-md-6 col-sm-12 mt-4 ">
       <div className="card_Skill  flex">
        <div style={{width : '70px' , height : '50px'}}>
          <img src={java} alt="" style={{width : '100%' , height : '100%'}}/>
        </div>
        <p className='m-0 p-0'>MySQL</p>
       </div>
       </div>
       </div>
  )
}
export default Tools
