import cn from "classnames";
import { Image } from "../styled/image";
import styles from "./index.module.scss";
import GameDescription from "./GameDescription";
import Ribbon from "../Ribbon";
import { Jackpot } from "./Jackpot";

type Props = {
  game: IGame;
};

const GameCard = ({ game }: Props) => {
  const classNames = cn({
    [styles.card]: true,
  });
  const classNames2 = cn({
    [styles["card_description"]]: true,
  });
  return (
    <div className={classNames}>
      {game.jackpotAmount && <Jackpot>&#8356; {game.jackpotAmount}</Jackpot>}
      <Image src={game.image} alt={game.name} title={game.name} />
      <GameDescription title={game.name} className={classNames2} />
      {game.categories.includes("new") ? (
        <Ribbon label="new" position="top-right" />
      ) : game.categories.includes("top") ? (
        <Ribbon label="top" position="top-right" />
      ) : null}
    </div>
  );
};

export default GameCard;
