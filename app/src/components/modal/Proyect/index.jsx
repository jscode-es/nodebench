import styles from './style.module.css'
import { useEffect } from 'react'

export default function Proyect({ style }) {


    useEffect(() => {


    }, [])

    return (
        <div className={styles.container}>
            <h1 className={style.h1}>Crear proyecto</h1>
            <p className={style.p}>Qquisquam tenetur vero perferendis deleniti, possimus iure recusandae blanditiis.</p>
        </div>
    )
}
