import React from "react";

function TopNav(props) {
  return (
    <div className="top-nav">
      <ul>
        <li><a onClick={ () => props.changeCategory("headlights")} href="#">Car lights</a></li>
        <li><a onClick={ () => props.changeCategory("tires")} href="#">Car wheels</a></li>
        <li><a onClick={ () => props.changeCategory("bumpers")} href="#">Car bumpers</a></li>
        <li><a onClick={ () => props.changeCategory("audio")} href="#">Car audiosystem</a></li>
        <li><a onClick={ () => props.changeCategory("headlights")} href="#">Head Lights</a></li>
        <li><a href="contact.html">Feedback</a></li>
  <div className="clear"> </div>
      </ul>
    </div>
  );
}

export default TopNav;
