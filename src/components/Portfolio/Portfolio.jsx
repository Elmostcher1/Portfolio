import React from 'react'
import './Portfolio.css' 
import {HiExternalLink } from "react-icons/hi";
import photo_react from '../../assets/photo-react.jpg';
import photo_js from '../../assets/photo-js_-.jpg';
import photo_css from '../../assets/photo_css.jpg';
import photo_css_3 from '../../assets/photo_css_3.jpg';
import photo_css_2 from '../../assets/photo_css_2.jpg';
import photo_react_2 from '../../assets/photo-react_2.jpg';
import dash from '../../assets/dash.jpg';
import portfolio from '../../assets/portfolio.jpg';

function Portfolio() {

  

  return (
    <div className='Portfolio container '>

      <div className='flex flex-column' style={{marginTop : '50px'}}>
      <h5 className='fs-2 ' style={{color :'var(--white-color)'}}>Past Project Experience</h5>
      <p className='p-0 m-0'>Explore the projects I’ve worked on so far</p>
      </div>

      <div className='all_card_pro row mt-5  '>
      <div className="  col-lg-4 col-md-6 col-sm-12 mb-3">
        <div className='card_pro w-100 p-2'>
          <div className='div_img' >
            <img src={portfolio} alt='' className='w-100 h-100'/>
          </div>
          <div className='d-flex flex-column'>
            <p className='m-0 p-0'>💼 My Portfolio</p>
            <p className='m-0 p-0'>Welcome to my portfolio! Here you’ll find a selection of my front-end web projects built using HTML, CSS, JavaScript, and Bootstrap. Each project reflects my focus on clean design, responsive layout, and a smooth user experience.</p>
            <p className='m-0 p-0'>React & Bootstrap</p>
            <div className='icons_pro flex'>
              <a href="https://elmostcher1.github.io/Portfolio/" >
              <span>Visit WebSite</span>
              <HiExternalLink />
              </a>
          </div>

          </div>
        </div>
      </div>
      <div className="  col-lg-4 col-md-6 col-sm-12 mb-3">
        <div className='card_pro w-100 p-2'>
          <div className='div_img' >
            <img src={photo_react} alt='' className='w-100 h-100'/>
          </div>
          <div className='d-flex flex-column'>
            <p className='m-0 p-0'>React Product Store</p>
            <p className='m-0 p-0'>A modern React-based web application for browsing, managing, and showcasing a variety of products. Built with responsive design and dynamic state management to ensure smooth user experience.</p>
            <p className='m-0 p-0'>React & Bootstrap</p>
            <div className='icons_pro flex'>              
              <a href="https://elmostcher1.github.io/project_react/" >
              <span>Visit WebSite</span>
              <HiExternalLink />
              </a>
          </div>

          </div>
        </div>
      </div>
         <div className="  col-lg-4 col-md-6 col-sm-12 mb-3">
        <div className='card_pro w-100 p-2'>
          <div className='div_img' >
            <img src={photo_react_2} alt='' className='w-100 h-100'/>
          </div>
          <div className='d-flex flex-column'>
            <p className='m-0 p-0'>React Product Store</p>
            <p className='m-0 p-0'>A modern React-based web application for browsing, managing, and showcasing a variety of products. Built with responsive design and dynamic state management to ensure smooth user experience.</p>
            <p className='m-0 p-0'>React & Bootstrap</p>
            <div className='icons_pro flex'>
             <a href="https://elmostcher1.github.io/project_react2/" >
              <span>Visit WebSite</span>
              <HiExternalLink /></a>
          </div>

          </div>
        </div>
      </div>
            <div className="  col-lg-4 col-md-6 col-sm-12 mb-3">
        <div className='card_pro w-100 p-2'>
          <div className='div_img' >
            <img src={photo_css} alt='' className='w-100 h-100'/>
          </div>
          <div className='d-flex flex-column'>
            <p className='m-0 p-0'>Game Showcase Website</p>
            <p className='m-0 p-0'>A fun and responsive web page built using pure HTML and CSS to display a collection of exciting games. Designed with a playful layout and vibrant visuals, the project offers an engaging user experience that works smoothly across all screen sizes</p>
            <p className='m-0 p-0'>HTML,CSS & Bootstrap</p>
            <div className='icons_pro flex'>
              <a href="https://elmostcher1.github.io/_css/" >
              <span>Visit WebSite</span>
              <HiExternalLink /></a>
          </div>

          </div>
        </div>
      </div>
      <div className="  col-lg-4 col-md-6 col-sm-12 mb-3">
        <div className='card_pro w-100 p-2'>
          <div className='div_img' >
            <img src={photo_js} alt='' className='w-100 h-100'/>
          </div>
          <div className='d-flex flex-column'>
            <p className='m-0 p-0'>Static Product Showcase</p>
            <p className='m-0 p-0'>A clean and responsive web application built with HTML, CSS, and JavaScript. This project showcases a variety of products using smooth interactions, modern layout techniques, and dynamic visual effects to enhance user engagement and browsing experience.</p>
            <p className='m-0 p-0'>HTML,CSS,JS & Bootstrap</p>
            <div className='icons_pro flex'>
             <a href="https://elmostcher1.github.io/pro__js/" >
              <span>Visit WebSite</span>
              <HiExternalLink /></a>
          </div>

          </div>
        </div>
      </div>
      <div className="  col-lg-4 col-md-6 col-sm-12 mb-3">
        <div className='card_pro w-100 p-2'>
          <div className='div_img' >
            <img src={photo_css_2} alt='' className='w-100 h-100'/>
          </div>
          <div className='d-flex flex-column'>
            <p className='m-0 p-0'>Simple Personal Web Page</p>
            <p className='m-0 p-0'>A clean and responsive web page built with pure HTML and CSS, featuring a stylish layout and a beautiful portrait image. The project focuses on visual appeal, smooth structure, and elegant design optimized for all screen sizes</p>
            <p className='m-0 p-0'>HTML,CSS & Bootstrap</p>
            <div className='icons_pro flex'>
              <a href="https://elmostcher1.github.io/Project_6/" >
              <span>Visit WebSite</span>
              <HiExternalLink /></a>
          </div>

          </div>
        </div>
      </div>
      <div className="  col-lg-4 col-md-6 col-sm-12 mb-3">
        <div className='card_pro w-100 p-2'>
          <div className='div_img' >
            <img src={photo_css_3} alt='' className='w-100 h-100'/>
          </div>
          <div className='d-flex flex-column'>
            <p className='m-0 p-0'>Car Showcase Website</p>
            <p className='m-0 p-0'>A sleek and responsive car display website built with pure HTML and CSS. Featuring modern design elements and a structured layout, this project highlights various car models with a focus on clean visuals and smooth user experience across all devices.</p>
            <p className='m-0 p-0'>HTML,CSS & Bootstrap</p>
            <div className='icons_pro flex'>
             <a href="https://elmostcher1.github.io/Project_5/" >
              <span>Visit WebSite</span>
              <HiExternalLink /></a>
          </div>

          </div>
        </div>
      </div>
      <div className="  col-lg-4 col-md-6 col-sm-12 mb-3">
        <div className='card_pro w-100 p-2'>
          <div className='div_img' >
            <img src={dash} alt='' className='w-100 h-100'/>
          </div>
          <div className='d-flex flex-column'>
            <p className='m-0 p-0'>Responsive Admin Dashboard</p>
            <p className='m-0 p-0'>A fully responsive and modern admin dashboard built entirely with Bootstrap. The layout includes interactive components, clean UI sections, and a mobile-friendly design — making it ideal for managing data, analytics, or user interfaces with ease and efficiency.</p>
            <p className='m-0 p-0'>HTML,CSS & Bootstrap</p>
            <div className='icons_pro flex'>
              <a href="https://elmostcher1.github.io/DashBoard/" >
              <span>Visit WebSite</span>
              <HiExternalLink /></a>
          </div>

          </div>
        </div>
      </div>



 

      </div>
    </div>
  )
}
export default Portfolio
