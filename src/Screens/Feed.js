import React from 'react'
import './Feed.css'

function Feed({title, description}) {
    return (
        <div className="feed">
            <h3 className="feed_title">{title}</h3>
            <h3 className="feed_description">{description}</h3>
        </div>
    )
}

export default Feed
