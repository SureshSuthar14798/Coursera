import React, { useState } from 'react'
import { Container, Fade } from 'react-bootstrap'
import Banner from '../../Components/Banner'
import '../../Pages/Feedback_page/feedback_page.css'
import earth from '../../images/earth.png'

const Feedback = () => {
    return (
        <div className="feedback_page">
            <Banner
                banner_name="Our Vision" 
                banner_subtext="Consectm illum natus modi obcaecati, totam quasi quisquam culpa obcaecati, totam quasi quisquam culp ullam est delectus. Est quo optio perferendis incidunt ex?"
                button_text_common="Learn more"
            />
            <div className="user_section">
                <Container>
                    <div className="user_section_inner">
                        <div className="user_detail_box">
                            <h5 className='cm_section_title'>Learning that gets you</h5>
                            <p>Skills for your present (and your future). Get started with us.</p>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="earth_section">
                <Container>
                    <div className="earth_img">
                        <img src={earth} alt="earth"/>
                    </div>
                    <div className="earth_section_inner">
                        <h1 className='cm_section_title'>Our Vision</h1>
                        <p>As a mission-driven organization, we're relentlessly pursuing our vision of a world where every learner can access education to unlock their potential, without the barriers of cost or location.</p>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Feedback
