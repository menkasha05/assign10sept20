import React from "react";
import Hoc from "./Hoc";

function Hcomp1(props) {
  return (
    <div>
      I AM {props.name} {props.hoc}
    </div>
  );
}
export default Hoc(Hcomp1);
