import React from "react";
import styles from "./rooms.module.css";

const Rooms = ({ a, b, c, d, e, f, g, h, i, j, k, l, m, n, o }) => {
  console.log("el", a);
  return (
    <>
      {/* <div className={styles.conatiner}>
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
            <p>{el.el.a}</p>
          </div>
          <div className={styles.icon}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/3914/3914775.png"
              alt=""
            />
            <p> {el.el.b}</p>
          </div>
          <div className={styles.icon}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/5074/5074654.png"
              alt=""
            />
            <p> {el.el.c} </p>
          </div>
          <div className={styles.icon}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/3914/3914600.png"
              alt=""
            />
            <p> {el.el.d} </p>
          </div>
          <div className={styles.icon}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/5074/5074014.png"
              alt=""
            />
            <p> {el.el.e} </p>
          </div>
          <div>
            <a href=".#">More details </a>
          </div>
          <hr />
        </div>
        <div className={styles.extras}>
          <h3>Extras</h3>

          <div>
            <div>
              <input type="radio" />
              <p> {el.el.f} </p>
            </div>
            <div>
              <p> {el.el.g}</p>
            </div>
          </div>
          <div>
            <div>
              <input type="radio" />
              <p> {el.el.h} </p>
            </div>
            <div>
              <p> {el.el.i}</p>
            </div>
          </div>
          <div>
            <div>
              <input type="radio" />
              <p>{el.el.j} </p>
            </div>
            <div>
              <p> {el.el.k}</p>
            </div>
          </div>
          <div>
            <div>
              <input type="radio" />
              <p> {el.el.l} </p>
            </div>
            <div>
              <p> {el.el.m} </p>
            </div>
          </div>
          <div>
            <div>
              <input type="radio" />
              <p> {el.el.n}</p>
            </div>
            <div>
              <p> {el.el.o}</p>
            </div>
          </div>
        </div>
        <div className={styles.btndiv}>
          <div>
            {" "}
            <h1>+ $30</h1>
            <button>Reserve</button>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Rooms;
