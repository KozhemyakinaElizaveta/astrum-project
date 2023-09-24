import Info from '../info/Info';
import Overview from '../overview/Overview';
import styles from './App.module.css';

function App() {

    return (
    <div className={styles.app}> 
        <>
            <div className={styles.main}>
                <Overview/>
                <Info/>
            </div>
        </>
    </div>
);
}

export default App;