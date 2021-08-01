import React from 'react'
import './Gallery.css'

function gallery(props) {
    return (
        <section className="gallery" id="gallery">
            {props.children}
        </section>
    )
}

export default gallery
