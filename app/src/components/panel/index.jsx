import styles from './style.module.css'
import { useState } from 'react'
import Content from '../content';

export default function Panel() {

    const [nameClass, setNameClass] = useState(styles.container)

    setTimeout(() => {
        setNameClass(`${styles.container} ${styles.show}`)
    }, 500)

    return (
        <div className={nameClass}>
            <Content />
        </div>
    )
}
