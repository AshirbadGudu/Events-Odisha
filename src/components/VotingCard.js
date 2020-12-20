import { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { database } from "../config/firebaseConfig";
import { useAuth } from "../config/AuthContext";

export default function VotingCard({ img, title, votes, id, category }) {
  const [userVote, setUserVote] = useState({});
  const { currentUser } = useAuth();
  const handelVote = () => {
    if (currentUser) {
      if (userVote.id) {
        const previous = {};
        database
          .ref(`${category}/${userVote.id}/votes/`)
          .once("value", (snap) => {
            previous.number_of_votes = parseInt(snap.val());
          });
        const reducedVotes = previous.number_of_votes - 1;
        updateVote(votes, category, id);
        database.ref(`${category}/${userVote.id}/votes/`).set(reducedVotes);
        userVote.id === id &&
          database.ref(`Votes/${currentUser.uid}/${category}/`).remove();
      } else {
        updateVote(votes, category, id);
      }
    } else {
      alert("Please login in to participate in vote");
    }
  };
  const updateVote = (votes, category, id) => {
    const updatedVotes = parseInt(votes) + 1;
    const timestamp = new Date().toLocaleString();
    database.ref(`${category}/${id}/votes/`).set(updatedVotes);
    database
      .ref(`Votes/${currentUser.uid}/${category}/`)
      .set({ id, timestamp });
  };
  useEffect(() => {
    currentUser &&
      database
        .ref(`Votes/${currentUser.uid}/${category}/`)
        .on("value", (snap) => {
          if (snap.exists()) {
            setUserVote(snap.val());
          } else {
            setUserVote({});
          }
        });
  }, [category, currentUser]);
  return (
    <Card>
      <CardMedia
        image={img}
        style={{ height: "250px", backgroundPosition: "top" }}
      />
      <CardHeader
        avatar={<Avatar aria-label="recipe">{title.charAt(0)}</Avatar>}
        action={
          <IconButton
            aria-label="settings"
            onClick={handelVote}
            color={currentUser && userVote.id === id ? "secondary" : "inherit"}
          >
            <FavoriteIcon />
          </IconButton>
        }
        title={title}
        subheader={`${votes} Votes`}
      />
    </Card>
  );
}
