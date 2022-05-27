import React from 'react'
import style from './style.module.css'
import { AiOutlineCloseCircle } from 'react-icons/ai'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Close = ({ setShowModal }: any) => {

    const handlerClick = () => setShowModal(false)

    return (
        <AiOutlineCloseCircle className={style.close} onClick={handlerClick} />
    )
}

export default Close