import React from 'react';
import styles from './ImageComponent.module.scss';

const ImageComponent = ({ src, alt }) => {
    return (
        <div className={styles.imageContainer}>
            <img src={src} alt={alt} className={styles.image} />
        </div>
    );
};

export default ImageComponent;
