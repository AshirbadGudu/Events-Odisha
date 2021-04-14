import { useEffect, useRef, useState } from "react";
import { database } from "../config";

const useHeroines = () => {
  const isMounted = useRef(false);
  const [heroines, setHeroines] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const fetchHeroes = async () => {
    await database.ref(`Heroines/`).on("value", (snap) => {
      const arr = [];
      if (snap.exists())
        for (const key in snap.val()) arr.push({ key, ...snap.val()[key] });
      if (isMounted.current) {
        setHeroines(arr);
        setIsLoaded(true);
      }
    });
  };
  useEffect(() => {
    isMounted.current = true;
    fetchHeroes();
    return () => (isMounted.current = false);
  }, []);
  return {
    heroines,
    isLoaded,
  };
};
export default useHeroines;
