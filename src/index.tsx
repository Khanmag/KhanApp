import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from './store/index'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// why HASH?? because gh pages demand this for him hosting
root.render(
    <HashRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </HashRouter>
);
