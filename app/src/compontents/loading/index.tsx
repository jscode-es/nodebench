
import React, { useState } from 'react'
import style from './style.module.css'
import { NodeBench } from '../icons'

const Loading = () => {

    const [nameClass, setNameClass] = useState(style.container);

    setTimeout(() => {
        setNameClass(`${style.container} ${style.show}`)
    }, 500)

    return (
        <div className={nameClass}>
            <NodeBench />
        </div>
    )
}

export default Loading