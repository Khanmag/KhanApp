import React from 'react';
import s from "./BrainBlock.module.css";
import leftBrain from "../../images/OoGOwVq.png";
import rightBrain from "../../images/P1ZxZNr.png";
import {NavLink} from "react-router-dom";

const BrainBlock:React.FC = () => {

    const getClasses = (usual:string, active:string) => {
        return ({isActive}:{isActive: boolean}) => (
            isActive ? `${active} ${usual}` : usual
        )
    }
    const leftClasses = getClasses(s.left_part, s.active_left)
    const rightClasses = getClasses(s.right_part, s.active_right)

    return (
        <div className={s.brain_block}>
            <BrainBlockItem to={'/technical'} src={leftBrain} title={'Technical'} classes={leftClasses} />
            <BrainBlockItem to={'/creativity'} src={rightBrain} title={'Creativity'} classes={rightClasses} />
        </div>
    );
};

export default BrainBlock;


interface BrainBlockItemProps {
    to: string,
    src: string,
    title: string,
    classes: ({isActive}:{isActive: boolean}) => string,
}
const BrainBlockItem:React.FC<BrainBlockItemProps> = ({to, src, title, classes}) => {
    return (
        <NavLink className={classes}
                 to={to}
        >
            <p>{title}</p>
            <img alt={'brain block item'} src={src}/>
        </NavLink>
    )
}