import React from 'react'
import { Container } from 'react-bootstrap'
import { Flip } from 'react-reveal'

const Counter = () => {
    return (
        <div className="counter_section">
            <Container>
                <Flip top>
                    <div className="counter_block">
                        <div className="counter_titles">
                            <h2>40M</h2>
                            <p>Students</p>
                        </div>
                        <div className="counter_titles">
                            <h2>65+</h2>
                            <p>Languages</p>
                        </div>
                        <div className="counter_titles">
                            <h2>480M</h2>
                            <p>Enrollments</p>
                        </div>
                        <div className="counter_titles">
                            <h2>180+</h2>
                            <p>Countries</p>
                        </div>
                        <div className="counter_titles">
                            <h2>7,000+</h2>
                            <p>Enterprise customers</p>
                        </div>
                    </div>
                </Flip>
            </Container>
        </div>
    )
}

export default Counter
