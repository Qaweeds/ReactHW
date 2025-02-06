import React from "react";

export default function Button({ title = ``, handleClick, className}) {
  return <button className={className} onClick={handleClick}>{title}</button>;
}
