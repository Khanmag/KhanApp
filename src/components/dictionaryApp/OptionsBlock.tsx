import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useSwipeable} from "react-swipeable";
import s from './OptionsBlock.module.css'
import backIcon from '../../images/backIcon.png'
import plusIcon from '../../images/plusIcon.png'
import engIcon from '../../images/engIcon.png'
import ruIcon from '../../images/ruIcon.png'
import shuffleIcon from '../../images/shuffleIcon.png'


interface OptionsBlockProps {
    toggleEngVisible: () => void,
    toggleRuVisible: () => void,
    engVisible: boolean,
    ruVisible: boolean,
    shuffleWords: () => void,
}

const OptionsBlock: React.FC<OptionsBlockProps> = (
    {
        toggleEngVisible,
        toggleRuVisible,
        ruVisible,
        engVisible,
        shuffleWords
    }
) => {

    const [optionsVisible, setOptionsVisible] = useState(false)

    const navigate = useNavigate()

    const handlers = useSwipeable({
        onSwipedLeft: () => setOptionsVisible(false)
    })

    const getBack = () => {
        navigate(-1)
    }
    const openMenu = () => {
        setOptionsVisible(!optionsVisible)
    }
    const openMenuBTNClasses = s.open_menu_btn + " " + (optionsVisible ? s.open_menu_btn_opened : "")

    return (
        <>
            <div {...handlers} className={s.option_block + " " + (optionsVisible ? s.option_active : "")}>
                <CustomButtonWithImage onClickFunc={getBack}
                                       src={backIcon}
                />
                <CustomButtonWithImage onClickFunc={toggleEngVisible}
                                       src={engIcon}
                                       additionalClasses={!engVisible ? s.not_active : ""}
                />
                <CustomButtonWithImage onClickFunc={toggleRuVisible}
                                       src={ruIcon}
                                       additionalClasses={!ruVisible ? s.not_active : ""}
                />
                <CustomButtonWithImage onClickFunc={shuffleWords}
                                       src={shuffleIcon}
                                       additionalClasses={s.shuffle_btn}
                />
            </div>

            <CustomButtonWithImage onClickFunc={openMenu}
                                   src={plusIcon}
                                   additionalClasses={openMenuBTNClasses}
            />
        </>
    );
};

export default OptionsBlock;


interface CustomButtonWithImageProps {
    onClickFunc: () => void,
    src: string,
    additionalClasses?: string,
}

const CustomButtonWithImage: React.FC<CustomButtonWithImageProps> = (
    {
        onClickFunc,
        src,
        additionalClasses
    }
) => {
    const classnames = s.option_button + " " + additionalClasses!
    return (
        <button onClick={onClickFunc}
                className={classnames}
        >
            <img alt={src} src={src}/>
        </button>
    )
}