import React from 'react'
import Like from './like.png'
import NasaLogo from './nasa.png'


const Header = (props) => {
    const {numberOfLikes, likeApp} = props

    return (
        <HeaderTag>
            <div>
                <a href='https://en.wikipedia.org/wiki/NASA'><img id='nasa-logo' alt='nasa-logo' src='NasaLogo' /></a>
            </div>

            <div className='app-title'>
                <h1>Welcome to Nasa's photo of the day!</h1>
                <p>By: David M Hall</p>
            </div>

            <div className='likeButton'>
                <img onClick = {likeApp} id='like-logo' alt='like-logo' src='Like' />
            </div>
        </HeaderTag>
    )
}