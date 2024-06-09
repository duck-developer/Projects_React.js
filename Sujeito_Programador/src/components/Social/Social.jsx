import React from 'react'

import styles from './Social.module.css'

export const Social = ({url, children}) => {
  return (
    <a className={styles.social} href={url} rel="noopener noreferrer" target="_blank">
        {children}
    </a>
  )
}
