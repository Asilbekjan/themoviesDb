import React from 'react'
import { Link } from 'react-router-dom'
import {cantentUrl} from '../../repozitory/repozitory.js'

export default function Tvshow_content_component(props) {
  return (
    <div>
       <div className='row d-flex'>
      {
        (props.twshovList)
        &&
        (
         props.twshovList.map((item , index) => {
           return(
               <div key={index} className='content-card-component  '>
                   <div className="card main_card">
                       <img src={cantentUrl + item.poster_path} alt={item.title}  />
                       <Link to={`/movie-info/${item.id}`} className='text-decoration-none text-dark'>
                           <p className='description'>{item.name}</p>
                       </Link>
                       <p className='desciription_1'>{item.first_air_date}</p>
                   </div>
               </div>
           )
       })
        )
      }
    </div>
    </div>
  )
}
