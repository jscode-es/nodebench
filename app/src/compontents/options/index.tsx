
import React from 'react'
import style from './style.module.css'
import Text from '../text'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { BsDiagram3 } from 'react-icons/bs'
import { RiDatabase2Line } from 'react-icons/ri'
import { BiListUl } from 'react-icons/bi'

const Options = ({ type, setShowModal, setTypeModal }: any) => {

    const option: any =
    {
        History_project: {
            name: "Proyectos recientes",
            desc: "Historial de proyectos",
            icon: <BiListUl />
        },
        New_project: {
            name: "Nuevos proyecto",
            desc: "Crea un nuevo proyectos de nodeBench",
            icon: <AiOutlinePlusCircle />
        },
        Diagram: {
            name: "Crear nuevo diagrama",
            desc: "Diseña el diagrama de una base de datos",
            icon: <BsDiagram3 />
        },
        Connection: {
            name: "Crear nueva conexión",
            desc: "Estables una conexión con cualquier entorno",
            icon: <RiDatabase2Line />
        }
    }

    const { name, desc, icon } = option[type]

    const handlerClick = () => {

        setShowModal(true)
        setTypeModal(type)
    }

    return (
        <div className={style.container} onClick={handlerClick}>
            <div className={style.icon}>
                {icon}
            </div>
            <div className={style.desc}>
                <Text>{name}</Text>
                <Text type="small">{desc}</Text>
            </div>
        </div>
    )
}

export default Options
