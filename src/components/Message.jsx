import React from "react";
import { useParams } from "react-router-dom";
function Message(props) {
  let { route } = useParams();
  console.log(route);
  return (
    <div className="message">
      <h1>User Entered this route {route}</h1>
    </div>
  );
}

export default Message;
