import {
  CardMedia,
  Card,
  CardHeader,
  IconButton,
  Avatar,
  Snackbar,
} from "@material-ui/core";
import { Favorite } from "@material-ui/icons";
import { Alert } from "@material-ui/lab";
import { useAuth, useVotes } from "../hooks";

const VotingCard = ({ img, title, votes, id, category }) => {
  const { handelVote, msg, setMsg, removeVote } = useVotes(category);
  const { currentUser } = useAuth();

  return (
    <Card>
      <Snackbar
        open={msg.show}
        autoHideDuration={3000}
        onClose={() => setMsg({ text: "", show: false, type: "error" })}
      >
        <Alert
          onClose={() => setMsg({ text: "", show: false, type: "error" })}
          severity={msg.type}
        >
          {msg.text}
        </Alert>
      </Snackbar>
      <CardMedia
        image={img}
        style={{ height: "250px", backgroundPosition: "top" }}
      />

      <CardHeader
        avatar={<Avatar>{title.charAt(0)}</Avatar>}
        action={
          <IconButton
            onClick={() =>
              currentUser?.uid in votes ? removeVote(id) : handelVote(votes, id)
            }
            color={currentUser?.uid in votes ? "secondary" : "inherit"}
          >
            <Favorite />
          </IconButton>
        }
        title={title}
        subheader={`${Object.keys(votes).length} Votes`}
      />
    </Card>
  );
};
export default VotingCard;
