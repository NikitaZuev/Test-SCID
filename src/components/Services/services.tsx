import React, { useState } from 'react'
import {muchService} from '../../moks/offer'
import {services} from '../../types/moks'
type Props = {
  
}

function Services({}: Props) {
  const [limit,setLimit] = useState(6)
  const changeBtn = (Name: string)=>{

    if( limit == 6){
      return Name = "Все услуги";
    }
    else{
      return Name = "Свернуть";
    }
  }
  return (

    <div className='sevices__boxes'>
      <h1>Наши услуги</h1>
      <div className='service__items'>
        {muchService.slice(0,limit).map( (post: any)=>
          <div key={post.id} className="service__item">
            <img src={post.image} alt="" />
            <a href={post.id}>{post.title}</a>
          </div>
        )}
      </div>
      <div className='btn__box'>
        <button className='btn' onClick={()=> limit == 6 ? setLimit(muchService.length) : setLimit(6)}>{changeBtn(" ")}</button>
      </div>
    </div>

  )
}

export default Services