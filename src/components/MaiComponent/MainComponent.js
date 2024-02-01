import React from "react";
import styles from "./MainComponent.module.css";

const MainComponent = ({
  title,

  dosData,
  dontData,
  bottomTitle,
  headerFontFamily,
}) => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.wrapper}>
        <h1 className={styles.title} style={{ fontFamily: headerFontFamily }}>
          {title}
        </h1>

        <div className={styles.dosAndDonts}>
          <div className={styles.dosWrapper}>
            <div className={styles.dos}>
              <div className={styles.headingContainer}>
                <h3 className={styles.heading}>{dosData.heading}</h3>
              </div>
              {dosData.data.map((list, i) => (
                <div className={styles.box} key={i}>
                  <div className={styles.circle}></div>
                  <p className={styles.list}>{list}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.dontsWrapper}>
            <div className={styles.donts}>
              <div className={styles.headingContainer}>
                <h3 className={styles.heading}>{dontData.heading}</h3>
              </div>
              {dontData.data.map((list, i) => (
                <div className={styles.box} key={i}>
                  <div className={styles.circle}></div>
                  <p className={styles.list}>{list}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <h4 className={styles.title} style={{ fontFamily: headerFontFamily }}>
          {bottomTitle}
        </h4>
      </div>
    </div>
  );
};

export default MainComponent;
