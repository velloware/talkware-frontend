import React from "react";
import styles from "./Profile.module.css";

const Profile = ({ rooms }) => {
  return (
    <div className={styles.profileDiv}>
      <div className={styles.titleDiv}>
        <h1 className={styles.profileTitle}>Your Profile</h1>
      </div>
      <div className={styles.profile}>
       
      </div>
    </div>
  );
};

export default Profile;
