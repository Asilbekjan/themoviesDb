import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ContentListComponent from '../../components/movie/ContentListComponent'
import FilterComponent from '../../components/movie/FilterComponent'
import movie from '../../repozitory/movie'

export default function MovieList() {
    const { title} = useParams()
    const [movieList, setMovielist]=useState([])
    const [loading ,setLoading]=useState(false)

    async function getMoviesByName(title){
        setLoading(true)
        const currentmovies = await movie.getMoviesByName(title)
        setMovielist(currentmovies.results)
        setLoading(false)
    }
    // console.log(movieList);
    useEffect(()=>{
        getMoviesByName(title)
    },[title])
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <FilterComponent/>
                </div>
                <div className="col-md-9">
                    {
                        (loading) ?
                        <div className="spinner">
                        <div className="spinner-border text-success" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        </div>
                        :
                        <ContentListComponent movieList={movieList}/>
                    }
                </div>
            </div>
        </div>
    </div>
  )
}
