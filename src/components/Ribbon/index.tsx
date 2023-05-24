import cn from "classnames";
import styles from "./index.module.scss";

type Position = "top-left" | "top-right";

type Props = {
  position: Position;
  label: string;
};

const Ribbon = ({ position, label }: Props) => {
  const classNames = cn({
    [styles.ribbon]: true,
    [styles[`ribbon_top_left`]]: position === "top-left",
    [styles[`ribbon_top_right`]]: position === "top-right",
  });
  const spanClassNames = cn({
    [styles[`ribbon_span`]]: true,
    [styles[`ribbon_top_right_span`]]: position === "top-right",
    [styles[`ribbon_top_left_span`]]: position === "top-left",
  });
  return (
    <div className={classNames}>
      <span className={spanClassNames}>{label}</span>
    </div>
  );
};

export default Ribbon;
