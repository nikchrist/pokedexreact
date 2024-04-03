import React from "react";
function ToTopButton({ visible }) {
  return (
    <React.Fragment>
      <React.Fragment>
        <div id="totopbtn" style={{ display: visible ? "inline" : "none" }}>
          ^
        </div>
      </React.Fragment>
    </React.Fragment>
  );
}

export default ToTopButton;
