import React from 'react';
import {NavLink} from "react-router-dom";
import s from "./MediaBlog.module.css";
import {creativityData} from "../../data/creativityData";

const MediaBlog:React.FC = () => {
    return (
        <div className={s.container}>
            {
                creativityData.map( item => (
                    <ContentItem src={item.image} name={item.name} to={item.name} key={item.name}/>
                ))
            }
        </div>
    );
};

export default MediaBlog;


interface ContentItemProps {
    src: string,
    name: string,
    to: string,
}
const ContentItem:React.FC<ContentItemProps> = ({src, name,to}) => {
    return (
        <div>
            <NavLink to={to}>
                <img alt={name} title={name} src={src} />
                <div className={s.modal_block}>
                    <p>{name}</p>
                </div>
            </NavLink>
        </div>
    )
}



