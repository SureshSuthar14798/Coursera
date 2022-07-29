import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import MyButton from '../Components/MyButton'

const Instructor_banner = (props) => {
    return (
        <div className="instructor_banner">
            <Container>
                <Row className='justify-content-md-center'>
                    <Col lg="4" sm="6">
                        <div className="instr_image">
                            <img src={props.instructor_img} alt="instructor" />
                        </div>
                    </Col>
                    <Col lg="4" sm="6" className='instructor_info_block'>
                        <div className="instructor_data">
                            <h3>{props.instructor_title}</h3>
                            <p>{props.instructor_info}</p>
                            <MyButton button_text={props.instructor_btn}/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Instructor_banner
