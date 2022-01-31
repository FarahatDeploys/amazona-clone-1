import React from "react";

export default function MessagBox(props) {
  return <div className={`alert alert-${props.variant || "info"}`}></div>;
}
