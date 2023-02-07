import React from 'react';
import s from './ResumePage.module.css'
import phoneIcon from '../../images/resumeIcon/phoneIcon.png'
import locationIcon from '../../images/resumeIcon/locationIcon.png'
import emailIcon from '../../images/resumeIcon/emailIcon.png'
import {linksData} from "../../data/resumeData";

const ResumePage = () => {
    return (
        <div>
            <div className={s.resume_wrapper}>

                <NameBlock/>

                <ContactsBlock/>

                <LinksBlock/>

            </div>
            <div className={s.competences_wrapper}>
                <h3>competences</h3>
                <div className={s.competences}>
                    <p>React</p>
                    <p>Redux</p>
                    <p>Redux Toolkit</p>
                    <p>Redux Saga</p>
                    <p>Node JS</p>
                    <p>JavaScript</p>
                    <p>TypeScript</p>
                    <p>CSS</p>
                    <p>SASS</p>
                    <p>LESS</p>
                    <p>HTML</p>
                </div>
            </div>

        </div>

    );
};

export default ResumePage;


const NameBlock: React.FC = () => {
    return (
        <div className={s.name_and_profession}>
            <h2>Shamil Khanmagomedov</h2>
            <h3>React Developer</h3>
        </div>
    )
}

const ContactsBlock: React.FC = () => {
    return (
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
    )
}

const LinksBlock: React.FC = () => {
    return (
        <div className={s.links}>
            {
                linksData.map(item => (
                    <a target={'_blank'} href={item.href} key={item.title}>
                        <img alt={item.title} title={item.title} src={item.src}/>
                    </a>
                ))
            }
        </div>
    )
}