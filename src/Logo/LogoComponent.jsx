

import React from 'react';
import styles from './LogoComponent.module.scss';

const LogoComponent = () => {
    return (
        <img src="./src/assets/logo.png" alt="Logo" className={styles.logo} />
    );
}

export default LogoComponent;
