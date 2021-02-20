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
import { useVotes } from "../hooks";

const VotingCard = ({ img, title, votes, id, category }) => {
  const { userVotes, handelVote, msg, setMsg } = useVotes(category);
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
            onClick={() => handelVote(votes, id)}
            color={userVotes?.id === id ? "secondary" : "inherit"}
          >
            <Favorite />
          </IconButton>
        }
        title={title}
        subheader={`${votes} Votes`}
      />
    </Card>
  );
};
export default VotingCard;
