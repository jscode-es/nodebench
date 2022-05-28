import styles from './style.module.css'
import { Add } from '../../../button'
import { useEffect } from 'react'

export default function Proyect({ style, showModal, setShowModal, setContentModal }) {

    // https://dribbble.com/shots/18346939-Switch-Task-Manager-Dashboard
    // https://dribbble.com/shots/17312790-Dark-Dashboard-UI-Concept


    useEffect(() => {

        global.db.transaction(function (tx) {
            tx.executeSql('CREATE TABLE IF NOT EXISTS proyect (id unique, name, database, setting, created, updated)');
        })

        global.db.transaction(function (tx) {

            tx.executeSql('SELECT * FROM proyect', [], function (tx, results) {

                let len = results.rows.length;

                console.log({ len })

            }, null)
        })

    }, [])

    return (
        <div className={styles.container}>
            <span className={style.span}>Gestión de proyecto</span>
            <h1 className={style.h1}>Todos mis proyectos</h1>
            <p className={style.p}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus quas voluptatibus sit dolorum ipsum ea maiores eius quae cupiditate iure, dolores ullam animi recusandae nulla explicabo possimus culpa officia totam.</p>
            <Add text='Añadir proyecto' modal='Proyect' icon='MdAddchart' setShowModal={setShowModal} setContentModal={setContentModal} />
        </div>
    )
}
