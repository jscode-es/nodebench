import styles from './style.module.css'
import Preload from '../preload'
import Panel from '../panel'

export default function Main() {

    return (
        <div className={styles.container}>
            <Preload />
            <Panel />
        </div>
    )
}
