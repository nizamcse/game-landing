import { Outlet } from "react-router-dom";
import Appbar from "../components/AppBar";
import Container from "../components/container";

const MainLayout = () => {
  return (
    <div>
      <Appbar />
      <Container maxWidth="lg" style={{ paddingTop: "120px" }}>
        <Outlet />
      </Container>
    </div>
  );
};

export default MainLayout;
