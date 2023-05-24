import { Link } from "react-router-dom";
import styles from "./index.module.scss";
import NavLint from "../NavLink";
const Appbar = () => {
  const menus = [
    {
      to: "new",
      label: "New Games",
    },
    {
      to: "slots",
      label: "Slots",
    },
    {
      to: "jackpots",
      label: "Jackpots",
    },
    {
      to: "live",
      label: "Live",
    },
    {
      to: "blackjack",
      label: "Blackjack",
    },
    {
      to: "table",
      label: "Table",
    },
    {
      to: "pocker",
      label: "Pocker",
    },
    {
      to: "other",
      label: "Other",
    },
  ];

  return (
    <div className={styles.appbar}>
      <div>
        <Link to="/">Logo</Link>
      </div>
      <nav className={styles.nav}>
        {menus.map((menu) => (
          <NavLint to={menu.to} label={menu.label} />
        ))}
      </nav>
    </div>
  );
};

export default Appbar;
