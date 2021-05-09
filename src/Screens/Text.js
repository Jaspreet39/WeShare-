import React from 'react'
import Feed from './Feed'
import './Text.css'

function Text() {
    return (
        <div className="text">
            <div className="text_heading">
                <h1>Go literally anywhere.from anywhere.</h1>
            </div>
            <div className="text_feed">
                <Feed title="Smart" description="With access to millions of journeys, you can quickly find people nearby travelling your way."/>
                <Feed title="Simple" description="Enter your exact address to find the perfect ride. Choose who you’d like to travel with. And book!"/>
                <Feed title="Seamless" description="Get to your exact destination, without the hassle. No queues. No waiting around."/>
            </div>
        </div>
    )
}

export default Text
