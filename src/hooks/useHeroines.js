import { useEffect, useState } from "react";
import { database } from "../config";

const useHeroines = () => {
  const [heroines, setHeroines] = useState([]);
  useEffect(() => {
    database.ref(`Heroines/`).on("value", (snap) => {
      if (snap.exists()) {
        const obj = snap.val();
        const arr = [];
        for (const key in obj) arr.push({ key, ...obj[key] });
        setHeroines(arr);
      }
    });
  }, []);
  return {
    heroines,
  };
};
export default useHeroines;
