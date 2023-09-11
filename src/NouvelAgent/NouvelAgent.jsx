
import React from 'react';
import Presentation from '../Presentation/Presentation';
import styles from './NouvelAgent.module.scss';
import agentImage from '../assets/gekko.jpg'; 

const NouvelAgent = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <div className={styles.titles}>
                    <Presentation title="NOUVEL AGENT" className={styles.titleNouvelAgent} />
                    <Presentation title="GEKKO" className={styles.titleGekko} colorVariant="red" />
                </div>
                <p className={styles.paragraph}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eaque quaerat molestias 
                    asperiores commodi odio! Veniam placeat consectetur maxime, minus voluptates maiores sed quos 
                    autem iste hic repudiandae optio. Cupiditate.
                </p>
            </div>
            <img src={agentImage} alt="Nouvel Agent Image" className={styles.agentImage} />
        </div>
    );
};

export default NouvelAgent;
