import React from "react";

function Preloader(props) {
  return (
    <div id={props.load ? "preloader" : "preloader-none"}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div className="preloader-spinner" />
        <div className="preloader-text">Loading...</div>
      </div>
    </div>
  );
}

export default Preloader;
