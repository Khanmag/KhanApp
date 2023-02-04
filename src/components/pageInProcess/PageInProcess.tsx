import React from 'react';
import s from "./PageInProcess.module.css"
import {useNavigate} from "react-router-dom";

const PageInProcess = () => {
    const navigate = useNavigate()
    const goBack = () => navigate(-1)
    return (
        <div className={s.container}>
            <h3>the page is under development..</h3>
            <img src={""} alt={""} title={""}/>
            <button onClick={goBack}>go back</button>
        </div>
    );
};

export default PageInProcess;