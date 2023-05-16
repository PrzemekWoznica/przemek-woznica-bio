import React from 'react'
import './Photos.css'
import elegant from '../../images/elegant.jpg'
import incognito from '../../images/incognito.jpeg'
import old from '../../images/old.jpg'
import sleepy from '../../images/sleepy.jpg'

function Photos() {

    return (
        <section className='photos' id='photos'>
            <div className='data-container'>
                <div className='photos-container'>
                    <img src={elegant} alt='elegant'/>
                    <img src={incognito} alt='incognito'/>
                    <img src={old} alt='old'/>
                    <img src={sleepy} alt='sleepy'/>
                </div>
            </div>
        </section>
    )
}

export default Photos