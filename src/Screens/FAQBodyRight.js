import React from 'react'
import './FAQBodyRight.css'
import ThumbUpRoundedIcon from '@material-ui/icons/ThumbUpRounded';
import ThumbDownRoundedIcon from '@material-ui/icons/ThumbDownRounded';

function FAQBodyRight() {
    return (
        <div className="faqBodyRight">
            <div className="faqBodyRight_body">
                <h1>Information related to the coronavirus epidemic (COVID-19)</h1>
                <div className="faqBodyRight_text">
                    <h3>We are closely monitoring the global health situation in order to take the necessary measures according to its development.</h3>
                    <div className="warning">
                        <h3>Delhi lockdown extended till May 3rd after the spike in Covid cases. We remind our members to check the local travel guidelines and respect the measures. Official travel guidelines can be found on the government's websites.</h3>
                    </div>
                    <div className="instruction">
                        <h3 className="inst_text">Some instruction that you have to keep in mind while riding</h3>
                        <h3 className="points">Keep your vehicle clean and disinfect it before and after driving </h3>
                        <h3 className="points">Not travelling in case of symptoms </h3>
                        <h3 className="points">Wearing a mask at all times </h3>
                        <h3 className="points">Not shaking hands</h3>
                        <h3 className="points">Keeping a safe distance</h3>


                    </div>
                    <div className="input_text">
                        <h3>Was this article helpful?</h3>
                        <div className="input_icons">
                          <ThumbUpRoundedIcon className="thumbsUp"/>
                           <ThumbDownRoundedIcon className="thumbsDown"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQBodyRight
