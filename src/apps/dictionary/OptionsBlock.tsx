import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useSwipeable} from "react-swipeable";
import s from './OptionsBlock.module.css'
import backIcon from '../../images/backIcon.png'
import plusIcon from '../../images/plusIcon.png'
import engIcon from '../../images/engIcon.png'
import ruIcon from '../../images/ruIcon.png'
import shuffleIcon from '../../images/shuffleIcon.png'
import {useAppDispatch} from "../../hooks/redux";
import {dictionarySlice} from "../../store/slices/dictionarySlice";


interface OptionsBlockProps {
    setEngVisible: (arg:boolean) => void,
    setRuVisible: (arg:boolean) => void,
    engVisible: boolean,
    ruVisible: boolean,
}

const OptionsBlock: React.FC<OptionsBlockProps> = (
    {
        setEngVisible,
        setRuVisible,
        ruVisible,
        engVisible,
    }
) => {

    const [optionsVisible, setOptionsVisible] = useState(false)

    // for shuffle btn
    const dispatch = useAppDispatch()
    const {shuffleWords} = dictionarySlice.actions

    // for go back btn
    const navigate = useNavigate()
    const goBack = () => {
        navigate(-1)
    }

    const toggleEngVisible = () => {
        if (ruVisible) setEngVisible(!engVisible)
    }
    const toggleRuVisible = () => {
        if (engVisible) setRuVisible(!ruVisible)
    }

    const toggleMenuOpening = () => {
        setOptionsVisible(!optionsVisible)
    }

    const handlers = useSwipeable({
        onSwipedLeft: () => setOptionsVisible(false)
    })


    const openMenuBTNClasses = s.open_menu_btn + " " + (optionsVisible ? s.open_menu_btn_opened : "")

    return (
        <>
            <div {...handlers} className={s.option_block + " " + (optionsVisible ? s.option_active : "")}>
                <CustomButtonWithImage onClickFunc={goBack}
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
                <CustomButtonWithImage onClickFunc={() => dispatch(shuffleWords())}
                                       src={shuffleIcon}
                                       additionalClasses={s.shuffle_btn}
                />
            </div>

            <CustomButtonWithImage onClickFunc={toggleMenuOpening}
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