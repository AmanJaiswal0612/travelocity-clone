import React from "react";
import styles from "./rooms.module.css";

const Photos = () => {
  return (
    <>
      <div className={styles.headers}>
        {" "}
        <h3>Choose your stay </h3>
        <img
          style={{ width: "25px", height: "25px", marginTop: "15px" }}
          src="https://www.flaticon.com/svg/vstatic/svg/3916/3916869.svg?token=exp=1651641245~hmac=cf3f76ac2ff7be3576cbe79cc7d2dd01"
          alt=""
        />
        <p>Choose departing flight</p>
        <img
          style={{ width: "25px", height: "25px", marginTop: "15px" }}
          src="https://www.flaticon.com/svg/vstatic/svg/3916/3916869.svg?token=exp=1651641245~hmac=cf3f76ac2ff7be3576cbe79cc7d2dd01"
          alt=""
        />
        <p>Choose returning flight</p>
        <img
          style={{ width: "25px", height: "25px", marginTop: "15px" }}
          src="https://www.flaticon.com/svg/vstatic/svg/3916/3916869.svg?token=exp=1651641245~hmac=cf3f76ac2ff7be3576cbe79cc7d2dd01"
          alt=""
        />
        <p>Review your trip</p>
      </div>
      <div className={styles.imggrid}>
        <div id={styles.a}>
          <img
            src="https://images.trvl-media.com/hotels/31000000/30790000/30783800/30783748/4ec39822.jpg?impolicy=resizecrop&rw=598&ra=fit"
            alt=""
          />
        </div>
        <div className={styles.grid}>
          <div id={styles.b}>
            <img
              src="https://images.trvl-media.com/hotels/6000000/5200000/5190800/5190708/decce11f.jpg?impolicy=resizecrop&rw=297&ra=fit"
              alt=""
            />
          </div>
          <div id={styles.b}>
            <img
              src="https://images.trvl-media.com/hotels/6000000/5200000/5190800/5190708/bd180d93.jpg?impolicy=resizecrop&rw=297&ra=fit"
              alt=""
            />
          </div>
          <div id={styles.b}>
            <img
              src="https://images.trvl-media.com/hotels/6000000/5200000/5190800/5190708/7647ddf5.jpg?impolicy=resizecrop&rw=297&ra=fit"
              alt=""
            />
          </div>
          <div id={styles.b}>
            <img
              src="https://images.trvl-media.com/hotels/6000000/5200000/5190800/5190708/615ee862.jpg?impolicy=resizecrop&rw=297&ra=fit"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Photos;
