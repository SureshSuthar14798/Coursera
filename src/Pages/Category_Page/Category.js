import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Banner from '../../Components/Banner'
import Fade from 'react-reveal/Fade';
import './category_page.css';
import All_category_items from '../../Components/items';
import inst_img from '../../images/instructor_female.jpg'
import Instructor_banner from '../../Components/Instructor_banner'
import Top_category_card from '../../Components/Top_category_card';

const Category = () => {
    const [items , setitems] = useState(All_category_items);
    return (    
        <div className="category_page">
            <Banner 
                banner_name="Top Category" 
                banner_subtext="Duasi quisquam culpa ullam est delectus. Est quo optio perferendis inciduntdelectus. Est quo optio perferendis incidunt. Est quo optio perferendis inciduntex?"
                button_text_common="Know more"
            />
            <Container>
                <div className="top_category_section">
                     <Fade bottom>
                        <h2 className='cm_section_title'>Top Categories</h2>
                    </Fade>
                    <div className="top_category_block">
                        {
                            items.map((elem) => {
                                const {img, name} = elem;
                                return (
                                    <div className="col-6 col-sm-6 col-md-3 col-lg-3">
                                        <Top_category_card tc_img={img} category_name={name}  tc_alt_name={name}/>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </Container>
            <Fade bottom>
                <Instructor_banner instructor_img={inst_img} instructor_title="Become an instructor" instructor_info="Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love." instructor_btn="Start teaching today" />
            </Fade>
        </div>
    )
}

export default Category