import styles from "./Output.module.css";

export const Output = ({ output }) => {
  return <div className={styles.output}>{output}</div>;
};
