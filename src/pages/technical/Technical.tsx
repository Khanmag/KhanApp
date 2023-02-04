import React from 'react';
import {NavLink} from "react-router-dom";
import s from './Technical.module.css'
import dictionaryIMG from '../../images/dictionaryImage.png'
import cinemaIMG from '../../images/cinema-icon-png-7.jpg'
import animeIMG from '../../images/opm.png'
import summaryIMG from '../../images/full_wheiagom.png'

const Technical = () => {
    return (
        <div>
            <h2 className={s.general_title}>Technical applications</h2>

            <div className={s.app_container}>

                <AppItem to={'dictionary'} src={dictionaryIMG} name={'dictionary'} />
                <AppItem to={'noReady'} src={animeIMG} name={'since'} />
                <AppItem to={'noReady'} src={cinemaIMG} name={'history'} />
                <AppItem to={'noReady'} src={summaryIMG} name={'IT'} />

            </div>

        </div>
    );
};

export default Technical;



interface AppItemProps {
    to: string,
    src: string,
    name: string,
}
const AppItem:React.FC<AppItemProps> = ({to, src, name}) => {
    return (
        <div className={s.app_item}>
            <NavLink to={to}>
                <img alt={name} src={src} />
            </NavLink>
            <NavLink to={to} >
                <p>{name}</p>
            </NavLink>
        </div>
    )
}