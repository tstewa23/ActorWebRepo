import React, { useState, useEffect } from 'react';
import './entry.css'

const LogHeader = () => {

    const [actor1, setActor1] = useState('actor1')
    const [actor2, setActor2] = useState('actor2')
    const [formDisplay, setFormDisplay] = useState('block')
    const [headerDisplay, setHeaderDisplay] = useState('none')

    return (
        <section className='textbox actors'>
            <h2 style={{ display: headerDisplay }}> {actor1} to {actor2}
                {/* <button className='headerButton' onClick={() => {
                    setFormDisplay('block')
                    setHeaderDisplay('none')
                }}>X</button> */}
            </h2>
            <form style={{ display: formDisplay }} onSubmit={(e) => {
                e.preventDefault()

                setFormDisplay('none')
                setHeaderDisplay('block')
            }}>
                <label> Actor1: </label>
                <input className="enter uno" type="text"
                    onChange={(e) => {
                        setActor1(e.target.value)
                    }}
                />
                <label> Actor2: </label>
                <input className='enter dos' type="text"
                    onChange={(e) => {
                        setActor2(e.target.value)
                    }}
                />
                <input type="submit" />
            </form>
        </section>
    )
}

export default LogHeader;