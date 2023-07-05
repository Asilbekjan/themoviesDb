import React from 'react'
import Contentcard from './Contentcard'

export default function ContentListComponent(props) {
  return (
    <div>
      <Contentcard movieList={props.movieList}/>
    </div>
  )
}
