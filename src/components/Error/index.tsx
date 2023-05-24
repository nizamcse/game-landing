import styles from "./index.module.scss";
type Props = {
  message: string;
};

const Error = ({ message }: Props) => {
  return <div className={styles.error}>{message}</div>;
};

export default Error;
