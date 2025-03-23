import React from 'react';
import './textbox.css'

const Rules = () => {
    return (
        <div className="textbox rules">
            <h2>Rules</h2>
            <ul>
                <p>-You have to use the cast lists on google</p>
                <p>-Even if you know someone is in a movie, they have to be on the google list to count</p>
                <p>-You can't google anyone except for the last link of the chain</p>
                <p>-You can't peak and see what the person you are going to pick is in</p>
                <p>ex: You google Steve Carrel and see he is in The Office. You can see the list including Rain Wilson and John Krisinski but you can't click on their of them to check what they are in</p>
                <p>-You can't google the final person to see what they are in</p>
                <p>-You can have repeats but you have to connect back to them</p>
            </ul>
        </div>
    )
}

export default Rules;