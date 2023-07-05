import React from 'react'
import Tvshow_content_component from './tvshow_content_component'

export default function Tvshow_component(props) {
  return (
    <div>
       <Tvshow_content_component twshovList={props.twshovList}/>
    </div>
  )
}
