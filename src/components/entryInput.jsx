import React, { useState } from 'react';
import './entry.css'

const EntryInput = () => {
    const [name, setName] = useState('');
    const [actor, setActor] = useState('');
    const [connection, setConnection] = useState('');

    const data = {
        name: name,
        actor: actor,
        connection: connection,
    };

    const sendEntry = async () => {
        try {
            const response = await fetch('https://my-express-api-tstewa23.onrender.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
            if (response.ok) {
                console.log('data sent')
                setName('');
                setActor('');
                setConnection('');
            } else {
                console.error('Response Error:', response.status)
            }
        } catch (error) {
            console.error('Error with request:', error)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        sendEntry();
    };


    return (
        <section className='input box'>
            <h2>Your Connection</h2>
            <form id="dataForm" onSubmit={handleSubmit}>
                <input
                    style={{ backgroundColor: 'white', color: 'black', height: "30px" }}
                    type="text"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value)
                    }}
                    id="name"
                    placeholder="Enter your name"
                    required
                />
                <input
                    style={{ backgroundColor: 'white', color: 'black', height: "30px" }}
                    type="text"
                    value={actor}
                    onChange={(e) => setActor(e.target.value)}
                    id="actor"
                    placeholder="Enter your Actor"
                    required
                />
                <input
                    style={{ backgroundColor: 'white', color: 'black', height: "30px" }}
                    type="text"
                    value={connection}
                    onChange={(e) => setConnection(e.target.value)}
                    id="connection"
                    placeholder="Enter the connection"
                    required
                />
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default EntryInput;