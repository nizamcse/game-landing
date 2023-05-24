import { useEffect } from "react";
import Grid from "../components/grid";
import GameCard from "../components/GameCard";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import Error from "../components/Error";
import { setSelectedCategory } from "../app/slices/gameSlice";

const Home = () => {
  const dispatch = useAppDispatch();
  const games = useAppSelector((state) => state.root.games.games);
  useEffect(() => {
    dispatch(setSelectedCategory(null));
  }, [dispatch]);

  return (
    <div>
      {games.length === 0 && <Error message="No content found." />}
      {games.length > 0 && (
        <Grid spacing={2} container>
          {games.map((item, index) => (
            <Grid
              key={`game-${item.name}-${index}`}
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
            >
              <GameCard game={item} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Home;
