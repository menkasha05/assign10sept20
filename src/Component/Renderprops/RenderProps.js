import React from "react";
import { Typography, IconButton, Button } from "@material-ui/core";

export default function RenderProps(props) {
  return (
    <div style={{ width: 500, height: 500, backgroundColor: "seagreen" }}>
      <Button size="large" color="secondary">
        hello you
      </Button>
      {/* {props.name} */}

      {props.render()}
    </div>
  );
}
