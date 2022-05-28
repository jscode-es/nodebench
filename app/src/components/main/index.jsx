import styles from './style.module.css'
import Preload from '../preload'

export default function Main() {

    return (
        <div className={styles.container}>
            <Preload />
        </div>
    )
}
