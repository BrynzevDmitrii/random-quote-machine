import clsx from "clsx"
import { useState } from "react"

import styles from './ButtonGetQuote.module.scss'

export const ButtonGetQuote = (props) => {
    const[disable, setDisable]=  useState(false)
    const delay = () => {
        props.handaleChange()
        setTimeout(()=>setDisable(true),0)
        setTimeout(()=>setDisable(false), 2000)
    }
    
    return ( <div>
        <button className={clsx(disable ? styles.disable : styles.state)} disabled={disable} onClick={()=>delay()}>Новая цитата</button>
    </div> );
}

