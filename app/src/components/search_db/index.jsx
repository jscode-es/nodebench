import styles from './style.module.css'
import Image from 'next/image'
import logo from '../../../public/img/logo-white.png'
import { useState } from 'react';

export default function SearchDB() {

    return (
        <div className={styles.container}>
            <div className={styles.input}>
                <input type="text" placeholder='Buscar base de datos' />
            </div>
            <div className={styles.result}>
                <div className="item1">1</div>
                <div className="item2">2</div>
                <div className="item3">3</div>
                <div className="item4">4</div>
                <div className="item5">5</div>
                <div className="item6">6</div>
                <div className="item7">7</div>
                <div className="item8">8</div>
            </div>
        </div>
    )
}
