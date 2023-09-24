import styles from './Info.module.css';
import dog from '../../images/Vito 1.png';
import box from '../../images/box.png';
import {Tab} from '../tab/Tab';
import { date } from '../../utils/data';

function Info(){
    return(
        <div className={styles.main}>
            <div className={styles.left}>
                <div className={styles.spark}></div>
                <img src={dog} className={styles.dog}></img>
            </div>
            <div className={styles.right}>
                <div className={styles.title}>НАБОР «ПОСЫЛКА С КОНТРАБАНДОЙ»</div>
                <Tab items = {date}/>
                <div className={styles.get}>
                    <img src={box} className={styles.box}></img>
                    <div className={styles.buy}>
                        <div className={styles.cost}>399 ₽</div>
                        <a href="#" className={styles.button}>Приобрести</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info;