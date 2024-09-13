import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';





const Travel = (props) => {
  return (
    <div className='flex flex-col items-center h-11/12 md:h-5/6 w-10/12 space-y-4  md:flex-row md:space-x-5 mb-8'>
        <img src={props.image} className=' w-screen pt-8 md:w-60 md:h-80 '  alt="" />
      <div>
        <div className='flex items-center  space-x-2 pb-3'>
         <FontAwesomeIcon icon={faMapMarkerAlt} className='text-1xl text-red'/>
            <p className='text-1xl font-semibold'>{props.name}</p>
            <a href={props.url} className='text-1xl text-[#918E9B] underline'>View on google maps</a>
        </div>
        <h1 className='font-bold text-left text-3xl font-grotesk  md:text-4xl pb-3 '>
            {props.heading}
        </h1>
        <p className='font-bold pb-3 text-xl text-left'>
            {props.date}
        </p>
        <p className='subpixel-antialiased font-normal text-left text-lg'>
            {props.text}
        </p>
      </div>
      
    </div> 
    
  )
}

export default Travel
