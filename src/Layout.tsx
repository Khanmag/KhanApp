import React from 'react';
import {Outlet} from "react-router-dom";
import s from './Layout.module.css'
import NavMenu from "./components/navMenu/NavMenu";


const Layout = () => {
    return (
        <div className={s.body}>
            <header className={s.header}>
                <NavMenu />
            </header>

            <main className={s.main}>
                <Outlet/>
            </main>

            <footer className={s.footer}>

            </footer>
        </div>
    );
};

export default Layout;