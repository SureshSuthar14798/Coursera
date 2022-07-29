import React,{ useState } from 'react'

import { Container } from 'react-bootstrap'
import MyButton from './MyButton'

const Banner = (props) => {
    return (
        <div className="banner">    
            <Container>
                <div className="banner_inner">
                    <div className="banner_info">
                        <h1>{props.banner_name}</h1>
                        <p>{props.banner_subtext}</p>
                        <MyButton button_text={props.button_text_common}/>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Banner
