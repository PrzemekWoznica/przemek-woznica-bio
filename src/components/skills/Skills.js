import React from 'react'
import './Skills.css'

function Skills() {
    return (
        <section className='skills' id='skills'>
            <div className='data-container'>
                <h1 className='header'>These are tools I know</h1>
                <ol className='primary-list'>
                    <li>
                        <p className='list-header'>Frontend</p>
                        <ul className='secondary-list'>
                            <li>HTML, CSS, JS</li>
                            <li>React framework</li>
                        </ul>
                    </li>

                    <li>
                        <p className='list-header'>Backend</p>
                        <ul className='secondary-list'>
                            <li>Java</li>
                            <li>Spring framework</li>
                        </ul>
                    </li>

                    <li>
                        <p className='list-header'>Testing</p>
                        <ul className='secondary-list'>
                            <li>JUnit</li>
                            <li>Mockito</li>
                            <li>Postman</li>
                        </ul>
                    </li>

                    <li>
                        <p className='list-header'>Cloud services</p>
                        <ul className='secondary-list'>
                            <li>AWS (compute units, databases, storages, authentication)</li>
                            <li>Google</li>
                        </ul>
                    </li>

                    <li>
                        <p className='list-header'>Special tools</p>
                        <ul className='secondary-list'>
                            <li>Docker</li>
                            <li>Git</li>
                        </ul>
                    </li>

                </ol>
            </div>
        </section>
    )
}

export default Skills