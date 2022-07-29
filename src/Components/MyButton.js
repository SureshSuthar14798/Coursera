import React from 'react'

const MyButton = (props) => {
    
    return (
        <>
            <button className='cm_btn' > <span>{props.button_text}</span></button>
        </>
    )
}

export default MyButton
