import styles from '../styles/components/Profile.module.css';

export function Profile(){
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/AngeloFilhoPS.png" alt=""/>
            <div>
                <strong>Angelo Márcio</strong>
                <p>
                    <img src="icons/level.svg" alt="Seta para cima"/>
                    Level 1</p>
            </div>
        </div>
    )
}