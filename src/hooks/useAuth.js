import { useContext } from "react";
import { AuthContext } from "../config";

const useAuth = () => useContext(AuthContext);
export default useAuth;
