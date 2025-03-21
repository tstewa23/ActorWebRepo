import React from 'react';

const EntryInput = () => {
    return (
        <>
            <h2>EntryInput</h2>
            <form id="dataForm">
                <input
                    style={{ backgroundColor: 'white', color: 'black' }}
                    type="text" id="name"
                    placeholder="Enter your name"
                    required
                />
                <input
                    style={{ backgroundColor: 'white', color: 'black' }}
                    type="text" id="actor"
                    placeholder="Enter your Actor"
                    required
                />
                <input
                    style={{ backgroundColor: 'white', color: 'black' }}
                    type="text" id="connection"
                    placeholder="Enter the connection"
                    required
                />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default EntryInput;