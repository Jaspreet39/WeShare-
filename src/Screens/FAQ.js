import React from 'react'
import './FAQ.css'
import FAQBodyLeft from './FAQBodyLeft'
import FAQBodyRight from './FAQBodyRight'
import Header from './Header'

function FAQ() {
    return (
        <div className="faq">
            <Header/>
            <hr/>
            <div className="faq_body">
                <FAQBodyLeft/>
                <FAQBodyRight/>
            </div>
        </div>
    )
}

export default FAQ
