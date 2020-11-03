import React from "react";
import ModalComp from "./Modal";
import CompModal from "./CompModal";
import { Typography, IconButton, Button } from "@material-ui/core";

export default function CompModalReuse(props) {
  console.log(props);
  return (
    <div>
      CompModalReuse
      <ModalComp render={(props) => <CompModal {...props} />}></ModalComp>
    </div>
  );
}
