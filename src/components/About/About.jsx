import React, { useEffect } from 'react'
import './About.css' 
import img from "../../../public/ahmed_pro_2.jpg"
import { Link, Outlet } from 'react-router-dom'


function About() {
  return (
    <div className='About container flex flex-column' style={{marginTop : '50px'}}>
      
<div className='big_card py-5 px-3 animate__animated animate__fadeInUp' > 
  <div className='d-flex'>
         <h2 className='text_line_ '>About Me </h2> 
<span>______________</span>
  </div>
<div className='detalis_about flex gap-3 mt-4'>
<div className='card_img animate__animated  animate__fadeInUp' style={{width : '50%' , height : '300px'}} >
                  <img src={img} alt="" className='w-100 h-100'/>
</div>
<div className='text_ d-flex flex-column gap-3 animate__animated animate__slideInRight'>
<p className='p-0 m-0'><span>__</span>Hi everyone! My name is <b style={{color : 'var(--main-color)' , fontWeight : '300'}}>Ahmed Mohamed</b>, and I’m a passionate Front-End Web Developer.
I have one year of hands-on experience building modern, responsive websites using HTML, CSS, JavaScript, Bootstrap, and React. My professional journey began with an internship at Bravo Company, where I gained valuable real-world experience working on projects and collaborating within a team. This helped me develop both my technical and practical skills.</p>
<p className='p-0 m-0'><span>__</span>After that, I enhanced my skills through self-learning from top online instructors such as
Elzero Web School and Abdelrahman Gamal. These courses gave me a deeper understanding of writing clean code and designing user-friendly interfaces, enabling me to create projects that are not only functional but also visually appealing and easy to use.</p>
</div>

</div>

</div>



<div className="skills mt-4"  style={{width : '80%'}}>
<h3 className='text_line'>Skills</h3>

<div className='detalis mt-3'>

  <div className='div_button flex justify-content-start gap-1'>
  <Link to={'about'} className='btn'>Tech stock</Link>
  <Link to={'tools'} className='btn'>Tools</Link>
  </div>

<Outlet />

</div>


</div>

    </div>
  )
}
export default About
