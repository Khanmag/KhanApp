import React from 'react';
import s from './OptionsBlock.module.css'
import {ImShuffle} from "react-icons/im";


interface OptionsBlockProps {
    toggleEngVisible: () => void,
    toggleRuVisible: () => void,
    engVisible: boolean,
    ruVisible: boolean,
    shuffleWords: () => void,
}

const OptionsBlock: React.FC<OptionsBlockProps> = (
    {
        toggleEngVisible, toggleRuVisible, ruVisible, engVisible,shuffleWords
    }
) => {

    const ruBtnClasses = ruVisible ? `${s.visible_btn} ${s.visible_btn_active}` : s.visible_btn
    const engBtnClasses = engVisible ? `${s.visible_btn} ${s.visible_btn_active}` : s.visible_btn
    return (
        <div className={s.option_block}>
            <button onClick={toggleEngVisible}
                    className={engBtnClasses}
            >
                EN
            </button>
            <button onClick={toggleRuVisible}
                    className={ruBtnClasses}
            >
                RU
            </button>
            <button onClick={shuffleWords}
                    className={s.shuffle_btn + " " + s.visible_btn}
            >
                <ImShuffle size={20}/>
            </button>
        </div>
    );
};

export default OptionsBlock;