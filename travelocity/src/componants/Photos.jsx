import React from "react";
import styles from "./rooms.module.css";

const Photos = () => {
  return (
    <>
      <div className={styles.headers}>
        {" "}
        <h3>Choose your stay </h3>
        <p>Choose departing flight</p>
        <p>Choose returning flight</p>
        <p>Review your trip</p>
      </div>
      <div className={styles.imggrid}>
        <div id={styles.a}>
          <img
            src="https://images.trvl-media.com/hotels/31000000/30790000/30783800/30783748/4ec39822.jpg?impolicy=resizecrop&rw=598&ra=fit"
            alt=""
          />
        </div>
        <div id={styles.b}>
          <img
            src="https://images.trvl-media.com/hotels/31000000/30790000/30783800/30783748/d8672a3a.jpg?impolicy=resizecrop&rw=297&ra=fit"
            alt=""
          />
        </div>
        <div id={styles.c}>
          <img
            src="https://images.trvl-media.com/hotels/31000000/30790000/30783800/30783748/0bfccf64.jpg?impolicy=resizecrop&rw=297&ra=fit"
            alt=""
          />
        </div>
        <div id={styles.d}>
          <img
            src="https://images.trvl-media.com/hotels/31000000/30790000/30783800/30783748/0bfccf64.jpg?impolicy=resizecrop&rw=297&ra=fit"
            alt=""
          />
        </div>
        <div id={styles.e}>
          <img
            src="https://images.trvl-media.com/hotels/31000000/30790000/30783800/30783748/b015ad4a.jpg?impolicy=resizecrop&rw=297&ra=fit"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Photos;
