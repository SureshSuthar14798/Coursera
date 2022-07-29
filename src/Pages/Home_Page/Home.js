import './home_page.css';
import '../../index.css'
import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Banner from '../../Components/Banner'
import MyCard from '../../Components/MyCard';
import react_cover from '../../images/react_cover.png'
import html_cover from '../../images/html_cover.png'
import javascript_cover from '../../images/javascipt_cover.jpg'
import pythone_cover from '../../images/python.jpg'
import java_cover from '../../images/Java.jpg'
import php_cover from '../../images/php.png'
import angular_cover from '../../images/angular.png'
import perl_cover from '../../images/perl.jpg'
import go_cover from '../../images/golang-Programing.jpg'
import Slider from "react-slick"
import Fade from 'react-reveal/Fade'
import Instructor_banner from '../../Components/Instructor_banner'
import inst_img from '../../images/instructor.jpg'
import nasdaq_img from '../../images/company1.svg'
import wolkswegon from '../../images/company2.svg'
import box_img from '../../images/company3.svg'
import netflix from '../../images/company4.svg'
import evenbrit from '../../images/company5.svg'

const Home = () => {
    var settings = {
        dots: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
            breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    }
                },
            {
            breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    }
                },
            {
            breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                    }
                }
        ]
    };
    return (
        <div className="home_page">
            <Banner 
                banner_name="Home" 
                banner_subtext="Lorem ipsum, dolor sit amet consectm illum natus modi obcaecati, totam quasi quisquam culpa ullam est delectus. Est quo optio perferendis incidunt ex?"
                button_text_common="Let's Start"
            />
            <Container> 
                <div className="top_courses">
                    <Fade bottom>
                        <h2 className='cm_section_title'>Top Rated Course</h2>
                    </Fade>
                    <div className="top_course_cards">
                        <Slider {...settings}>
                            <MyCard 
                                card_title="Learn React" 
                                card_subtext="From Nishant sir" 
                                card_image={react_cover} 
                                rating="4.3" 
                                total_users="(55,480)"
                                btn_text="Add to cart"
                            />
                            <MyCard 
                                card_title="Learn HTML" 
                                card_subtext="From Sagar sir" 
                                card_image={html_cover} 
                                rating="4.5" 
                                total_users="(21,014)"
                                btn_text="Add to cart"
                            />

                            <MyCard 
                                card_title="Learn JavaScript" 
                                card_subtext="From Patil sir" 
                                card_image={javascript_cover} 
                                rating="4.4" 
                                total_users="(154,233)"
                                btn_text="Add to cart"
                            />
                            <MyCard 
                                card_title="Learn PHP" 
                                card_subtext="From Smith Jack" 
                                card_image={php_cover} 
                                rating="4.3" 
                                total_users="(55,480)"
                                btn_text="Add to cart"
                            />
                            <MyCard 
                                card_title="Java" 
                                card_subtext="From Lemo Star" 
                                card_image={java_cover} 
                                rating="4.5" 
                                total_users="(21,014)"
                                btn_text="Add to cart"
                            />
                            <MyCard 
                                card_title="Python" 
                                card_subtext="From Karl Gems" 
                                card_image={pythone_cover} 
                                rating="4.4" 
                                total_users="(154,233)"
                                btn_text="Add to cart"
                            />
                        </Slider>
                    </div>
                </div>

                <div className="best_courses">
                        <Fade bottom>
                            <h2 className='cm_section_title'>Best Free Course</h2>
                        </Fade>
                        <Fade>
                            <div className="best_courses_inner">

                                <MyCard 
                                    card_title="Python" 
                                    card_subtext="From Smith Chef" 
                                    card_image={pythone_cover} 
                                    rating="2.3" 
                                    total_users="(5480)"
                                    btn_text="Learn Free"
                                />

                                <MyCard 
                                    card_title="Java" 
                                    card_subtext="From Alis Mart" 
                                    card_image={java_cover} 
                                    rating="3.5" 
                                    total_users="(1014)"
                                    btn_text="Learn Free"
                                />
                                <MyCard 
                                    card_title="Learn PHP" 
                                    card_subtext="From Mark Ment" 
                                    card_image={php_cover} 
                                    rating="4.4" 
                                    total_users="(10,233)"
                                    btn_text="Learn Free"
                                />
                                <MyCard 
                                    card_title="Learn Angular" 
                                    card_subtext="From Amis Roy" 
                                    card_image={angular_cover} 
                                    rating="1.5" 
                                    total_users="(12,480)"
                                    btn_text="Learn Free"
                                />
                                <MyCard 
                                    card_title="Learn Perl" 
                                    card_subtext="From Sammy Smith" 
                                    card_image={perl_cover} 
                                    rating="2.5" 
                                    total_users="(81,014)"
                                    btn_text="Learn Free"
                                />
                                <MyCard 
                                    card_title="Learn Go" 
                                    card_subtext="From Kent burg" 
                                    card_image={go_cover} 
                                    rating="3.4" 
                                    total_users="(24,233)"
                                    btn_text="Learn Free"
                                />
                                <MyCard 
                                    card_title="Python" 
                                    card_subtext="From Smith Chef" 
                                    card_image={pythone_cover} 
                                    rating="2.3" 
                                    total_users="(5480)"
                                    btn_text="Learn Free"
                                />

                                <MyCard 
                                    card_title="Java" 
                                    card_subtext="From Alis Mart" 
                                    card_image={java_cover} 
                                    rating="3.5" 
                                    total_users="(1014)"
                                    btn_text="Learn Free"
                                />
                            </div>
                        </Fade>                        		
                </div>
            </Container>
            <Fade bottom>
                <Instructor_banner instructor_img={inst_img} instructor_title="Become an instructor" instructor_info="Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love." instructor_btn="Start teaching today" />
            </Fade>
            <div className="trusted_company_section">
                <Container>
                    <div className="company_inner">
                        <Fade bottom>
                            <h3>Trusted by companies of all sizes</h3>
                        </Fade>
                        <div className="all_companies">
                            <img src={nasdaq_img} alt="nasdaq_img" />
                            <img src={wolkswegon} alt="wolkswegon" />
                            <img src={box_img} alt="box_img" />
                            <img src={netflix} alt="netflix" />
                            <img src={evenbrit} alt="evenbrit" />
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Home