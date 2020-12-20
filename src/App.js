import "./style.css";
import { AuthProvider } from "./config/AuthContext";
import Router from "./Router";

const App = () => (
  <AuthProvider>
    <Router />
  </AuthProvider>
);

export default App;
