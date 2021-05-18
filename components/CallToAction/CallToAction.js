import React, { useState, useEffect } from 'react';
import styles from '../../styles/Home.module.css';

const CallToAction = ({ frases }) => {
    const [frase, SetFrase] = useState(frases[0]);
    let count = 0;
    useEffect(() => {
        setTimeout(() => {
            setInterval(() => {
                SetFrase(frases[count % 3])
                count++;
            }, 3000);
        }, 3000);
    }, [])
    return (
        <div>
            <p className={styles.description} >
                Sistemas operacionais <p className={styles.CallToAction}>{frase}</p>
            </p>
        </div>
    );
}

export default CallToAction;