import React from "react";
import {NavLink} from "react-router-dom";
import s from './HeaderNavLinks.module.css'
import {GiBookshelf} from 'react-icons/gi'



interface HeaderNavLinkProps {
    to: string,
    name: string,
    children: any,
}

export const HeaderNavLink: React.FC<HeaderNavLinkProps> = ({to, name, children}) => {
    return (
        <NavLink to={to} className={s.custom_nav_link}>
            {children}
            <p>{name}</p>
        </NavLink>
    )
}