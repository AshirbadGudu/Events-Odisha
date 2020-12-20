import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { Card, CardContent, CardHeader, Container } from "@material-ui/core";
import { auth, uiConfig } from "../config/firebaseConfig";

export default class SignInScreen extends React.Component {
  render() {
    return (
      <Container style={{ paddingTop: "5vh" }}>
        <Card style={{ width: "50%", margin: "auto" }}>
          <CardHeader
            style={{ textAlign: "center", textTransform: "uppercase" }}
            title="REGISTER TO PANEL"
            subheader="Log in now for vote"
          />
          <CardContent>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
          </CardContent>
        </Card>
      </Container>
    );
  }
}
