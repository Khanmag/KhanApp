import React, {useEffect, useState} from 'react';
import axios from "axios";
import styles from './Dictionary.module.css'

interface IWordItem {
    eng: string,
    ru: string,
}


const Dictionary: React.FC = () => {

    const [words, setWords] = useState<IWordItem[]>([])

    useEffect(() => {
        getDictData()
    }, [])

    const getDictData = async () => {
        const res = await axios.get('https://script.googleusercontent.com/macros/echo?user_content_key=S2d8mVvF4IKfiZJgCDzpG9NPq1uFAuXp6iHrT6RXVO1S1S15ZP-OqUruFDKfx04Liybwgol4C9H1IpAj0eHBglUNoLxUAhxJm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnK8JTV80DAM70lqzaoSvNgFiYcPCX2ORYzP6ofXJbGRX4x134KE8ru-t4t2PglDIm4qnr-FQMMknh5uUAZUmBPDTF55rsb8pUdz9Jw9Md8uu&lib=Mc_wHlyPaFfNQKzD9tI4gvJnPHQt2It8t')
        setWords(res.data)
    }
    if (words.length === 0) return <div>Loading..</div>
    return (
        <div >
            {words.length > 0 &&
                words.map(word => (
                    <div className={styles.words_row_container} key={word.eng}>
                        <div className={styles.word_wrapper}>{word.eng}</div>
                        <DetachRuWords ruWords={word.ru}/>
                    </div>
                ))
            }
        </div>
    );
};

export default Dictionary;

interface detachRuWordsProps {
    ruWords: string,
}

const DetachRuWords: React.FC<detachRuWordsProps> = ({ruWords}) => {
    const arr = ruWords.split(', ')
    return (
        <div className={styles.ru_words_wrapper}>
            {
                arr.map(item => (
                    <div key={item} className={styles.word_wrapper}>
                        {item}
                    </div>
                ))
            }
        </div>
    )
}