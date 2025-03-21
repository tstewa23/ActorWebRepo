import React from 'react';

const EntryLog = () => {
    return (
        <>
            <h2>Entry Log</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Actor</th>
                        <th>Connection</th>
                    </tr>
                </thead>
                <tbody id="dataTable">
                </tbody>
            </table>
        </>
    )
}

export default EntryLog;