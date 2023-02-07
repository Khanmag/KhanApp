import React from "react";
import s from "./SeasonsBlock.module.css";

interface DurationBlockProps {
    seasons: number[],
    isFinished: boolean,
}
const SeasonsBlock:React.FC<DurationBlockProps> = ({seasons, isFinished}) => {
    return (
        <div className={s.duration_block}>
            {
                seasons.map( (item, index) => (
                    <div>
                        <p>season {index + 1}</p>
                        <p>series {item}</p>
                    </div>
                ))
            }
            <div>
                <p>finished</p>
                <p>{isFinished ? 'yes' : 'no'}</p>
            </div>
        </div>
    )
}
export default SeasonsBlock