import React, {useState} from 'react';
import OptionsBlock from "./OptionsBlock";
import WordsList from "./WordsList";


const Dictionary: React.FC = () => {

    const [engVisible, setEngVisible] = useState(true)
    const [ruVisible, setRuVisible] = useState(true)

    return <>
        <OptionsBlock engVisible={engVisible}
                      ruVisible={ruVisible}
                      setEngVisible={setEngVisible}
                      setRuVisible={setRuVisible}
        />
        <WordsList engVisible={engVisible}
                   ruVisible={ruVisible}
                   setEngVisible={setEngVisible}
                   setRuVisible={setRuVisible}
        />
    </>
};

export default Dictionary;