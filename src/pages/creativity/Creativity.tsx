import React from 'react';
import s from "./Creativity.module.css"

const Creativity = () => {
    return (
            <div className={s.creativity_wrapper}>
                <h2 className={s.general_title}>Creativity applications</h2>
                <div className={s.grid_container}>
                    <div>
                        <img alt={''}
                             src={'https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/10/Zaraki-Cropped.jpg'}/>
                    </div>
                    <div>
                        <img alt={''}
                             src={'https://studybreaks.com/wp-content/uploads/2020/06/watchmen_3-e1593659071752.jpg'}/>
                    </div>
                    <div>
                        <img alt={''}
                             src={'https://p4.wallpaperbetter.com/wallpaper/177/570/552/saitama-pinninja-opm-one-punch-man-wallpaper-preview.jpg'}/>
                    </div>
                    <div>
                        <img alt={''}
                             src={'https://domf5oio6qrcr.cloudfront.net/medialibrary/8718/brain-music-health-memory.jpg'}/>
                    </div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                    <div>7</div>
                    <div>8</div>
                    <div>9</div>
                    <div>10</div>
                </div>

            </div>
    );
};

export default Creativity;


