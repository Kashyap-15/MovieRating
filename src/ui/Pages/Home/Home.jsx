import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Home.css"
import { Carousel } from 'react-responsive-carousel';
import { NavLink } from 'react-router-dom';
import { Star } from '@mui/icons-material';
import MovieCard from '../../Component/MovieCard/MovieCard';
import MovieList from '../../Component/MovieList/MovieList';

export default function Home() {
    const [popularMovies, setPopularMovies] = useState([])
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
            .then((res) => res.json())
            .then(data => setPopularMovies(data.results))
    }, [])
    return (
        <div className='Home'>
            <Carousel
                showThumbs={false}
                autoPlay={true}
                transitionTime={3}
                infiniteLoop={true}
                showStatus={false}
            >
                {
                    popularMovies.map((movie, i) => {
                        return (
                            <NavLink key={i} style={{ textDecoration: "none", color: "white" }} to={`/movie/${movie.id}`}>
                                <div className="moviePoster">
                                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="Movie Poster" className='movieImg' />
                                    <div className="movieDetails">
                                        <div className="movieTitle">{movie ? movie.original_title : ""}</div>
                                        <div className="movieRelease">
                                            <div className='movieDate'>
                                                {movie ? movie.release_date : ""}
                                            </div>
                                            <div className='movieRating'>
                                                <span>{movie ? movie.vote_average : ""}</span>
                                                <span><Star /></span>
                                            </div>
                                        </div>
                                        <div className="movieDescription">
                                            {movie ? movie.overview : ""}
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        )
                    })
                }
            </Carousel>
            <MovieList />
        </div>
    )
}
