
import React, { useState } from 'react'
import Loading from '../loading'
import Proyect from '../proyect'
import Modal from '../modal'

const index = () => {

    const [showModal, setShowModal] = useState(false)
    const [typeModal, setTypeModal] = useState(false)

    return (
        <>
            <Loading />
            <Proyect setShowModal={setShowModal} setTypeModal={setTypeModal} />
            <Modal showModal={showModal} typeModal={typeModal} setShowModal={setShowModal} />
        </>
    )
}

export default index