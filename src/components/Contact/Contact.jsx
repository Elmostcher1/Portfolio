import React from 'react'
import './Contact.css' 
import { FaPhoneSquare } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


function Contact() {
  return (
    <div className='Contact container flex'>
      <div className='div_contact_sec flex gap-3' style={{marginTop : '50px' , padding : '30px' , borderRadius : '5px'}}>
    <section style={{background : '#111' , color : '#eee' , padding : '40px' ,textAlign : 'center' , borderRadius : '5px' }} className='sec_2'>
  <h4>Contact <span style={{color : "var(--main-color)"}}> Me</span></h4>
  <p style={{color : 'var(--text-con)'}}>
    Hey there 👋<br/>
    I'm currently running this project on my own, and every message means a lot to me.<br/>
    If you have any thoughts, ideas, or just want to share your opinion — I'm all ears.<br/><br/>
    I love connecting, listening, and learning from everyone.<br/>
    Feel free to reach out anytime ❤
  </p>
</section>
    
    <section style={{background : '#111' , color : 'style={{color : "var(--main-color)"}}' , padding : '40px' ,textAlign : 'center'  , borderRadius : '5px'}} className='sec_2 d-flex flex-column '>
      <div className="card_contact gap-2  flex">
        <div className='d-flex flex-column '> 
          <p className='m-0 p-0 ' style={{color : 'var(--text-con)'}} >PHONE</p>
          <p className='m-0 p-0 ' style={{color : 'var(--text-con)'}} >01150934473</p>
        </div>
        <div style={{color : "var(--main-color)"}}><FaPhoneSquare /></div>
      </div>
      <div className="card_contact gap-2 mt-4 flex">
        <div className='d-flex flex-column '> 
          <p className='m-0 p-0 ' style={{color : 'var(--text-con)'}} >ADDRESS</p>
          <p className='m-0 p-0 ' style={{color : 'var(--text-con)'}} >📍 Location: Zagazig, El-Sharqia, Egypt</p>
        </div>
        <div style={{color : "var(--main-color)"}}><FaLocationDot /></div>
      </div>
      <div className="card_contact gap-2 mt-4 flex">
        <div className='d-flex flex-column '> 
          <p className='m-0 p-0 ' style={{color : 'var(--text-con)'}} >EMAIL</p>
          <p className='m-0 p-0 p_email ' style={{color : 'var(--text-con)'}} >ahmedmohamed200571@gmail.om</p>
        </div>
        <div style={{color : "var(--main-color)"}}><MdAttachEmail /></div>
      </div>
      <div className="card_contact gap-2 mt-4 ">
 
        <div className='flex gap-3' style={{color : "var(--main-color)"}}>
          <a style={{color : "var(--main-color)"}} className='link_my_socail' href="https://www.facebook.com/share/1C4WMwhuHY/"><FaFacebookF /></a>
          <a style={{color : "var(--main-color)"}} className='link_my_socail' href="https://wa.me/qr/5OPLG5HSLMYKP1"><FaWhatsapp /></a>
          <a style={{color : "var(--main-color)"}} className='link_my_socail' href="https://www.instagram.com/a_h_m_e_d_7_1_?igsh=MWc4azZ0cjRyOXh6OA=="><FaInstagram /></a>
          </div>
      </div>
     </section>
      </div>
    </div>
  )
}
export default Contact
