import React from 'react'
import style from './style.module.css'

import { text } from '../../types/text'

function Text({ children, type, className }: text) {

    const CustomTag: any = type || 'span'

    const nameClass = className || style[CustomTag]

    return <CustomTag className={nameClass}>{children}</CustomTag>
}

export default Text

