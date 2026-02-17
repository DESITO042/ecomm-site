import React from 'react'
import { Link } from 'react-router-dom';

const btnText = "Sign Up For Free";
const title = "Shop Anytime Anywhere";
const desc = "Take shop on your any device with our app & learn all times what you want. just download & install & start shopping massively";
const AppSection = () => {
    return (
        <div className='app-section padding-tb'>
            <div className='container'>
                <div className='section-header text-center'>
                    <Link to="/sign-up" className='lab-btn mb-4'>{btnText}</Link>
                    <h2 className='title'>{title}</h2>
                    <p>{desc}</p>
                </div>
                <div className='section-wrapper'>
                    <ul className='lab-ul'>
                        <li><a href="#"><img src="/src/assets/images/app/01.jpg" alt="" /></a></li>
                        <li><a href="#"><img src="/src/assets/images/app/02.jpg" alt="" /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AppSection