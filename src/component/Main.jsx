'use client'
import Image from "next/image";
import defaultImg from "../app/assets/default.jpg";
import newImage from "../app/assets/newImage.png";
import { BsMagic } from 'react-icons/bs';
import { useState, useRef } from 'react';
import { httpAgentOptions } from "../../next.config";


const Main = () => {
  
 

  return (
    <div className="main">
          
      <Image
        src={defaultImg} // Corrected relative path with a leading slash
        alt="Description of your image"
        width={512}
        height={512}
        className='ai-img'
      />

      <div className="prompt">

        <input 
        type="text" 
        name="prompt-bar" 
        id="promptBar" 
        placeholder="write your prompt here..." 
        />

        <button className="btn"><BsMagic />Generate</button>
      </div>
    </div>



  )
}

export default Main