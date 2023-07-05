import React from 'react'
import { cantentUrl } from '../../repozitory/repozitory'

export default function movieinfoComponent(props) {
  return (
    <div className='row'>
      
        {
          (props.movieInfoList) && (props.movieInfoList.map((item,index)=>{
            return(
             <div key={index}  className="card">
               <img src= {cantentUrl + item.poster_path} alt={item.title}/>
             </div>
            )
          })
          )
          
        }
    </div>
  )
}
