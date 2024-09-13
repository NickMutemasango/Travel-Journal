import React from 'react'
import Travel from '../components/Travel'
import one from '../img/fuji.svg'
import sydney from '../img/sydney.svg'
import geira from '../img/geira.svg'

const index = () => {
  return (
    <div className='flex flex-col items-center'>
       <Travel 

     name='JAPAN'
     image={one}
     link='View on Google Maps'
     heading='Mount Fuji' 
     date='12 Jan, 2021 - 24 Jan, 2021' 
     text='Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). 
           Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.'
           url='https://www.google.com/maps/about/behind-the-scenes/streetview/treks/mount-fuji/'
      />
     
    <Travel 

     name='AUSTRALIA' 
     image={sydney}
     link='View on Google Maps'
     heading='Sydney Opera House' 
     date='27 May, 2021 - 8 Jun, 2021' 
     text='The Sydney Opera House is a multi-venue 
           performing arts center in Sydney. Located on the banks 
           of the Sydney Barbour, it is often regarded as one of the 20th 
           century most famous and distinctive buildings'/>

    <Travel 
    image={geira}
      name='NORWAY' 
     link='View on Google Maps'
     heading='Geirangerfjord' 
     date='01 Oct, 2021 - 18 Nov, 2021' 
     text='The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.'/> 
    </div>
  )
}

export default index
