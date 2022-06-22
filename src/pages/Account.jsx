import React from 'react'
import Row from '../components/Row'
import SavedShows from '../components/SavedShows'
import requests from '../Request'

const Account = () => {
  return (
    <div>
        <div className='w-full text-white'>
        <img className='w-full h-[400px] object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/c732cb00-be61-4d64-b8c3-99f022e7a123/95f72633-302d-4048-a070-ce5beeb8ce2e/UA-en-20220620-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="/" />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'>
            <div className='absolute top-[20%] p-4 md:p-8'>
                <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>
                <SavedShows fetchURL={requests.requestNow}/>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Account