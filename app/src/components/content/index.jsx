import styles from './style.module.css'
import Nav from '../nav'
import { useState } from 'react'
import * as pages from './pages'
import Modal from '../modal'

export default function Content() {

    const [page, setPage] = useState('Dash')
    const Page = pages[page]
    const [showModal, setShowModal] = useState(false)
    const [contentModal, setContentModal] = useState(false)

    return (
        <>
            <Modal showModal={showModal} setShowModal={setShowModal} contentModal={contentModal} />
            <div className={styles.container}>
                <Nav page={page} setPage={setPage} />
                <div className={styles.content}>
                    <Page style={styles} showModal={showModal} setShowModal={setShowModal} setContentModal={setContentModal} />
                </div>
            </div>
        </>
    )
}
