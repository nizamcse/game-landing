import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IGameState {
  games: IGame[];
  activeCategory: null | string;
  activeCategoryGames: IGame[];
}

const initialState: IGameState = {
  activeCategory: null,
  games: [],
  activeCategoryGames: [],
};

const gameSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    setGames: (state, action: PayloadAction<IGame[]>) => {
      state.games = [...action.payload];
    },

    setSelectedCategory: (state, action: PayloadAction<string | null>) => {
      if (!action.payload) {
        state.activeCategory = null;
        state.activeCategoryGames = [];
      } else {
        const selectedCategoryGames = state.games.filter((g) => {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          if (action.payload === "other") {
            return (
              g.categories.includes("ball") ||
              g.categories.includes("virtual") ||
              g.categories.includes("fun")
            );
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          } else return g.categories.includes(action.payload!);
        });
        state.activeCategory = action.payload;
        state.activeCategoryGames = !action.payload
          ? [...state.games]
          : [...selectedCategoryGames];
      }
    },
    updateJackpotAmount: (state, action: PayloadAction<IJackpotAmount[]>) => {
      const mappedJackpots: { [key: string]: number } = {};
      for (let i = 0; i < action.payload.length; i++) {
        mappedJackpots[action.payload[i].game] = action.payload[i].amount;
      }
      const games = state.games.map((g) => {
        if (mappedJackpots[g.id]) {
          return { ...g, jackpotAmount: mappedJackpots[g.id] };
        } else return { ...g };
      });
      state.games = [...games];
    },
  },
});

export const { setGames, setSelectedCategory, updateJackpotAmount } =
  gameSlice.actions;
export default gameSlice.reducer;
