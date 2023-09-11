import React from 'react';
import NavButtons from '../NavButtons/NavButtons';  // Importez le nouveau composant
import styles from './Navbar.module.scss';
import PlayButtonComponent from '../Bouton/PlayButtonComponent';

const Navbar = () => {
    const buttons = ["Présentation", "Médias", "Actualités", "Classement", "Support", "Esport", "Produit Dérivé"];

    return (
        <div className={styles.navbar}>
            <img src="./src/assets/logo.png" alt="Logo" className={styles.logo} />
            <NavButtons buttons={buttons} />
            <PlayButtonComponent text="Jouer Maintenant" colorVariant="black" />
        </div>
    );
}

export default Navbar;
