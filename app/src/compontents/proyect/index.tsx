
import React, { useState } from 'react'
import style from './style.module.css'
//import { NodeBench } from '../icons'
//import Text from '../text'
import Options from '../options'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Proyect = ({ setShowModal, setTypeModal }: any) => {

    const [nameClass, setNameClass] = useState(style.container);

    setTimeout(() => {
        setNameClass(`${style.container} ${style.show}`)
    }, 2500)


    return (
        <div className={nameClass}>
            <div className={style.center}>
                {/* <NodeBench /> */}
                <div className={style.options}>
                    <Options type="History_project" setShowModal={setShowModal} setTypeModal={setTypeModal} />
                    <Options type="New_project" setShowModal={setShowModal} setTypeModal={setTypeModal} />
                    <Options type="Diagram" setShowModal={setShowModal} setTypeModal={setTypeModal} />
                    <Options type="Connection" setShowModal={setShowModal} setTypeModal={setTypeModal} />
                </div>
            </div>

        </div>
    )
}

export default Proyect
