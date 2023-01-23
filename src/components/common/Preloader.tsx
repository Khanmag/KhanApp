import React from 'react';
import s from './Preloader.module.css'

const Preloader = () => {
    return (
        <div className={s.preloader_wrapper}>
            <div className={s.container}>
                <span className={s.girl}></span>
                <div className={s.boys}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>

    );
};

export default Preloader;