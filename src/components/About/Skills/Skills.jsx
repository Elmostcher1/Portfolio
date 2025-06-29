import React from 'react'
import html from '../../../assets/html.png'
import css from '../../../assets/css.jpeg'
import java from '../../../assets/java.png'
import jquery from '../../../assets/jquery.png'
import boot from '../../../assets/bootstrap.png'
import laravel from '../../../assets/laravel.png'
import react from '../../../assets/react.png'
import php from '../../../assets/php.svg'
import oop from '../../../assets/oop.jpg'
import seo from '../../../assets/seo.png'
import ajsx from '../../../assets/Ajsx.png'

function Skills() {
  return (
 <div className='div_card_skills row mt-2'>

  <div className=" col-lg-3 col-md-6 col-sm-12 mt-4 ">
    <div className="card_Skill  flex">
     <div style={{width : '70px' , height : '50px'}}>
       <img className='_img' src={html} alt="" style={{width : '100%' , height : '100%'}}/>
     </div>
     <p className='m-0 p-0'>HTML</p>
    </div>
    </div>
  <div className=" col-lg-3 col-md-6 col-sm-12 mt-4 ">
    <div className="card_Skill  flex">
     <div style={{width : '70px' , height : '50px'}}>
       <img className='_img' src={css} alt="" style={{width : '100%' , height : '100%'}}/>
     </div>
     <p className='m-0 p-0'>Css</p>
    </div>
    </div>

  <div className=" col-lg-3 col-md-6 col-sm-12 mt-4 ">
    <div className="card_Skill  flex">
     <div style={{width : '70px' , height : '50px'}}>
       <img className='_img' src={php} alt="" style={{width : '100%' , height : '100%'}}/>
     </div>
     <p className='m-0 p-0'>PhP</p>
    </div>
    </div>

  <div className=" col-lg-3 col-md-6 col-sm-12 mt-4 ">
    <div className="card_Skill  flex">
     <div style={{width : '70px' , height : '50px'}}>
       <img className='_img' src={java} alt="" style={{width : '100%' , height : '100%'}}/>
     </div>
     <p className='m-0 p-0'>JavaScript</p>
    </div>
    </div>

  <div className=" col-lg-3 col-md-6 col-sm-12 mt-4 ">
    <div className="card_Skill  flex">
     <div style={{width : '70px' , height : '50px'}}>
       <img className='_img' src={laravel} alt="" style={{width : '100%' , height : '100%'}}/>
     </div>
     <p className='m-0 p-0'>Laravel</p>
    </div>
    </div>

  <div className=" col-lg-3 col-md-6 col-sm-12 mt-4 ">
    <div className="card_Skill  flex">
     <div style={{width : '70px' , height : '50px'}}>
       <img className='_img' src={jquery} alt="" style={{width : '100%' , height : '100%'}}/>
     </div>
     <p className='m-0 p-0'>JQuery</p>
    </div>
    </div>

  <div className=" col-lg-3 col-md-6 col-sm-12 mt-4 ">
    <div className="card_Skill  flex">
     <div style={{width : '70px' , height : '50px'}}>
       <img className='_img' src={ajsx} alt="" style={{width : '100%' , height : '100%'}}/>
     </div>
     <p className='m-0 p-0'>Ajsx</p>
    </div>
    </div>

  <div className=" col-lg-3 col-md-6 col-sm-12 mt-4 ">
    <div className="card_Skill  flex">
     <div style={{width : '70px' , height : '50px'}}>
       <img className='_img' src={seo} alt="" style={{width : '100%' , height : '100%'}}/>
     </div>
     <p className='m-0 p-0'>SEO</p>
    </div>
    </div>

  <div className=" col-lg-3 col-md-6 col-sm-12 mt-4 ">
    <div className="card_Skill  flex">
     <div style={{width : '70px' , height : '50px'}}>
       <img className='_img' src={oop} alt="" style={{width : '100%' , height : '100%'}}/>
     </div>
     <p className='m-0 p-0'>OOP</p>
    </div>
    </div>

  <div className=" col-lg-3 col-md-6 col-sm-12 mt-4 ">
    <div className="card_Skill  flex">
     <div style={{width : '70px' , height : '50px'}}>
       <img className='_img' src={react} alt="" style={{width : '100%' , height : '100%'}}/>
     </div>
     <p className='m-0 p-0'>React</p>
    </div>
    </div>

  <div className=" col-lg-3 col-md-6 col-sm-12 mt-4 ">
    <div className="card_Skill  flex">
     <div style={{width : '70px' , height : '50px'}}>
       <img className='_img' src={boot} alt="" style={{width : '100%' , height : '100%'}}/>
     </div>
     <p className='m-0 p-0'>BootStrap</p>
    </div>
    </div>


    
 </div>
  )
}
export default Skills
