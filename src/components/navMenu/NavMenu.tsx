import React from 'react';
import s from './NavMenu.module.css'
import {NavLink} from "react-router-dom";
import resumeIcon from '../../images/cv.png'
import homeIcon from '../../images/house.png'
import BrainBlock from "./BrainBlock";

const NavMenu = () => {
    return (
        <div className={s.menu}>
            <BrainBlock />
            <MenuNavLink to={'/home'} src={homeIcon} title={'Home'}/>
            <MenuNavLink to={'/resume'} src={resumeIcon} title={'Resume'}/>
        </div>
    );
};

export default NavMenu;


interface MenuNavLinkProps {
    to: string,
    src: string,
    title: string,
}
const MenuNavLink:React.FC<MenuNavLinkProps> = ({to, src, title}) => {
    return (
        <div className={s.menu_item}>
            <NavLink className={({isActive}) => isActive ? s.active_item : ''}
                     to={to}
            >
                <img alt='menu item' src={src}/>
                <p>{title}</p>
            </NavLink>
        </div>
    )
}



