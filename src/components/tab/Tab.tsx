import { FC } from 'react';
import styles from './Tab.module.css';

type TItem = {
    name: string,
    image: string,
    free: string,
    subscribe: string
}

type TItems = {
    items: Array<TItem>
}

export const Tab: FC<TItems> = ({items}) => {
    return(
        <div className={styles.main}>
            <div className={styles.options}>
                <div className={styles.title}>Бесплатные сервера</div>
                <div className={styles.title}>Подписочный сервер</div>
            </div>
            <div className={styles.container}>
                {items.map((item, index) => (
                        <div key={index} className={styles.box}>
                            <img className={styles.image} src={item.image}/>
                            <div className={styles.value1}>{item.name}</div>
                            <div className={styles.value}>{item.free}</div>
                            <div className={styles.value}>{item.subscribe}</div>
                        </div>
                ))}
            </div>
        </div>
    )
}