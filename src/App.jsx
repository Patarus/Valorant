import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
import MainComponent from './MainComponent/MainComponent';
import ActualiteComponent from './Actualité/ActualiteComponent';
import NouvelAgent from './NouvelAgent/NouvelAgent';
import VosAgent from './VosAgents/VosAgent';
import DownloadBanner from './DownloadBanner/DownloadBanner';
import Footer from './Footer/Footer';








function App() {
    return (
        <>
            <Navbar />
            <Header />
            <MainComponent/>
            <ActualiteComponent/>
            <NouvelAgent/>
            <VosAgent/>
            <DownloadBanner/>
            <Footer/>
        </>
    );
}

export default App;
