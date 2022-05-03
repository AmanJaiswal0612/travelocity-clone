import React from "react";
import styles from "./rooms.module.css";

const Rooms = () => {
  return (
    <>
      <div className={styles.conatiner}>
        <div className={styles.imgDiv}>
          <img
            src="https://images.trvl-media.com/hotels/31000000/30790000/30783800/30783748/20dc6d28.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium"
            alt=""
          />
        </div>
        <h3>Room,Lagoon View</h3>
        <div>
          <div className={styles.icon}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/3916/3916996.png"
              alt=""
            />
            <p>441 sq ft</p>
          </div>
          <div className={styles.icon}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/3914/3914775.png"
              alt=""
            />
            <p>Sleeps 3</p>
          </div>
          <div className={styles.icon}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/5074/5074654.png"
              alt=""
            />
            <p> 1 King Bed OR 2 Twin Beds</p>
          </div>
          <div className={styles.icon}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/3914/3914600.png"
              alt=""
            />
            <p>Free high-speed internet</p>
          </div>
          <div className={styles.icon}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/5074/5074014.png"
              alt=""
            />
            <p>Free Self Parking</p>
          </div>
          <div>
            <a href=".#">More details </a>
          </div>
          <hr />
        </div>
        <div className={styles.extras}>
          <h3>Extras</h3>

          <div>
            <input type="radio" />
            <p>Breakfast buffet </p>
            <div>
              <p>+ $0</p>
            </div>
          </div>
          <div>
            <div>
              <input type="radio" />
              <p>Breakfast buffet + Airport shuttle</p>
            </div>
            <div>
              <p>+$40</p>
            </div>
          </div>
          <div>
            <div>
              <input type="radio" />
              <p>Half board + Special deal More details</p>
            </div>
            <div>
              <p>+$50</p>
            </div>
          </div>
          <div>
            <div>
              <input type="radio" />
              <p>Full board + Special deal More details</p>
            </div>
            <div>
              <p>+$32</p>
            </div>
          </div>
          <div>
            <div>
              <input type="radio" />
              <p>Resort credit + Special deal More details</p>
            </div>
            <div>
              <p>+$97</p>
            </div>
          </div>
        </div>
        <div className={styles.btndiv}>
          <div>
            {" "}
            <h1>+ $30</h1>
          </div>
          <div>
            <button>Reserve</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rooms;
