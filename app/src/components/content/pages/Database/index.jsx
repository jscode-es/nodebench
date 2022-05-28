import styles from './style.module.css'
import { Add } from '../../../button'
import { useEffect } from 'react'

export default function Database({ style, setShowModal, setContentModal }) {


    useEffect(() => {

        global.db.transaction(function (tx) {
            tx.executeSql('CREATE TABLE IF NOT EXISTS database (id unique, name, type, setting, created, updated)');
        })

        global.db.transaction(function (tx) {

            tx.executeSql('SELECT * FROM database', [], function (tx, results) {

                let len = results.rows.length;

                console.log({ len })

            }, null)
        })

    }, [])

    return (
        <div className={styles.container}>
            <span className={style.span}>Gestión de base de datos</span>
            <h1 className={style.h1}>Todas las base de datos</h1>
            <p className={style.p}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus quas voluptatibus sit dolorum ipsum ea maiores eius quae cupiditate iure, dolores ullam animi recusandae nulla explicabo possimus culpa officia totam.</p>
            <Add text='Añadir base de datos' modal='Database' icon='MdAddchart' setShowModal={setShowModal} setContentModal={setContentModal} />
        </div>
    )
}
