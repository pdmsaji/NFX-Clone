import React,{useEffect,useState} from 'react';
import "./RowPostCss.css";
import axios from '../../axios';
import {imageUrl} from '../../Constants/Constants'
import Banner from '../Banner/Banner';

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [bannerimg, setBanner] = useState([]);
  <Banner movie={bannerimg} /> 
  
  const imageClick = (obj) => {
    console.log("inside func",obj);
    setBanner(obj)

  } 
 
   useEffect(() => {
     
    axios.get(props.url).then(

      response=>{console.log(response.data)
      setMovies(response.data.results)}
    );
   
   }, [props])
   
  
  return (
    <div className='row'>
        {/* <Banner data={bannerimg} /> */}
        <h2>{props.title}</h2>
        <div className='posters'>

          {movies.map(

            (obj)=> 
              <img onClick={() => imageClick(obj)} className={props.isSmall ? 'smallPoster': 'poster'} alt='poster' src={`${imageUrl+obj.backdrop_path}`}></img>
            
          )}
            
            

        </div>
        
    </div>
  )
}

export default RowPost