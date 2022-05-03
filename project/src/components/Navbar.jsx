import React from 'react'
import styles from "./Navbar.module.css"


const Navbar = () => {
  return (
    <div className={styles.navcontainer}>
       <div className={styles.iconbox}>
           <img src="https://www.travelocity.com/_dms/header/logo.svg?locale=en_US&siteid=80001&2" alt="" />
           <select name="" id="">
               <option value="">More trvel</option>
           </select>
       </div>
       <div className={styles.navlinks}>
       <h4>Espariol</h4>
       <h4>List your property</h4>
       <h4>Support</h4>
       <h4>Trips</h4>
       <h4>Login</h4>
       </div>

    </div>
  )
}

export default Navbar