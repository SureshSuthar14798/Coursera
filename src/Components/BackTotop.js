import React, { useState } from 'react'
import backtotop from '../../src/images/backtotop.svg'

function BackTotop() {
    
    const [visible, setVisible] = useState(false)
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
            setVisible(true)
        } 
        else if (scrolled <= 300){
            setVisible(false)
        }
    };
    window.addEventListener('scroll', toggleVisible);

    const scrollToTop = () =>{
        window.scrollTo({ top: 0 });
    };

    return (
        <div className={visible ? 'backtop' : 'backtop hidden'} onClick={scrollToTop} > 
            <span> 
                <img src={backtotop} alt="backtotop" />    
            </span>	
        </div>
    )
}
export default BackTotop