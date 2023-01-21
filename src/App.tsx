import React from 'react';
import Layout from "./Layout";
import ResumePage from "./components/resume/ResumePage";
import {Route, Routes} from "react-router-dom";
import Dictionary from "./components/dictionaryApp/Dictionary";

const App: React.FC = () => {

    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                {/*<Route index element={<ResumePage/>}/>*/}
                <Route path={'resume'} element={<ResumePage/>}/>
                <Route path={'dictionary'} element={<Dictionary/>}/>
            </Route>
        </Routes>
    );
}

export default App;
