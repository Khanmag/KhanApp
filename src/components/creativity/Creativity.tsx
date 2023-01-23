import React from 'react';
import s from "./Creativity.module.css"
import {NavLink} from "react-router-dom";
import Beauty from "../Beauty";

const Creativity = () => {
    return (
            <div className={s.creativity_wrapper}>
                <h2 className={s.general_title}>Creativity applications</h2>

                <div className={s.app_container}>
                    <Beauty />

                    {/*<AppItem to={'dictionary'} src={dictionaryIMG} name={'dictionary'} />*/}
                    {/*<AppItem to={'dictionary'} src={cinemaIMG} name={'cinema'} />*/}
                    {/*<AppItem to={'dictionary'} src={animeIMG} name={'anime'} />*/}
                    {/*<AppItem to={'dictionary'} src={summaryIMG} name={'summary'} />*/}

                </div>

            </div>
    );
};

export default Creativity;


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