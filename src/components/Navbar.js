import {
  AppBar,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { AccountCircle, ExitToApp } from "@material-ui/icons";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { useAuth } from "../hooks";
const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  const handelLogout = async () => {
    try {
      await logout();
      history.push("/Login");
    } catch (error) {
      alert("Error", error.message);
    }
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
          {currentUser?.uid ? (
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
