import React from 'react'
import './Apps.css'

function Apps() {
    return (
        <section className='apps' id='apps'>
            <div className='apps-content'>
                <h3>Check out my apps</h3>
                <a href='https://przemek-pets.herokuapp.com/' target='_blank' rel="noreferrer">Pets images</a>
                <a href='https://przemek-todos.herokuapp.com/' target='_blank' rel="noreferrer">Todo App</a>
                <a href='https://github.com/PrzemekWoznica' target='_blank' rel="noreferrer">My Github</a>
            </div>
        </section>
    )
}

export default Apps
