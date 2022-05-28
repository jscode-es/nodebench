import styles from './style.module.css'
import { useState, useEffect } from 'react'
import * as pages from './type'

export default function Modal({ showModal, setShowModal, contentModal }) {

    const [show, setShow] = useState(styles.container)

    const close = () => setShowModal(false)
    //const Page = contentModal && pages[contentModal]
    let Page = <></>

    if (contentModal) Page = pages[contentModal]

    useEffect(() => {

        const name = showModal ? `${styles.container} ${styles.show}` : styles.container
        setShow(name)

    }, [showModal, contentModal])

    return (
        <div className={show}>
            <div className={styles.modal}>
                <div className={styles.content}>{contentModal && <Page style={styles} />}</div>
                <div className={styles.footer}>
                    <div>#</div>
                    <div className={styles.btn}>
                        <button className={styles.cancel} onClick={close}>Cancelar</button>
                        <button className={styles.accept}>Acceptar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
