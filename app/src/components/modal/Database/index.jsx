import styles from './style.module.css'
import { useEffect } from 'react'
import SearchDB from '../../search_db'

export default function Database({ style }) {


    useEffect(() => {


    }, [])

    return (
        <div className={styles.container}>
            <h1 className={style.h1}>Crear base de datos</h1>
            <p className={style.p}>Qquisquam tenetur vero perferendis deleniti, possimus iure recusandae blanditiis.</p>
            <SearchDB />
        </div>
    )
}
