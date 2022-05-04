import React, { useState } from 'react'
import styles from "./Navbar.module.css"
import SideSelect from "./SideSelect"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ScheduleSendTwoToneIcon from '@mui/icons-material/ScheduleSendTwoTone';

const Formbox = () => {
  const [travelForm,setTravelForm]= useState();


  return (
    <div className={styles.formbox}>
      <div >
        <SideSelect/><br />
      </div>
      <div className={styles.form}>
        <form action="">
          <div className={styles.upperform}>
             <div className={styles.inputbox1}>
               <LocationOnIcon/>
               <p>Going to</p>
               <input type="text" name="going" />
             </div>
             <div className={styles.datebox1}>
               <p style={{marginLeft:"5px"}}>Check-in&nbsp;&nbsp;</p>
               <ScheduleSendTwoToneIcon/> 
               <input type="date" name="checkin"/>
             </div>
             <div className={styles.datebox1}>
               <p style={{marginLeft:"5px"}}>Check-out&nbsp;</p>
               <ScheduleSendTwoToneIcon/> 
               <input type="date" name="checkout" />
             </div>
          </div>
          <div className={styles.lowerform}>
             <div className={styles.inputbox1}>
               <LocationOnIcon/>
               <p>Leaving From</p>
               <input type="text" name="leaving" />
             </div>
          </div>
          <div className={styles.submitform}>
            <input type="submit" value='Search' />
          </div>
        </form>
        
      </div>  
    </div>
  )
}

export default Formbox