import React from 'react';
import AnimeListItem from "./AnimeListItem";
import animeData from "../../data/animeData";

const AnimeList = () => {
    return (
        <div>
            {
                animeData.map( item => (
                    <AnimeListItem {...item} />
                ))
            }
        </div>
    );
};

export default AnimeList;