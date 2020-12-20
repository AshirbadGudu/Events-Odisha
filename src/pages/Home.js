import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Container, Grid, Typography } from "@material-ui/core";
import VotingCard from "../components/VotingCard";
import { database } from "../config/firebaseConfig";

const Home = () => {
  const [heroines, setHeroines] = useState([]);
  useEffect(() => {
    database.ref(`Heroines/`).on("value", (snap) => {
      if (snap.exists()) {
        const obj = snap.val();
        const arr = [];
        for (const key in obj) {
          arr.push({ key, ...obj[key] });
        }
        setHeroines(arr);
      }
    });
  }, []);
  return (
    <>
      <Navbar />
      <Container style={{ paddingTop: "5vh" }}>
        <Typography variant="h6">Vote For Best Odia Heroines</Typography>
        <Grid
          container
          spacing={2}
          style={{ marginTop: "2vh" }}
          justify="center"
          alignItems="center"
        >
          {heroines.map((heroine, key) => (
            <Grid item sm={4} key={key}>
              <VotingCard
                id={heroine.key}
                img={heroine.img}
                title={heroine.name}
                votes={heroine.votes}
                category={"Heroines"}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Home;
