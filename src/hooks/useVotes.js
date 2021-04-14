import { useEffect, useState } from "react";
import { useAuth, useHeroines } from ".";
import { database } from "../config";

const useVotes = (category) => {
  const [userVotes, setUserVotes] = useState({});
  const [msg, setMsg] = useState({ text: "", show: false, type: "error" });
  const { currentUser } = useAuth();
  const { heroines, isLoaded } = useHeroines();

  // Handle Vote
  const handelVote = async (votes, id) => {
    // Check User logged in or not if not logged in then show alert
    if (!currentUser?.uid)
      return setMsg({
        text: "Please login in to participate in vote",
        show: true,
        type: "error",
      });
    // If User logged in
    if (currentUser?.uid && isLoaded) {
      heroines.map((heroine) =>
        database
          .ref(`${category}/${heroine.key}/votes/${currentUser?.uid}`)
          .remove()
      );
      const votingRef = `${category}/${id}/votes/${currentUser?.uid}`;
      await database.ref(votingRef).set(new Date().toString());
    }
  };

  // Remove Vote
  const removeVote = async (id) => {
    await database.ref(`${category}/${id}/votes/${currentUser?.uid}`).remove();
  };

  // Fetch Votes
  useEffect(() => {
    currentUser &&
      database
        .ref(`Votes/${currentUser.uid}/${category}/`)
        .on("value", (snap) => {
          snap.exists() ? setUserVotes(snap.val()) : setUserVotes({});
        });
  }, [category, currentUser]);

  return {
    userVotes,
    removeVote,
    handelVote,
    setMsg,
    msg,
  };
};
export default useVotes;
