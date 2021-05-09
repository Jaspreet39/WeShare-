import React from 'react'
import './FAQBodyLeft.css'
function FAQBodyLeft() {
    return (
        <div className="faqBodyLeft">
            <div className="faqBodyLeft_text">
                <h2 className="account">Your Account</h2>
                <hr/>
                <h2 className="intro">About weshare</h2>
                <h3>How WeShare works</h3>
                <div className="covid_precaution">
                    <h3>Community Standards</h3>
                    <div className="covid_precaution_text">
                    <span>
                        Information related to the coronavirus epidemic (COVID-19)
                    </span>
                    <h4>How do i stay safe on the road?</h4>
                    <h4>How can i trust another number?</h4>
                    <h4>A community built on trust</h4>
                    </div>
                </div>
                <hr/>
                <h2 className="options">Trust / Safety & Accessibility</h2>
            </div>
           
            
        </div>
    )
}

export default FAQBodyLeft
