import React from 'react';
import Presentation from '../Presentation/Presentation';
import ImageComponent from '../ImageComponent/ImageComponent';
import styles from './ActualitéComponent.module.scss';
import smallImage1 from '../assets/pearl.jpg';
import smallImage2 from '../assets/fracture.jpg';
import smallImage3 from '../assets/haven.jpg';
import bigImage from '../assets/lotus.jpg';

const ActualiteComponent = () => {
    return (
        <div>
            <Presentation title="Actualité" />
            
            <div className={styles.imageLayout}>
                <img src={bigImage} alt="Grande image" className={styles.bigImage} />
                <div className={styles.imageColumn}>
                <ImageComponent src={smallImage1} alt="Description de la petite image 1" className={styles.smallImage} />
                <ImageComponent src={smallImage2} alt="Description de la petite image 2" className={styles.smallImage} />
                <ImageComponent src={smallImage3} alt="Description de la petite image 3" className={styles.smallImage} />
                </div>

                
            </div>
        </div>
    );
};

export default ActualiteComponent;
