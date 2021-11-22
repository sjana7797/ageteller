import React from "react";
import partyPopper from "../assets/img/party-popper.jpg";
import "animate.css";

function DateStats(props) {
  return (
    <div className="animate__animated animate__fadeIn">
      <h3>Today's Date is {`${props.today}`}</h3>
      <h4>Congrats on {props.age}</h4>
      <img src={partyPopper} alt="Party Popper" width={200} height={200} />
    </div>
  );
}

export default DateStats;
