interface IGame {
  categories: string[];
  id: string;
  image: string;
  name: string;
  jackpotAmount: number | undefined;
}
interface IJackpotAmount {
  [key: string]: number;
}
