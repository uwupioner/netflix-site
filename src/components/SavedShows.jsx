import React from 'react'
import {MdChevronLeft, MdChevronRight} from "react-icons/md"
import Movie from './Movie'
import { useState, useEffect } from 'react'
import axios from 'axios'


const SavedShows = ({fetchURL}) => {
    const [movies, setMovies] = useState([])

    
    useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results)
        })
    }, [fetchURL])


    const slideLeft = () => {
        var slider = document.getElementById("slider")
        slider.scrollLeft = slider.scrollLeft - 500;
    }
    const slideRight = () => {
        var slider = document.getElementById("slider")
        slider.scrollLeft = slider.scrollLeft + 500;
    }
  return (
    <div>
        <h2 className='text-white font-bold md:text-xl p-4'>My Shows</h2>
        <div className='relative flex items-center group'>
            <div id={"slider"} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
                {movies.map((item, id) => (
                    <Movie key={id} item={item}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default SavedShows