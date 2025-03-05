import React, {useState} from 'react'
import styles from './dashboard.module.css'
import Options from './Options.jsx'

export default function Dashboard() {
    const [selection, setSelection] = useState(null)

    function onClickHandler(clickedButton) {
        return () => {
            setSelection(clickedButton)
        }
    }

  return (
    <div className={styles.dashboard}>
      <div className={styles.layout}>
        <h1 style={{margin: '0 auto', color: '#F5CC1D'}}>Todo</h1>
        <Options selection={selection} setSelection={onClickHandler}/>
      </div>
    </div>
  )
}
