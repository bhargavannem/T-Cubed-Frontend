import React, { useState } from "react";
import "./style.css";

var count = 0;
function Board() {
  return (
    <div id="board_container">
      <Box id="1" />
      <div className="border"></div>
      <Box id="2" />
      <div className="border"></div>
      <Box id="3" />
      <div className="border"></div>
      <div className="border"></div>
      <div className="border"></div>
      <div className="border"></div>
      <div className="border"></div>
      <Box id="4" />
      <div className="border"></div>
      <Box id="5" />
      <div className="border"></div>
      <Box id="6" />

      <div className="border"></div>
      <div className="border"></div>
      <div className="border"></div>
      <div className="border"></div>
      <div className="border"></div>
      <Box id="7" />
      <div className="border"></div>
      <Box id="8" />
      <div className="border"></div>
      <Box id="9" />
    </div>
  );
}
function handleClick(id) {
  let boxElement = document.getElementById(id);
  console.log(boxElement);
  let boxClass = boxElement.className;
  if (
    boxClass[boxClass.length - 1] != "X" &&
    boxClass[boxClass.length - 1] != "O"
  ) {
    if (count % 2) {
      boxElement.className += " X";
    } else {
      boxElement.className += " O";
    }
    count += 1;
  }
}
function Box(props) {
  return (
    <div className="box_element" onClick={() => handleClick(props.id)}>
      <div className="inner_box" id={props.id}></div>
    </div>
  );
}
export default Board;
