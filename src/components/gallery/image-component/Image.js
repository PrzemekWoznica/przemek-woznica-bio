import React, { useState } from 'react'
import './Image.css'
import Popup from '../../popup/Popup'

function Image(props) {
    const [popup, setPopup] = useState(false)

    return (
        <>
            <img className='image' src={props.src} alt={props.alt} onClick={() => {setPopup(true)}}/>
            <Popup image={props.src} trigger={popup} close={setPopup} />
        </>
    )
}

export default Image
