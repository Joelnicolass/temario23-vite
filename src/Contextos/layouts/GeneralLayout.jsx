import React from "react";
import styles from "./GeneralLayout.module.css";
import Navbar from "../components/Navbar/Navbar";

const GeneralLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Navbar />
      {children}
    </div>
  );
};

export default GeneralLayout;
