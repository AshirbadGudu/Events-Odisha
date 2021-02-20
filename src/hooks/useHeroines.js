import { useEffect, useState } from "react";
import { database } from "../config";

const useHeroines = () => {
  const [heroines, setHeroines] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    database.ref(`Heroines/`).on("value", (snap) => {
      const arr = [];
      if (snap.exists())
        for (const key in snap.val()) arr.push({ key, ...snap.val()[key] });
      setHeroines(arr);
      setIsLoaded(true);
    });
  }, []);
  return {
    heroines,
    isLoaded,
  };
};
export default useHeroines;
