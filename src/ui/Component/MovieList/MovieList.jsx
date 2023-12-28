import React, { useEffect, useState } from 'react'
import "./MovieList.css"
import { useParams } from 'react-router-dom'
import MovieCard from '../MovieCard/MovieCard'

export default function MovieList() {
    const [movieList, setMovieList] = useState([])
    const { type } = useParams()

    useEffect(() => {
        getdata()
    }, [type])
  

    const getdata = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
            .then((res) => res.json())
            .then(data => setMovieList(data.results))
    }

    return (
        <div className='list'>
            <h2 className='listTitle'>
                {(type ? type : "POPULAR").toUpperCase()}
            </h2>
            <div className="listCard">
                {
                    movieList.map((movie,i)=>{
                        return <MovieCard key={i} movie={movie}/>
                    })
                }
            </div>
        </div>
    )
}
