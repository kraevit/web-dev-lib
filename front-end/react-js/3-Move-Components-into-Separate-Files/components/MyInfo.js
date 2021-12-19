// if the file contains JSX we MUST import REACT
import React from "react";

function MyInfo() {
  return (
    <div style={{ color: "red"; }}>     
      <h1>Krasimir Kraev</h1>
      <p>Front-End Developer</p>
      <ul>
        <li>France</li>
        <li>China</li>
        <li>Egypt</li>
      </ul>
    </div>
  )
}

export default MyInfo;