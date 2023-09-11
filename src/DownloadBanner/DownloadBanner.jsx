import React from 'react';
import styles from './DownloadBanner.module.scss';

const DownloadBanner = () => {
    return (
        <div className={styles.container}>
            <button className={styles.downloadButton}>TÉLÉCHARGER LE JEU</button>
            <button className={styles.downloadButton}>TÉLÉCHARGER L'APPLI RIOT MOBILE</button>
        </div>
    );
};

export default DownloadBanner;
