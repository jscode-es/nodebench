import styles from './style.module.css'
import Image from 'next/image'
import logo from '../../../public/img/logo-white.png'
import { useState } from 'react';

export default function Preload() {

    const [nameClass, setNameClass] = useState(styles.container);

    setTimeout(() => {
        setNameClass(`${styles.container} ${styles.show}`)
    }, 500)

    return (
        <div className={nameClass}>
            <div className={styles.center}>
                <Image
                    src={logo}
                    alt="Nodebench"
                    width={200}
                    height={200}
                />
            </div>
        </div>
    )
}
