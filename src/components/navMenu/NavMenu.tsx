import React from 'react';
import s from './NavMenu.module.css'
import {NavLink} from "react-router-dom";
import leftBrain from '../../images/OoGOwVq.png'
import rightBrain from '../../images/P1ZxZNr.png'
import resumeIcon from '../../images/cv.png'
import homeIcon from '../../images/house.png'

const NavMenu = () => {

    return (
        <div className={s.menu}>
            <div className={s.brain_block}>
                <NavLink className={({isActive}) => isActive ? s.active_left + " " + s.left_part : s.left_part}
                         to={'/technical'}
                >
                    <p>Technical</p>
                    <img alt={'left'} src={leftBrain}/>
                </NavLink>
                <NavLink className={({isActive}) => isActive ? s.active_right + " " + s.right_part : s.right_part}
                         to={'/creativity'}
                >
                    <img alt='right' src={rightBrain}/>
                    <p>Creativity</p>
                </NavLink>
            </div>
            <div className={s.menu_item}>
                <NavLink className={({isActive}) => isActive ? s.active_item : ''}
                         to={'/home'}
                >
                    <img alt='right' src={homeIcon}/>
                    <p>Home</p>
                </NavLink>
            </div>
            <div className={s.menu_item}>
                <NavLink className={({isActive}) => isActive ? s.active_item : ''}
                         to={'/resume'}
                >
                    <img alt='right' src={resumeIcon}/>
                    <p>Resume</p>
                </NavLink>
            </div>
        </div>
    );
};

export default NavMenu;

