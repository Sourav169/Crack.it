import React from 'react';
import Mainimage from '../mainimage.jpeg'
import './Home.css'

import frontimage from '../images/front2.jpg'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import '../App.css'
import '../App'






function Home(props) {
    return (
        <>



            <div className="main">
                <div className="container1">
                    <img src={frontimage} alt="main image"


                    />

                    <h2> Learn Your
                    Favorite Course
                        From Online</h2>
                    <Link to='/product'>
                        <button className="btn">BROWSE OUR COURSES</button>
                    </Link>
                </div>
            </div>
           
           
        </>
    );
}
export default Home