import React from "react";
import { Typography, IconButton, Button } from "@material-ui/core";
import ModalComp from "./Modal";
export default function CompModal(props) {
  console.log(props);
  const { handleOpen } = props;
  console.log(handleOpen);
  return (
    <div>
      I am Modal reuse
      <Button color="secondary" {...props} onClick={handleOpen}>
        confirm
      </Button>
      <ModalComp render={() => <h1>heelo</h1>}></ModalComp>
    </div>
  );
}
