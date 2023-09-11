import React from 'react';
import styles from './NavButtons.module.scss';

const NavButtons = ({ buttons }) => {
    return (
        <div className={styles.buttonsContainer}>
            {buttons.map((label, index) => (
                <button key={index} className={styles.button}>{label}</button>
            ))}
        </div>
    );
}

export default NavButtons;
