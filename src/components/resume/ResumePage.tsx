import React from 'react';
import s from './ResumePage.module.css'
import {FcPhoneAndroid} from "react-icons/fc";
import phoneIcon from '../../images/resumeIcon/phoneIcon.png'
import locationIcon from '../../images/resumeIcon/locationIcon.png'
import emailIcon from '../../images/resumeIcon/emailIcon.png'
import github from '../../images/resumeIcon/github.png'
import linkedin from '../../images/resumeIcon/linkedin.png'
import telegram from '../../images/resumeIcon/telegram.png'
import whatsapp from '../../images/resumeIcon/whatsapp.png'
import hh from '../../images/resumeIcon/hh.png'
import myOwn from '../../images/resumeIcon/mob.png'


const linksData = [
    {
        title: 'GitHub',
        src: github,
        href: '#',
    }
]
const ResumePage = () => {
    return (
        <div className={s.resume_wrapper}>

            <div className={s.name_and_profession}>
                <h2>Shamil Khanmagomedov</h2>
                <h3>React Developer</h3>
            </div>

            <div className={s.contacts_block}>
                <div>
                    <img alt={'phone'} src={phoneIcon}/>
                    <p>+7 988 642 92 88</p>
                </div>
                <div>
                    <img alt={'email'} src={emailIcon}/>
                    <p>Khanmag329@gmail.com</p>
                </div>
                <div>
                    <img alt={'location'} src={locationIcon}/>
                    <p>Russia, Makhachkala</p>
                </div>
            </div>

            <div className={s.links}>
                <a target={'_blank'}>
                    <img alt={'github'} title={'github'} src={github} />
                </a>
                <a>
                    <img alt={'linkedin'} title={'linkedin'} src={linkedin} />
                </a>
                <a>
                    <img alt={'telegram'} title={'telegram'} src={telegram} />
                </a>
                <a>
                    <img alt={'whatsapp'} title={'whatsapp'} src={whatsapp} />
                </a>
                <a>
                    <img alt={'hh'} title={'hh'} src={hh} />
                </a>
                <a>
                    <img alt={'myOwn'} title={'myOwn'} src={myOwn} />
                </a>
            </div>
        </div>
    );
};

export default ResumePage;