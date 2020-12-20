import {
  AppBar,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { AccountCircle, ExitToApp } from "@material-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import { useAuth } from "../config/AuthContext";
const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const handelLogout = async () => {
    await logout();
  };
  return (
    <AppBar position="sticky">
      <Container>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            <RouterLink
              style={{ color: "white", textDecoration: "none" }}
              to="/"
            >
              <img src="/logo.png" style={{ margin: "1vh 0" }} alt="" />
            </RouterLink>
          </Typography>

          <Button component={RouterLink} to="/" color="inherit">
            Home
          </Button>
          {currentUser ? (
            <Button
              onClick={handelLogout}
              color="inherit"
              startIcon={<ExitToApp />}
            >
              Logout
            </Button>
          ) : (
            <Button
              component={RouterLink}
              to="/login"
              color="inherit"
              startIcon={<AccountCircle />}
            >
              Login
            </Button>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
