import styles from './style.module.css'
import * as icons from 'react-icons/md'
import { useEffect, useState } from 'react'

export default function Menu({ open, icon, setPage, page }) {

    const Icon = icons[icon]
    const [className, setClassName] = useState(styles.container)

    const handlerClick = () => setPage(open)

    useEffect(() => {

        let name = page !== open ? styles.container : `${styles.container} ${styles.select}`

        setClassName(name)

    }, [page, open])

    return (
        <div className={className} onClick={handlerClick}>
            <Icon />
        </div>
    )
}
