import React from 'react';
import Layout from "./Layout";
import ResumePage from "./components/resume/ResumePage";
import {Navigate, Route, Routes} from "react-router-dom";
import Dictionary from "./apps/dictionary/Dictionary";
import HomePage from "./pages/home/HomePage";
import Technical from "./pages/technical/Technical";
import Creativity from "./pages/creativity/Creativity";
import PageInProcess from "./components/pageInProcess/PageInProcess";

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
                <Route path={'technical/noReady'} element={<PageInProcess/>}/>
            </Route>
        </Routes>
    );
}

export default App;
