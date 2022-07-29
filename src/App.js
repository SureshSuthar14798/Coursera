import React from 'react'
import { Routes, Route} from "react-router-dom";
import Home from './Pages/Home_Page/Home';
import Contact from './Pages/Contact_Page/Contact';
import Feedback from './Pages/Feedback_page/Feedback';
import Category from './Pages/Category_Page/Category';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
    return (
        <div className="">
            <Routes>
                <Route path="/Suresh/Coursera" element={<Home/>} />
                <Route path="/Suresh/Coursera/Category" element={<Category/>} />
                <Route path="/Suresh/Coursera/Contact" element={<Contact/>} />
                <Route path="/Suresh/Coursera/Feedback" element={<Feedback/>} />
            </Routes>
        </div>
    )
}
export default App;
    
    