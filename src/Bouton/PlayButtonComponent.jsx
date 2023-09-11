import React from 'react';
import styles from './PlayButtonComponent.module.scss';

const PlayButtonComponent = ({ text, colorVariant = "white" }) => {
    const colorClass = colorVariant === "white" ? styles.textWhite : styles.textBlack;
    return (
        <button className={`${styles.baseButton} ${colorClass}`}>
            {text}
        </button>
    );
};

export default PlayButtonComponent;
