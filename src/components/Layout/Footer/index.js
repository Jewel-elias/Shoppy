import React from "react";
import styles from "../../../styles/footer/footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <hr className={styles.hr} />
      <span>
        © 2024 <span className={styles.Logo}>S</span>hoppy, Inc
      </span>
    </div>
  );
}
