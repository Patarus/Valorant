import React from 'react';
import styles from './Header.module.scss';
import logovalorant from '../assets/logo-valorant.png'; 
import PlayButtonComponent from '../Bouton/PlayButtonComponent';

const Header = () => {
    return (
        <div className={styles.header}>
            <img src={logovalorant} alt="Logo Valorant" className={styles.logo} />
            
            <PlayButtonComponent text="Jouer Gratuitement" colorVariant="white" />
        </div>
    );
}

export default Header;
