import styles from './style.module.css'

export default function Setting({ style }) {

    return (
        <div className={styles.container}>
            <span className={style.span}>Preferencias generales</span>
            <h1 className={style.h1}>Configuración</h1>
            <p className={style.p}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus quas voluptatibus sit dolorum ipsum ea maiores eius quae cupiditate iure, dolores ullam animi recusandae nulla explicabo possimus culpa officia totam.</p>
        </div>
    )
}
