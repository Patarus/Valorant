import React from 'react';
import styles from './VosAgent.module.scss';
import agentImage from '../assets/agents.png'; 


const VosAgent = () => {
    return (
        <div className={styles.container}>
            <img src={agentImage} alt="Image Agent" className={styles.agentImage} />

            <div className={styles.textContainer}>
                <h1 className={styles.mainTitle}>VOS AGENTS</h1>
                <h2 className={styles.subTitle}>La créativité est dans votre meilleur arme</h2>
                <p className={styles.paragraph}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed sit amet facilisis urna. Praesent ac gravida libero. 
                    Donec non odio justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed sit amet facilisis urna. Praesent ac gravida libero. 
                    Donec non odio justo.
                </p>
                <button className={styles.button}>Voir tous les agents</button>
            </div>
        </div>
    );
};

export default VosAgent;
