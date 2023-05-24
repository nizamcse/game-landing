import { apiSlice } from "../app/api/apiSlice";
import { updateJackpotAmount } from "../app/slices/gameSlice";

export const gamesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    games: builder.query<IGame[], object>({
      query: () => `/front-end-test/games.php`,
      providesTags: ["games"],
    }),
    jackpots: builder.query<IJackpotAmount[], object>({
      query: () => `/front-end-test/jackpots.php`,
      async onQueryStarted(_arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          if (result) dispatch(updateJackpotAmount(result.data));
        } catch (e) {
          /* empty */
        }
      },
    }),
  }),
});

export const { useGamesQuery, useJackpotsQuery } = gamesApi;
