import React, { useEffect, useState } from 'react'
import './Home.css'
import img from "../../../public/ahmed_pro_2.jpg"
import { FaRegHandPeace } from "react-icons/fa6";

function Home() {

  const texts = ["Web Developer", "Full-Stack Engineer"];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [forward, setForward] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (forward) {
        if (subIndex < texts[index].length) {
          setSubIndex(subIndex + 1);
        } else {
          setForward(false);
        }
      } else {
        if (subIndex > 0) {
          setSubIndex(subIndex - 1);
        } else {
          setForward(true);
          setIndex((index + 1) % texts.length);
        }
      }
    }, 200);

    return () => clearTimeout(timeout);
  }, [subIndex, forward, index]);

  return (
    <div className='header Home container' style={{ marginTop: '100px' }}>
      <div className='flex gap-5'>

        <div className='d-flex flex-column detalis_home animate__animated animate__fadeInLeft'>
          <p className='m-0 p-0'>Hello World , I 'm </p>
          <h1>Ahmed Mohamed</h1>

          <div className="text-wrapper">
            <span className="animated-text" >
              {texts[index].substring(0, subIndex)}
            </span>
          </div>
          <div className='d-flex algin-items-center gap-2 '>
          <p className='m-0 p-0'>Welcome to My personal website. </p>
          <span className='icons_hand'><FaRegHandPeace /></span>
          </div>
        </div>

        <div className='card_img animate__animated  animate__fadeInRight' style={{width : '300px' , height : '300px'}} >
          <img src={img} alt="" className='w-100 h-100 _img'/>
        </div>
      </div>
    </div>
  )
}

export default Home