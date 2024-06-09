import React from 'react'
import {Link} from 'react-router-dom'

//STYLE
import styles from './Logo.module.css'

export const Logo = () => {
  return (

    <Link to='/' className="text-[54px] mt-[20px] text-white ">
        Dev<span className={styles.Logo}>Link</span>
    </Link>
  )
}
