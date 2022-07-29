import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { Flip, Fade } from 'react-reveal'
import Banner from '../../Components/Banner'
import Counter from '../../Components/Counter'
import MyButton from '../../Components/MyButton'
import '../../Pages/Contact_Page/contact_page.css'
import Card_slider from 'react-slick'
import slider1 from '../../images/instructor_slide1.jpg'
import slider2 from '../../images/instructor_slide2.png'
import slider3 from '../../images/instructor_slide3.jpg'

const Contact = () => {
   

    const settings = {
        dots: false,
        arrows: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                }
            },
        ]
    }

    return (
        <div className="contact_page">

            <Banner
                banner_name="Contact"
                banner_subtext="Lorem ipsum, dolor sit amet consectm illum natus modi obcaecati, totam quasi quisquam culpa ullam est delectus. Est quo optio perferendis incidunt ex?"
                button_text_common="Contact Us"
            />

            <div className="instructor_slider">
                <Container>
                    <Card_slider {...settings}  >
                        <div className="instructer_slide">
                            <div className="instructer_slide_block">
                                <div className="inst_image">
                                    <img src={slider1} alt="slider1" />
                                </div>
                                <div className="inst_info">
                                    <p>“I’m proud to wake up knowing my work is helping people around the world improve their careers and build great things. While being a full-time instructor is hard work, it lets you work when, where, and how you want.”</p>
                                    <h3>Frank Kane</h3>
                                    <span>Data Science & IT Certifications</span>
                                </div>
                            </div>
                        </div>
                        <div className="instructer_slide">
                            <div className="instructer_slide_block">
                                <div className="inst_image">
                                    <img src={slider2} alt="slider2" />
                                </div>
                                <div className="inst_info">
                                    <p>“Teaching on Udemy has provided me with two important elements: the opportunity to reach more learners than I ever would be able to on my own and a steady stream of extra income.”</p>
                                    <h3>Deborah Grayson Riege</h3>
                                    <span>Leadership, Communication</span>
                                </div>
                            </div>

                        </div>
                        <div className="instructer_slide">
                            <div className="instructer_slide_block">
                                <div className="inst_image">
                                    <img src={slider3} alt="slider3" />
                                </div>
                                <div className="inst_info">
                                    <p>“I’m proud to wake up knowing my work is helping people around the world improve their careers and build great things. While being a full-time instructor is hard work, it lets you work when, where, and how you want.”</p>
                                    <h3>Paulo Dichone</h3>
                                    <span>Developer (Android Speciality)</span>
                                </div>
                            </div>
                        </div>
                    </Card_slider>
                </Container>
            </div>

            <div className="become_instructor_section">
                <Container>
                    <div className="instructor_block">
                        <Fade bottom>
                            <h3>Become an instructor today</h3>
                            <p>Join one of the world’s largest online learning marketplaces.</p>
                            <Flip top>
                                <MyButton button_text="Get Started" />
                            </Flip>
                        </Fade>
                    </div>
                </Container>
            </div>

            <Counter />

        </div>
    )
}

export default Contact
