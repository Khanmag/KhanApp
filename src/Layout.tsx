import React from 'react';
import {NavLink, Outlet} from "react-router-dom";
import styles from './Layout.module.css'
import NavMenu from "./components/navMenu/NavMenu";


const Layout = () => {
    return (
        <>
            <header className={styles.header}>
                <NavMenu />
            </header>

            <main className={styles.main}>
                <Outlet/>
            </main>

            <footer className={styles.footer}>

            </footer>
        </>
    );
};

export default Layout;