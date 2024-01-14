import { useState } from "react";
import styles from "./PasswordGenerator.module.css";

export const PasswordGenerator = ({ onPasswordLength }) => {
  const [inputPassword, setInputPassword] = useState("12");

  const handleInputNum = (val) => {
    setInputPassword(val);
    onPasswordLength(val);
  };

  return (
    <>
      <div className={styles.passwordBox}>
        <label htmlFor="inputPassword">Set password length</label>
        <input
          id="inputPassword"
          onChange={(e) => handleInputNum(e.target.value)}
          type="range"
          defaultValue={inputPassword}
          min={8}
          max={65}
        />
        <p>{inputPassword}</p>
      </div>
    </>
  );
};
