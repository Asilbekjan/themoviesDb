import React from 'react'
import '../header_page/header.css'

export default function Header() {
  return (
    <div>
         <div className='row'>
            <div className="col-12 position-relative">
                <img className='header_img position-relative' src="https://image.tmdb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/34OGjFEbHj0E3lE2w0iTUVq0CBz.jpg" alt="themoviesdb_header_img" />
                <h2 className='header_tittle'>Welcome.</h2>
                <p className='header_desciription'>Millions of movies, TV shows and people to discover. Explore now.</p>
            </div>
            <div className="col-8">
                <input className='header_search' type="text" placeholder='Searc for a movie,tv show,person '/>
            </div>
            <div className="col-2">
                <button className='header_button'>search</button>
            </div>
         </div>
    </div>
  )
}
