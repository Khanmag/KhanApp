import React from 'react';
import s from './ResumePage.module.css'
import {FcPhoneAndroid} from "react-icons/fc";

const ResumePage = () => {
    return (
        <div className={s.resume_wrapper}>
            <div className={s.name_and_profession}>
                <h2>Shamil Khanmagomedov</h2>
                <h3>React Developer</h3>
            </div>
            <div className={s.contacts_block}>
                <div>
                    <FcPhoneAndroid/>
                    <p>+7 988 642 92 88</p>
                </div>
                <div>
                    <FcPhoneAndroid/>
                    <p>Khanmag329@gmail.com</p>
                </div>
                <div>
                    <FcPhoneAndroid/>
                    <p>Russia, Makhachkala</p>
                </div>
            </div>
        </div>
    );
};

export default ResumePage;