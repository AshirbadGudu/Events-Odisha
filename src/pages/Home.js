import { Container, Grid, Typography } from "@material-ui/core";
import { VotingCard, VotingCardSkeleton } from "../components";
import { useHeroines } from "../hooks";
import Layout from "../Layout";

const Home = () => {
  const { heroines, isLoaded } = useHeroines();
  return (
    <Layout>
      <Container style={{ paddingTop: "5vh" }}>
        <Typography variant="h6">Vote For Best Odia Heroines</Typography>
        <Grid
          container
          spacing={2}
          style={{ marginTop: "2vh" }}
          justify="center"
          alignItems="center"
        >
          {isLoaded ? (
            heroines?.map((heroine, key) => (
              <Grid item sm={4} key={key}>
                <VotingCard
                  id={heroine.key}
                  img={heroine.img}
                  title={heroine.name}
                  votes={heroine?.votes || {}}
                  category={"Heroines"}
                />
              </Grid>
            ))
          ) : (
            <VotingCardSkeleton />
          )}
        </Grid>
      </Container>
    </Layout>
  );
};

export default Home;
