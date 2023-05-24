import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setSelectedCategory } from "../app/slices/gameSlice";
import Grid from "../components/grid";
import GameCard from "../components/GameCard";
import Error from "../components/Error";

const Category = () => {
  const dispatch = useAppDispatch();
  const games = useAppSelector((state) => state.root.games.activeCategoryGames);
  const { category } = useParams();
  useEffect(() => {
    dispatch(setSelectedCategory(category || null));
  }, [category, dispatch]);

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

export default Category;
