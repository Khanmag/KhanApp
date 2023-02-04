import React from 'react';
import s from "./Creativity.module.css"
import animeIMG from '../../images/forCreativityPage/anime.png'
import moviesIMG from '../../images/forCreativityPage/movies.jpeg'
import musicIMG from '../../images/forCreativityPage/music.jpeg'
import paintingsIMG from '../../images/forCreativityPage/paintings.jpeg'
import booksIMG from '../../images/forCreativityPage/books.jpeg'
import {NavLink} from "react-router-dom";
import MediaBlog from "../../components/mediaBlog/MediaBlog";

const Creativity = () => {
    return (
        <div className={s.creativity_wrapper}>
            <h2 className={s.general_title}>Creativity applications</h2>
            {/*<div className={s.grid_container}>*/}
            {/*    {*/}
            {/*        creativityData.map( item => (*/}
            {/*            <ContentItem src={item.image} name={item.name} to={""} key={item.name}/>*/}
            {/*        ))*/}
            {/*    }*/}
            {/*</div>*/}
            <MediaBlog />

        </div>
    );
};

export default Creativity;

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




const creativityData = [
    {
        name: 'anine',
        image: animeIMG,
    },
    {
        name: 'movies',
        image: moviesIMG,
    },
    {
        name: 'music',
        image: musicIMG,
    },
    {
        name: 'books',
        image: booksIMG,
    },
    {
        name: 'art',
        image: paintingsIMG,
    },

]


