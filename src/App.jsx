import "./App.css";
import styles from "./App.module.css";
import { Layout } from "./Layout/Layout";
import { PasswordGenerator } from "./components/PasswordGenerator/PasswordGenerator";
import { AdditionalSettings } from "./components/AdditionalSettings/AdditionalSettings";
import { Output } from "./components/Output/Output";
import { useState } from "react";
import { passwordGenerator } from "./utils/passwordGenerator";

function App() {
  const [length, setLength] = useState("12");
  const [capital, setCapital] = useState("");
  const [number, setNumber] = useState("");
  const [special, setSpecial] = useState("");
  const [outputPass, setOutputPass] = useState("");

  const generatePassword = () => {
    const output = passwordGenerator(capital, number, special, length);
    setOutputPass(output);
  };

  return (
    <>
      <Layout>
        <PasswordGenerator onPasswordLength={(len) => setLength(len)} />
        <AdditionalSettings
          onCapital={(val) => setCapital(val)}
          onNumber={(val) => setNumber(val)}
          onSpecial={(val) => setSpecial(val)}
        />
        {/* <button className={styles.btn} onClick={generatePassword}> */}
        <button className={styles.btn} onClick={generatePassword}>
          Generate Password
        </button>
        <Output output={outputPass}></Output>
      </Layout>
    </>
  );
}

export default App;
