import React from 'react';
import {HeaderNavLink} from "../customNavLinks/HeaderNavLinks";
import s from './NavBar.module.css'
import {GiBookshelf} from "react-icons/gi";
import {FcSurvey} from "react-icons/fc";

const NavBar = () => {
    return (
        <div className={s.navbar_wrapper}>
            <HeaderNavLink to={'/dictionary'} name={'Dictionary'}>
                <GiBookshelf  size={30}/>
            </HeaderNavLink>
            <HeaderNavLink to={'/resume'}  name={'Resume'}>
                <FcSurvey size={30}/>
            </HeaderNavLink>
        </div>
    );
};

export default NavBar;