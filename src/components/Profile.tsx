import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/Profile.module.css';

export function Profile(){
    const {level} = useContext(ChallengesContext)
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/AngeloFilhoPS.png" alt=""/>
            <div>
                <strong>Angelo Márcio</strong>
                <p>
                    <img src="icons/level.svg" alt="Seta para cima"/>
                    Level {level}</p>
            </div>
        </div>
    )
}