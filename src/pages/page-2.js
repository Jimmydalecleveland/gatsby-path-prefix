import React from "react";

const Page2 = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Page 2</h1>
      <h2>Query Params: {props.location.search}</h2>
    </div>
  );
};

export default Page2;
