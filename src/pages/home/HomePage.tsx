import React from 'react';
import s from './HomePage.module.css'
import welcomeImage from '../../images/welcomeImage.png'

const HomePage = () => {
    return (
        <div className={s.wrapper}>
            <h1>Welcome</h1>
            <p>This site is my collection.
                A set of applications that I need and lists of masterpieces that I want to share.
            </p>

            <img alt={'welcome'} src={welcomeImage} />
        </div>
    );
};

export default HomePage;