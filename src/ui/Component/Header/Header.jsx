import React from 'react'
import "./Header.css"
import { NavLink } from 'react-router-dom'
import { AccountCircle } from '@mui/icons-material'

export default function Header() {
    return (
        <div className='header'>
            <div className='headerLeft'>
                <NavLink className="navlink" to={"/"}>
                    <img className='headerLogo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/863px-IMDB_Logo_2016.svg.png" alt="" />
                </NavLink>
                <NavLink className="navlink" to={"/movies/popular"}>
                    <span className='tab'>Popular</span>
                </NavLink>
                <NavLink className="navlink" to={"/movies/top_rated"}>
                    <span className='tab'>Top Rated</span>
                </NavLink>
                <NavLink className="navlink" to={"/movies/upcoming"}>
                    <span className='tab'>Upcoming</span>
                </NavLink>
            </div>
            <div className="headerRight">
                <NavLink className="navlink">
                    <AccountCircle fontSize='large'/>
                </NavLink>
            </div>
        </div>
    )
}
