import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import styles from "./index.module.scss";

type Props = {
  to: string;
  label: string;
};

const NavLint = ({ to, label }: Props) => {
  const activeLink = useAppSelector((state) => state.root.games.activeCategory);
  return (
    <Link
      className={`${styles.link} ${
        activeLink && activeLink === to ? styles.linkActive : ""
      }`}
      to={`/${to}`}
    >
      {label}
    </Link>
  );
};

export default NavLint;
