import React from 'react';
import {useAppSelector} from "../hooks/redux";

const Booll = () => {
    const {words} = useAppSelector(state => state.dictionarySlice)
    return (
        <div>
            {words.map(item => {
                return <li>{item.eng}</li>
            })}
        </div>
    );
};

export default Booll;