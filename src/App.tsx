import { useEffect } from "react";
import "./App.css";
import Router from "./routes";
import { BrowserRouter } from "react-router-dom";
import { useGamesQuery, useJackpotsQuery } from "./services/games";
import { useAppDispatch } from "./app/hooks";
import { setGames } from "./app/slices/gameSlice";

function App() {
  const { isLoading, data, error } = useGamesQuery({});
  const { refetch } = useJackpotsQuery({});
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (data) {
      dispatch(setGames(data));
    }
  }, [data, dispatch]);

  useEffect(() => {
    const timer = setTimeout(() => refetch(), 5000);
    return () => clearTimeout(timer);
  });

  if (isLoading) {
    return <div data-testid="users-loading">Loading...</div>;
  }

  if (error) {
    return <div data-testid="users-error">Error!</div>;
  }
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
