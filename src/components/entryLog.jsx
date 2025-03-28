import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import './entry.css'


const EntryLog = () => {
    const [data, setData] = useState([])
    const [count, setCount] = useState(0)

    async function fetchData() {
        try {
            const response = await fetch('https://my-express-api-tstewa23.onrender.com/data');
            const data = await response.json();
            setData(data);
            setCount(data.length)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        const socket = io("https://my-express-api-tstewa23.onrender.com")
        socket.on("connect", () => {
            fetchData();
        });
        socket.on("newEntry", () => {
            fetchData();
        });
        socket.on("newDelete", () => {
            fetchData();
        });
        return () => socket.disconnect();
    }, []);

    return (
        <section className='log box'>
            <h3>Connections so far:</h3>
            <p>count: {count}</p>
            <section className='tableWrap'>
                <table className="result-table">
                    <thead>
                        {/* <tr>
                            <th>Name</th>
                            <th>Actor</th>
                            <th>Connection</th>
                        </tr> */}
                    </thead>
                    <tbody id="dataTable">
                        {data.length === 0 ? (
                            <tr><td colSpan="3">No data available</td></tr>
                        ) : data.map((item, index) => (
                            <tr className='rowFlex' key={index}>
                                <td className='username'>{item.name}:</td><td>{item.actor} in</td><td>{item.connection}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </section>
    )
}

export default EntryLog;