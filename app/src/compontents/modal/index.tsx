
import React, { useEffect, useState } from 'react'
import style from './style.module.css'
import controller from './controller'
import Close from './close'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Modal = ({ showModal, typeModal, setShowModal }: any) => {

    const [nameClass, setNameClass] = useState(style.container)
    const [html, setHtml] = useState('')

    useEffect(() => {

        let show = ''

        if (showModal) show = style.show

        setNameClass(`${style.container} ${show}`)

        console.log(controller, typeModal)

        console.log((controller as any)[typeModal])

        setHtml((controller as any)[typeModal])

    }, [showModal])

    return (
        <div className={nameClass}>
            <div className={style.center}>
                <div className={style.padding}>
                    <Close setShowModal={setShowModal} />
                    {html}
                </div>
            </div>
        </div>
    )
}

export default Modal
