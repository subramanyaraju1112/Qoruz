import React from "react";

export const Dots = (props: any) => {
  const {active} = props;
  return (
    <ul className="dots-scroll">
      <li className={` ${active == 1 ? "active" : ""}`}><span className="dot"></span></li>
      <li className={` ${active == 2 ? "active" : ""}`}><span className="dot"></span></li>
      <li className={` ${active == 3 ? "active" : ""}`}><span className="dot"></span></li>
      <li className={` ${active == 4 ? "active" : ""}`}><span className="dot"></span></li>
    </ul>
  )
}

