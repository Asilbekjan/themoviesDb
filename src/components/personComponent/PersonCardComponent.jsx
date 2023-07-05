import React from 'react'
import { cantentUrl } from '../../repozitory/repozitory'
import { Link } from 'react-router-dom'
import '../personComponent/personCardComponent.css'

export default function PersonCardComponent(props) {
    return (
      // <p>hello world</p>
        <div>
           <div className='row d-flex'>
          {
            (props.peopleList.results)
            &&
            (
             props.peopleList.results.map((item , index) => {
               return(
                   <div key={index} className='peple_card_component '>
                       <div className="card  ">
                           <img src={cantentUrl + item.profile_path} alt={item.name}  />
                           <Link to={`/person/${item.name}`} className='text-decoration-none text-dark'>
                               <p className='description'>{item.name}</p>
                           </Link>
                          
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
