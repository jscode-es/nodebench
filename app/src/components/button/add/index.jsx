import styles from './style.module.css'
import * as icons from 'react-icons/md'


export default function Add({ text, icon, modal, setShowModal, setContentModal }) {

    const open = () => {
        setContentModal(modal)
        setShowModal(true)
    }

    let Icon = icon ? icons[icon] : ''

    return (
        <button className={styles.container} onClick={open}>
            {icon && <Icon />}
            {text}
        </button>
    )
}
