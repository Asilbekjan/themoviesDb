import React, { useEffect, useState } from 'react'
import '../twshowpage/tvshow.css'
import Tvshowcomponent from '../../components/twshow_component/tvshow_component'
import TvshovContentComponent from '../../components/twshow_component/tvshow_content_component'
import tvshow from '../../repozitory/twShow'
import { useParams } from 'react-router-dom'
import FilterComponent from '../../components/movie/FilterComponent'


export default function TwShow() {
    const {title} = useParams()
    const[twshovList,setTwshovList]=useState([])
    const[loading,setLoading]=useState(false)

    async function getTwshowByName(title){
        setLoading(true)
        const currentTvshows = await tvshow.getTwshowByName(title)
        setTwshovList(currentTvshows.results)
        setLoading(false)
    }
    console.log(twshovList);
    useEffect(()=>{
        getTwshowByName(title)
    },[title])
  return (
    <div className='row'>
        <div className="col-3">
            <FilterComponent/>
        </div>
        <div className="col-9">
           {
                             (loading) ?
                             <div className="spinner">
                             <div className="spinner-border text-success" role="status">
                                 <span className="visually-hidden">Loading...</span>
                             </div>
                             </div>
                             :
                             <Tvshowcomponent twshovList={twshovList}/>
           } 
        </div>
    </div>
  )
}
