import React from 'react'
import PersonCardComponent from './PersonCardComponent'

export default function PersonComponent(props) {
  return (
    <div>
       <PersonCardComponent peopleList={props.peopleList}/>
    </div>
  )
}
