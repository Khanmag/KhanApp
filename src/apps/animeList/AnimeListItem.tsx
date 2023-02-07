import React from 'react';
import s from "./AnimeListItem.module.css";
import RatingBlock from "../../components/RatingBlock/RatingBlock";
import SeasonsBlock from "../../components/SeasonsBlock/SeasonsBlock";


export interface AnimeListItemProps {
    name: string,
    image: string,
    seasons: Array<number>,
    isFinished: boolean,
    rating: {
        idea: number,
        world: number,
        story: number,
        characters: number,
    },
}

const AnimeListItem: React.FC<AnimeListItemProps> = (
    {
        name,
        image,
        seasons,
        isFinished,
        rating
    }
) => {
    return (
        <div className={s.container}>

            <div>
                <img alt={name} src={image}/>
            </div>

            <div className={s.info_container}>
                <h2>{name}</h2>

                <SeasonsBlock seasons={seasons}
                               isFinished={isFinished}
                />
                <RatingBlock idea={rating.idea}
                             world={rating.world}
                             story={rating.story}
                             characters={rating.characters}
                />
            </div>
        </div>
    );
};

export default AnimeListItem

