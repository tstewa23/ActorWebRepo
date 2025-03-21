import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

const EntryLog = () => {
    const [data, setData] = useState([])

    async function fetchData() {
        try {
            const response = await fetch('https://my-express-api-tstewa23.onrender.com/data');
            const data = await response.json();
            setData(data);
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
        <>
            <h2>Entry Log</h2>
            <table style={{ width: '100%' }} border='1'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Actor</th>
                        <th>Connection</th>
                    </tr>
                </thead>
                <tbody id="dataTable">
                    {data.length === 0 ? (
                        <tr><td colSpan="3">No data available</td></tr>
                    ) : data.map(item => (
                        <tr>
                            <td>{item.name}</td><td>{item.actor}</td><td>{item.connection}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default EntryLog;