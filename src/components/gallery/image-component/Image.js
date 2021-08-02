import React from 'react'
import './Image.css'

function Image(props) {

    return (
        <>
            <img className='image' src={props.src} alt={props.alt} 
            onClick={() => {
                props.selectImage();
                props.triggerOnClick();
            }}/>
        </>
    )
}

export default Image
