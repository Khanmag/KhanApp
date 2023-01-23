import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {HashRouter} from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// why HASH?? because gh pages demand this for him hosting
root.render(
    <HashRouter>
        <App />
    </HashRouter>
);
