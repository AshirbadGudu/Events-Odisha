import { Navbar } from "./components";

const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
);
export default Layout;
