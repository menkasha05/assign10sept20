import React from "react";
import RenderProps from "./RenderProps";
import RenderProps1 from "./RenderProps1";

export default function RenderMain() {
  // const handlesubmit=()=>{
  //     setState()
  // }
  return (
    <div>
      <RenderProps
        //   handleSubmit={handleSubmit}
        //   name='sohan'
        render={() => (
          <div>
            <h1>I am render props</h1>
            <RenderProps1 name="soham" />
          </div>
        )}
      />
    </div>
  );
}
