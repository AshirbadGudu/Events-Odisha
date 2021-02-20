import { useEffect, useState } from "react";
import { useAuth } from ".";
import { database } from "../config";

const useVotes = (category) => {
  const [userVotes, setUserVotes] = useState({});
  const [msg, setMsg] = useState({ text: "", show: false, type: "error" });
  const { currentUser } = useAuth();

  const handelVote = (votes, id) => {
    if (currentUser) {
      if (userVotes.id) {
        const previous = {};
        database
          .ref(`${category}/${userVotes.id}/votes/`)
          .once("value", (snap) => {
            previous.number_of_votes = parseInt(snap.val());
          });
        const reducedVotes = previous.number_of_votes - 1;
        updateVote(votes, category, id);
        database.ref(`${category}/${userVotes.id}/votes/`).set(reducedVotes);
        userVotes.id === id &&
          database.ref(`Votes/${currentUser.uid}/${category}/`).remove();
      } else {
        updateVote(votes, category, id);
      }
    } else {
      setMsg({
        text: "Please login in to participate in vote",
        show: true,
        type: "error",
      });
    }
  };

  const updateVote = async (votes, category, id) => {
    const updatedVotes = parseInt(votes) + 1;
    const timestamp = new Date().toLocaleString();
    await database.ref(`${category}/${id}/votes/`).set(updatedVotes);
    await database
      .ref(`Votes/${currentUser.uid}/${category}/`)
      .set({ id, timestamp });
  };

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
    updateVote,
    handelVote,
    setMsg,
    msg,
  };
};
export default useVotes;
