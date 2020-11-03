import React, { useState } from "react";
import {
  Typography,
  IconButton,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardActionArea,
  Paper,
} from "@material-ui/core";

export default function Hoc(Component) {
  //
  //   const [state, setState] = React.useState("hocccc");
  const higherComp = (props) => {
    // const [state, setState] = useState("I am Hoc's state");
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card style={{ width: 200, height: 300, backgroundColor: "thistle" }}>
          <CardHeader>THIS IS CALLED HOC</CardHeader>
          <CardContent>
            <Component {...props} hoc="state" state={this} />
          </CardContent>
          <CardActionArea>
            <Button>Click me...!</Button>
          </CardActionArea>
        </Card>
      </div>
    );
  };
  return higherComp;
}
