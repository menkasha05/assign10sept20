import React from "react";
import Hoc from "./Hoc";

function Hcomp(props) {
  return <div>Hi I am normal component...!!! {props.hoc}</div>;
}
export default Hoc(Hcomp);
