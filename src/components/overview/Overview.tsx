import styles from './Overview.module.css';
import logo from '../../assets/logo.png';
import boxes from '../../assets/boxes.png';
import character1 from '../../assets/MafiaCostume_2022 2.png';
import character2 from '../../assets/MafiaCostume_2022 3.png';

function Overview(){
    return(
        <div className={styles.main}>
            <div className={styles.container}>
                <img src={character1} className={styles.character1}></img>
                <div className={styles.center}>
                    <img src={logo} className={styles.logo}></img>
                    <div className={styles.glow}>
                        <div className={styles.spark}></div>
                        <img src={boxes} className={styles.boxes}></img>
                    </div>
                    <div className={styles.text}>
                            <div className={styles.big}>КОЛЛЕКЦИОННЫЕ ИЗДАНИЯ</div>
                            <div className={styles.small}>Побеждайте легко, побеждайте стильно с новыми коллекционными изданиями «Аллодов Онлайн»!</div>
                            <div className={styles.light}></div>
                    </div>
                </div>
                <img src={character2} className={styles.character2}></img>
            </div> 
        </div>
    )
}

export default Overview;