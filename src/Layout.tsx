import React from 'react';
import {NavLink, Outlet} from "react-router-dom";
import styles from './Layout.module.css'
import dictionaryImage from './images/online-library.png'
import {HeaderNavLink} from "./components/customNavLinks/HeaderNavLinks";
import {FaBeer} from "react-icons/fa";
import NavBar from "./components/navbar/NavBar";


const Layout = () => {
    return (
        <>
            <header className={styles.header}>
                <NavBar />
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