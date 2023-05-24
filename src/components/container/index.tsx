import { ReactNode } from "react";
import cn from "classnames";
import styles from "./index.module.scss";

type Sizes = "sm" | "md" | "lg" | "xl";

type Props = {
  maxWidth: Sizes;
  children: ReactNode;
};

const Container = ({
  maxWidth,
  children,
  ...props
}: Props & React.HTMLAttributes<HTMLDivElement>) => {
  const classNames = cn({
    [styles.container]: true,
    [styles[`container_${maxWidth}`]]: maxWidth,
  });

  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
};

export default Container;
