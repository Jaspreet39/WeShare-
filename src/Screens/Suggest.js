import React from 'react'
import './Suggest.css'
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';

function Suggest() {
    return (
        <div className="suggest">
            <EmojiPeopleIcon size={50}/>
            <div className="suggest_text">
                <h3>
                    Rides close to you
                </h3>
                <h4>Now you see which drivers pick you up and drop you off nearby.</h4>
            </div>
        </div>
    )
}

export default Suggest
