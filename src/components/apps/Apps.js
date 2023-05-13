import React from 'react'
import './Apps.css'

function Apps() {



    return (
        <section className='apps' id='apps'>
            <div className='data-container'>
                <h1 className='header'>Check out my links</h1>
                <a className='link' href='https://przemekwoznica.github.io/pets/' target='_blank' rel="noreferrer">Pets images</a>
                <a className='link' href='https://github.com/PrzemekWoznica' target='_blank' rel="noreferrer">My Github</a>
            </div>
        </section>
    )
}

export default Apps
