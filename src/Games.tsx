import { useState, useEffect } from "react";
import Grid from "./components/grid";
import Container from "./components/container";
import GameCard from "./components/GameCard";
import { useGamesQuery } from "./services/games";

const Games = () => {
  const { isLoading, data, error } = useGamesQuery({});
  const [games, setGames] = useState<IGame[]>([]);
  useEffect(() => {
    if (data) {
      setGames(data);
    }
  }, [data]);

  if (isLoading) {
    return <div data-testid="users-loading">Loading...</div>;
  }

  if (error) {
    return <div data-testid="users-error">Error!</div>;
  }

  console.log("loading,error,data", isLoading, error, data);

  return (
    <Container maxWidth="lg" style={{ paddingTop: "120px" }}>
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
    </Container>
  );
};

export default Games;
