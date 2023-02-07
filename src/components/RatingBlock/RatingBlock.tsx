import React from 'react';
import s from "./RatingBlock.module.css";

interface RatingBlockProps {
    idea: number,
    world: number,
    story: number,
    characters: number,
}
const RatingBlock: React.FC<RatingBlockProps> = ({idea, world, story, characters}) => {
    const summary = (idea + world + story + characters) / 4
    return (
        <div className={s.rating_block}>
            <div className={s.option_rating}>
                <div>
                    <span>idea</span>
                    <span>{idea.toFixed(1)}</span>
                </div>
                <div>
                    <span>world</span>
                    <span>{world.toFixed(1)}</span>
                </div>
                <div>
                    <span>story</span>
                    <span>{story.toFixed(1)}</span>
                </div>
                <div>
                    <span>characters</span>
                    <span>{characters.toFixed(1)}</span>
                </div>
            </div>
            <div>
                <span>{summary.toFixed(1)}</span>
            </div>
        </div>
    )
}

export default RatingBlock;