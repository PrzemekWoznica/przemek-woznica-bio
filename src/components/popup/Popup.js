import React from 'react'
import './Popup.css'

function Popup(props) {
    return props.trigger ? (
        <div className="popup" onClick={() => {props.close(false)}}>
            <img src={props.image} alt='' />
        </div>
    ) : ("")
}

export default Popup
