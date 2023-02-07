import React, {useEffect} from 'react';
import s from "./WordsList.module.css";
import {useSwipeable} from "react-swipeable";
import {fetchDict} from "../../store/slices/ActionCreators";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import Preloader from "../../components/common/Preloader";
import PageInProcess from "../../components/pageInProcess/PageInProcess";


interface WordsListProps{
    engVisible: boolean,
    ruVisible: boolean,
    setEngVisible: (arg:boolean) => void,
    setRuVisible: (arg:boolean) => void,
}

const WordsList:React.FC<WordsListProps> = ({engVisible, ruVisible, setEngVisible, setRuVisible}) => {

    const dispatch = useAppDispatch()
    const {words, hasError, isLoading} = useAppSelector(state => state.dictionarySlice)
    useEffect(() => {
        dispatch(fetchDict())
    }, [])

    const rightSwap = () => {
        if (engVisible) setRuVisible(false)
        else setEngVisible(true)
    }
    const leftSwap = () => {
        if (ruVisible) setEngVisible(false)
        else setRuVisible(true)
    }
    const handlers = useSwipeable({
        onSwipedRight: rightSwap,
        onSwipedLeft: leftSwap
    })

    if (isLoading) return <Preloader />
    if (hasError) return <PageInProcess />
    return (
        <div {...handlers}>
            {
                words.map(word => (
                    <div className={s.words_row_container} key={word.eng}>
                        {engVisible && <div className={s.word_wrapper}>{word.eng}</div>}
                        {ruVisible && <DetachRuWords ruWords={word.ru}/>}
                    </div>
                ))
            }
        </div>
    );
};

export default WordsList;


const DetachRuWords = ({ruWords}:{ruWords:string}) => {
    const arr = ruWords.split(', ')
    return (
        <div className={s.ru_words_wrapper}>
            {
                arr.map(item => (
                    <div key={item} className={s.word_wrapper}>
                        {item}
                    </div>
                ))
            }
        </div>
    )
}