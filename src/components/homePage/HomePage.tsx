import React from 'react';
import s from './HomePage.module.css'
import welcomeImage from '../../images/welcomeImage.png'

const HomePage = () => {
    return (
        <div className={s.wrapper}>
            <h1>Welcome</h1>
            <p>Try every page on this web site and enjoy</p>

            <img alt={'welcome'} src={welcomeImage} />
        </div>
    );
};

export default HomePage;