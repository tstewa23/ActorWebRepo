import React from 'react';
import './entry.css'

const EntryReset = () => {
    const resetDB = async () => {

        try {
            const response = await fetch('https://my-express-api-tstewa23.onrender.com/delete', {
                method: 'DELETE',
            });

            const result = await response.json();

            console.log(result.message)
        }
        catch (error) {
            console.error("DELETE error:", error)
        }

    }

    return (
        <section className='reset'>
            <p id="responseMessage"></p>
            <button onClick={resetDB} id="myButton">Reset</button>
        </section>
    )
}

export default EntryReset;