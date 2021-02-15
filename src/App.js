import "./style.css";
import { AuthProvider } from "./config";
import Router from "./Router";

const App = () => (
  <AuthProvider>
    <Router />
  </AuthProvider>
);

export default App;
