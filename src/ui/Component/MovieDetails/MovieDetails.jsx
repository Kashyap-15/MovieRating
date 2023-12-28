import React, { useEffect, useState } from 'react'
import "./MovieDetails.css"
import { useParams } from 'react-router-dom'
import { Movie, Star } from '@mui/icons-material'

export default function MovieDetails() {
  const [movie, setMovie] = useState([])
  const { id } = useParams()

  useEffect(() => {
    getdata()
  }, [])

  const getdata = () => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
      .then((res) => res.json())
      .then(data => setMovie(data))
  }

  return (
    <div className='MovieDetails'>
      <div className="movieDetailsBackdrop">
        <img className='movieDetailsBackdropImg' src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="Img Poster" />
        <div className="movieDetailsPosterDetails">
          <div className="movieTitle">
            {movie.original_title}
          </div>
          <div className="movieTagline">
            {movie.tagline}
          </div>
          <div className="movieRating">
            <span className='movieFlex'>
              {movie.vote_average}<span><Star /></span>
            </span>
            <div className='movieVoteCount'>
              ({movie.vote_count}) Votes
            </div>
          </div>
          <div className='movieRuntime'>
            {movie.runtime} Mins
          </div>
          <div className='movieReleaseDate'>
            Release Date : {movie.release_date}
          </div>
          <div className='movieGenre'>
             {movie?.genres?.map((ele,i)=>{
              return <div className='Com' key={i}>{ele.name}</div>
             })}
          </div>
        </div>
      </div>
        <div className="movieOverview">
          <div className="movieDetailsPoster">
            <img className='movieDetailsPosterImg' src={`https://image.tmdb.org/t/p/original${movie && movie.poster_path}`} alt="" />
          </div>
          <div className="movieDetailOverview">
            <h2>Synopsis</h2>
          {movie.overview}
          </div>
        </div>
        <div className='movieLinks'>
          <h2>Usefull Links : </h2>
          <h3><a target='new' href={movie.homepage}>HomePage</a></h3>
            <h3><a target='new' href={`https://www.imdb.com/title/${movie.imdb_id}`}>IMDB</a></h3>
        </div>
        {/* <div className='movieProduction'>
             {movie?.production_companies?.map((ele,i)=>{
              return <div className='MoviePCOm' key={i}>
                <img src={"https://image.tmdb.org/t/p/original" + `${ele ? ele?.logo_path : ""}`} alt="" />
                </div>
             })}
          </div> */}

    </div>
  )
}
