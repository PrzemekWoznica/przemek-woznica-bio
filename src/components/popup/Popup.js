import React from 'react'
import './Popup.css'

function Popup(props) {
    return (
        <div className="popup">
            <button>X</button>
            <img src={props.image} alt=''/>
        </div>
    )
}

export default Popup
