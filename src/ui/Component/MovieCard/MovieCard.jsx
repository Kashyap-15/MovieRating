import React, { useEffect, useState } from 'react'
import "./MovieCard.css"
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css';
import { NavLink } from 'react-router-dom'
import { Star } from '@mui/icons-material'

export default function MovieCard({ movie }) {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1500)
    }, [])
    return (
        <>
            {
                loading ?
                    <div className='movieCard'>
                        <SkeletonTheme baseColor="#202020" highlightColor='#444'>
                            <Skeleton height={300} duration={2} />
                        </SkeletonTheme>
                    </div> :
                    <NavLink to={`/movie/${movie.id}`} style={{ textDecoration: "none", color: "white" }}>
                        <div className='movieCard'>
                            <img className='movieCardImg' src={`https://image.tmdb.org/t/p/original${movie && movie.poster_path}`} alt="Movie Poster" />
                            <div className="movieCardDetails">
                                <div className="movieCardTitle">{movie ? movie.original_title : ""}</div>
                                <div className="movieCardRelease">
                                    <div className='movieCardDate'>
                                        {movie ? movie.release_date : ""}
                                    </div>
                                    <div className='movieCardRating'>
                                        <span>{movie ? movie.vote_average : ""}</span>
                                        <span><Star fontSize='small' /></span>
                                    </div>
                                </div>
                                <div className="movieCardDescription">
                                    {movie ? movie.overview : ""}
                                </div>
                            </div>
                        </div>
                    </NavLink>
            }
        </>
    )
}
