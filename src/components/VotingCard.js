import {
  CardMedia,
  Card,
  CardHeader,
  IconButton,
  Avatar,
} from "@material-ui/core";
import { Favorite } from "@material-ui/icons";
import { useVotes } from "../hooks";

const VotingCard = ({ img, title, votes, id, category }) => {
  const { userVotes, handelVote } = useVotes(category);
  return (
    <Card>
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
