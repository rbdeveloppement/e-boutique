import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';




const BaseScreen = () => {
    return (
       <>
       <header>
        <Header />
       </header>
       <main>
        <Outlet />
       </main>
       <footer>
        <Footer />
       </footer>
       </> );
};

export default BaseScreen;