import React from 'react';
import Layout from "./Layout";
import ResumePage from "./components/resume/ResumePage";
import {Navigate, Route, Routes} from "react-router-dom";
import Dictionary from "./components/dictionaryApp/Dictionary";
import HomePage from "./components/homePage/HomePage";
import Technical from "./components/technical/Technical";
import Creativity from "./components/creativity/Creativity";

const App: React.FC = () => {

    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<Navigate to={'home'}/>}/>
                <Route path={'home'} element={<HomePage/>}/>
                <Route path={'technical'} element={<Technical/>}/>
                <Route path={'creativity'} element={<Creativity/>}/>
                <Route path={'resume'} element={<ResumePage/>}/>
                <Route path={'technical/dictionary'} element={<Dictionary/>}/>
            </Route>
        </Routes>
    );
}

export default App;
