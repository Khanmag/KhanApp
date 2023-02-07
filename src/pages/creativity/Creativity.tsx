import React from 'react';
import s from "./Creativity.module.css"
import MediaBlog from "../../components/mediaBlog/MediaBlog";

const Creativity = () => {
    return (
        <div className={s.creativity_wrapper}>
            <h2 className={s.general_title}>Creativity applications</h2>

            <MediaBlog />

        </div>
    );
};

export default Creativity;



