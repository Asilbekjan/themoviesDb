import React from 'react'
import { Link } from 'react-router-dom'
import {cantentUrl} from '../../repozitory/repozitory.js'
import "../movie/ContebtCard.css"
export default function Contentcard(props) {
  return (
    <div className='row d-flex'>
      {
        (props.movieList)
        &&
        (
         props.movieList.map((item , index) => {
           return(
               <div key={index} className='content-card-component  '>
                   <div className="card main_card">
                       <img src={cantentUrl + item.poster_path} alt={item.title}  />
                       <Link to={`/movie-info/${item.id}`} className='text-decoration-none text-black'>
                           <p className='description'>{item.title}</p>
                       </Link>
                       <p className='desciription_1'>{item.release_date}</p>
                   </div>
               </div>
           )
       })
        )
      }
    </div>
  )
}
