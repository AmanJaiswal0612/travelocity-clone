import React from "react";
import styles from "./rooms.module.css";
const DetailsPage = () => {
  return (
    <div className={styles.maindiv}>
      <div className={styles.infoDiv}>
        <div className={styles.heading}>
          <h1>
            DoubleTree by Hilton Hotel Goa - Arpora - Baga 5.0 star property
          </h1>
          <img
            style={{ height: "70px", width: "70px" }}
            src="https://cdn-icons-png.flaticon.com/512/992/992001.png"
            alt=""
          />
          <h3>3.5/5 Good</h3>
          <p>Guests rated this property 3.7/5 for cleanliness.</p>
          <a href=".#">See all 124 rewiews</a>
        </div>
        {/* 2nd div info  */}
        <div>
          <div className={styles.info}>
            <h3>Popular Amenities</h3>
            <div className={styles.div1}>
              <div>
                <div className={styles.map}>
                  <img
                    src="https://cdn-icons.flaticon.com/png/512/2901/premium/2901643.png?token=exp=1651726230~hmac=01671efe4d3b3ba337909c2e452fdd02"
                    alt=""
                  />
                  <p>Free Wifi</p>
                </div>
                <div className={styles.map}>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1076/1076928.png"
                    alt=""
                  />
                  <p>Pet Friendly</p>
                </div>
                <div className={styles.map}>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/900/900233.png"
                    alt=""
                  />
                  <p>Air Conditioning</p>
                </div>
                <a href=".#">See all</a>
              </div>
              {/* 2ns half  */}
              <div>
                <div className={styles.map}>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2438/2438018.png"
                    alt=""
                  />
                  <p>Spa</p>
                </div>
                <div className={styles.map}>
                  <img
                    src="https://cdn-icons.flaticon.com/png/512/562/premium/562678.png?token=exp=1651726652~hmac=b2a367aaf78b986df20f7ab4ada2ca68"
                    alt=""
                  />
                  <p>Resto</p>
                </div>
                <div className={styles.map}>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/563/563828.png"
                    alt=""
                  />
                  <p>Gym</p>
                </div>
              </div>
            </div>
          </div>

          {/* cleaning div  */}

          <div className={styles.info}>
            <h3>Popular Amenities</h3>
            <div className={styles.div1}>
              <div>
                <div className={styles.map}>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/995/995053.png"
                    alt=""
                  />
                  <p>Cleaned with disinfectant</p>
                </div>
                <div className={styles.map}>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/66/66163.png"
                    alt=""
                  />
                  <p>72-hour vacancy between guest room stays</p>
                </div>
                <a href=".#">See all</a>
              </div>
              {/* 2ns half  */}
              <div>
                <div className={styles.map}>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2913/2913371.png"
                    alt=""
                  />
                  <p>Hand sanitizer provided</p>
                </div>
                <div className={styles.map}>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3365/3365408.png"
                    alt=""
                  />
                  <p>Personal protective equipment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* map div starts   */}
      <div className={styles.mapDiv}>
        <div>
          <iframe
            width="393"
            height="290"
            src="https://www.youtube.com/embed/CHSnz0bCaUk"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <h3>Explore the area</h3>
        <div className={styles.map}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3179/3179068.png"
            alt=""
          />
          <p>The Bigo Lift (Il Bigo)</p>
          <div>
            {" "}
            <p>13 min walk</p>
          </div>
        </div>
        <div className={styles.map}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3179/3179068.png"
            alt=""
          />
          <p>Port of Genoa Cruise Ship Terminal</p>
          <div>
            <p>13 min walk</p>
          </div>
        </div>
        <div className={styles.map}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3179/3179068.png"
            alt=""
          />
          <p>Old Port</p>
          <div>
            {" "}
            <p>13 min walk</p>
          </div>
        </div>
        <div className={styles.map}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/723/723955.png"
            alt=""
          />
          <p>Genoa (GOA-Cristoforo Colombo)</p>
          <div>
            <p>8 min walk</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
