import React from 'react';
import NavButtons from '../NavButtons/NavButtons';  
import styles from './Footer.module.scss';

import logo1 from '../assets/valorant-name-logo.png';
import logo2 from '../assets/riot-game-logo.png';

const Footer = () => {
    const footerButtons = ["Politique de confidencialité", "Conduite d'utilisation", "Information sur la societé ", "Preference de cookies"];

    return (
        <div className={styles.footer}>
            <div className={styles.logosContainer}>
                <img src={logo1} alt="Logo 1" className={styles.logo} />
                <img src={logo2} alt="Logo 2" className={styles.logo} />
            </div>
            <NavButtons buttons={footerButtons} />
            <p className={styles.legalMention}>Mentions légales bla bla...</p>
        </div>
    );
}

export default Footer;
