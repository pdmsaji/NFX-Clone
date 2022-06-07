
import React, { useEffect, useState } from 'react';
import {API_KEY,imageUrl} from '../../Constants/Constants';
import "./BannerCss.css";
// import RowPost from '../RowPost/RowPost';
import axios from "../../axios";



function Banner({data}) {
  // console.log("imported row",RowPost.bannerimg)
  console.log("dataaaaa",data)
  const [movie, setMovie] = useState()


  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then(
        (response)=> {
            setMovie(response.data.results[12])
            console.log(response.data.results[12]);
        }
    )
  
    
  }, [])
  

  return (
    <div 
    style={{backgroundImage:`url( ${movie? imageUrl+movie.backdrop_path:''})`}}
    className='banner' >

        <div className='content' >
            <h1 className='title'>{data}</h1> 
            <h1 className='title'> {movie ? movie.title: ''}</h1>
              <div className='banner_buttons' >
                  <button className='button' > Play</button>
                  <button className='button' > My List</button>

              </div>
             <h1 className='description'>{movie ? movie.overview:''}</h1>


        </div>
        <div className='fade_bottom' >

        </div>




    </div>
  )
}

export default Banner