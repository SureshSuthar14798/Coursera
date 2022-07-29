import React from 'react'
const Top_category_card = (props) => {
    return (
        <>
            <div className="category_box">
                <a href='#0' className='top_category_box'>
                    <div className="top_category_img_block">
                        <img src={props.tc_img} alt={props.tc_alt_name} />
                    </div>
                    <div className="top_category_title">
                        <h3>{props.category_name}</h3>
                    </div>
                </a>
            </div>
        </>
    )
}

export default Top_category_card
