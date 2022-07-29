import React, { useState } from 'react'
import MyButton from '../Components/MyButton';

const MyCard = (props) => {

    const [toggle, setToggle] = useState(false);
    const likebtn = () => {
        setToggle( !toggle )
    }

    return(
        <div className="cm_card">
            <div className="card_image">
                <img src={props.card_image}/>
            </div>
            <div className="card_info">
                <div className="card_info_top">
                    <div className="card_data">
                        <h4>{props.card_title}</h4>
                        <p>{props.card_subtext}</p>
                    </div>
                    <div className='like_heart' onClick={likebtn}>
                        <svg className={`small ${toggle ? 'big' : ''}`} width="30" height="30" viewBox="0 0 24 24">
                    	    <path className={`not_like ${toggle ? 'like' : ''}`} d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
                        </svg>
                    </div>
                </div>
                <div className="rating">
                    <span className='ratings_number'>{props.rating}</span>
                    <span className='ratings_users'>{props.total_users}</span>
                </div>
                <div className="card_btn">
                    <MyButton button_text={props.btn_text}/>  
                </div>
            </div>
        </div>
    )
}

export default MyCard