import { useState } from "react";
import styles from "./AdditionalSettings.module.css";

export const AdditionalSettings = ({ onCapital, onNumber, onSpecial }) => {
  const [capitalLetters, setCapitalLetters] = useState("");
  const [numbers, setNumbers] = useState("");
  const [specialChars, setSpecialChars] = useState("");

  const handleCheckbox = (funcOne, funcTwo, val) => {
    funcOne(val);
    funcTwo(val);
  };

  return (
    <div className={styles.additionalSettings}>
      <label htmlFor="capital">Capital letters</label>
      <input
        id="capital"
        type="checkbox"
        onChange={() => handleCheckbox(setCapitalLetters, onCapital, !capitalLetters)}
      ></input>
      <label htmlFor="number">Numbers</label>
      <input id="number" type="checkbox" onChange={() => handleCheckbox(setNumbers, onNumber, !numbers)}></input>
      <label htmlFor="special">Special</label>
      <input
        id="special"
        type="checkbox"
        onChange={() => handleCheckbox(setSpecialChars, onSpecial, !specialChars)}
      ></input>
    </div>
  );
};
