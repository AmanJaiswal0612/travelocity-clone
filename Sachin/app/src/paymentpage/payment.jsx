import React from 'react'
import styles from "./payment.module.css"
import { FaLock,FaUserAlt } from 'react-icons/fa';

function Payment() {
  return (
    <div className={styles.payment}>Payment
     <h1 className={styles.section_head}>Secure booking — only takes 2 minutes!</h1>
     <span className={styles.subhead}>
             You've picked a winner! This hotel is rated 4.2/5.            </span>
    <div>
      <div className={styles.first_div}>
          
          <div style={{marginRight:"20px"}}><FaLock /></div>
          <div>
                <div className={styles.first_div1}>Signed in as </div>
                <div className={styles.first_div2}>Sachinsmp78@gmail.com </div>
          </div>
        
      </div>
      <div className={styles.second_div}>
          <div className={styles.second_div1}> 
               {/* contact  font awesome */} <FaUserAlt />
          </div>
          <div className={styles.second_div1}>
       
                <span style={{fontWeight: 'bold'}}>Room 1: </span>
                <span>2 Adults, </span>
                <span>Smoking </span>
          
                <div className={styles.freebies_container}>
                            <div >
                                         <span className={styles.freebies_text}>Breakfast included</span>
                            </div>
                            <div >
                                        <span className={styles.freebies_text}>Free parking</span>
                            </div>
                            <div>
                                      <span className={styles.freebies_text}>Free internet</span>
                            </div>
                    </div>
                        <div >
                            <span className={styles.label}> Traveler Name <span>*</span></span>
                            <select name="" id="">
                                <option value="name">Name</option>
                            </select>
                            
                        </div>
        
                  </div>
              
      </div>
                 <div className={styles.third_div}>     
                      <div className={styles.details}>
                          <span><Fa /></span>
                          <h2 style={{fontSize:"20px" , marginTop:"5px" , marginBottom:"5px"}}>Protect your hotel</h2>
                          <span>Recommended</span>
                      </div>
                      <div className={styles.para}>
                          <span>
                              <b style={{texeDecoration:"bold"}}>Important:</b>
                              Trip cancellation due to government travel advisories, fear of travel, or change of mind is not covered. Travel insurance may provide coverage for COVID-19 diagnosed illness. COVID-19 is a foreseen event and certain other coverages will not apply. <u> Learn more</u>
                          </span>
                      </div>
                      <div className={styles.para1}>
                        
                                <b>Note:</b> If you are a resident of WASHINGTON state, please <a href="#">click here</a> to view products that you are eligible to purchase.
                                <h3>
                                       4 reasons you might need travel protection
                                </h3>
                                <div>
                                    <ol>
                                        <ul>1.You get delayed for covered reasons and miss a night of your hotel stay</ul>
                                        <ul>2.You're sick and don't use all your hotel nights</ul>
                                        <ul>3.You need to extend your trip due to the illness of a travel companion</ul>
                                        <ul>4.You need up to $10,000 for covered medical expenses while on your trip</ul>
                                    </ol>
                                    <div >
                                          <a style={{fontSize:"12px",color: "#00e"}} href="https://webservices.travelguard.com/Product/FileRetrieval.aspx?CountryCode=US&amp;StateCode=NW&amp;ProductCode=009170&amp;PlanCode=P1&amp;FileType=PROD_PLAN_GM&amp;lang=en" target="_blank">View insurance details and disclosures 
                                          </a>
                                    </div>
                                    <div className={styles.para2}>
                                        <span>Select Yes or No to continue booking *</span>
                                        <div className={styles.para21}>
                                            <label><input type="radio"></input>Yes, I want Hotel Booking Protection Plus for my trip.</label>
                                            <div>
                                                <div>$13.53</div>
                                                <span>per person</span>
                                            </div>
                                        </div>
                                        <div className={styles.para22}>
                                            <label><input type="radio"></input>No, I'm willing to risk my $491.77 trip.</label>
  
                                            
                                        </div>
                                        <div className={styles.para23}>
                                            <span>“ Things happened outside of my control which caused the trip to be canceled. The Travel Protection was valuable in reducing the losses to me when we had to cancel the trip. ”<span>- Mr. Rodman</span></span>
                                        </div>
                                        
                                    </div>

                                    
                                </div>
                     </div>
                            
                  </div>
          
    </div>
     
    </div>
  )
}

export default Payment