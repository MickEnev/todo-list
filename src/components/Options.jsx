import React from 'react'
import styles from './options.module.css'

export default function Options(props) {
    const { selection, setSelection } = props

    const buttons = [
        'Doing',
        'Done',
        'Failed'
    ]

  return (
    <div className={styles.buttonContainer}>
        {buttons.map((button, index) => {
            return (
                <button onClick={setSelection(button)} className={`${styles.button} ${button === selection ? styles.selectedButton :
                    styles.nonSelectedButton}`} key={index}>
                        {button}
                </button>
            )
        })}
    </div>
  )
}
