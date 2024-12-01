import React from "react"
import styles from './Nav.module.css'

const Navigation = () => {
  return (
    <nav className={`${styles.navi} container`}>
      <div className='logo'>
        <img src="/image/logo.png" alt="logo" />
      </div>

      <ul>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
    </nav>
  )
}

export default Navigation