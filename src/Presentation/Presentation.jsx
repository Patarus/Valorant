// Presentation.jsx
import React from 'react';
import styles from './Presentation.module.scss';

const Presentation = ({ title, colorVariant = "white" }) => {
    const colorClass = colorVariant === "white" ? styles.textWhite : styles.textRed;

    return (
        <div className={`${styles.presentationContainer} ${colorClass}`}>
            <h1 className={styles.title}>
                {title}
            </h1>
        </div>
    );
};

export default Presentation;
