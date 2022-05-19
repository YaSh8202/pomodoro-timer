import React from "react";
import { useContext } from "react";
import ClockContext from "../store/clock-context";
import ClockControls from "./ClockControls";
import "./Clock.css";

function Clock() {
  const ctx = useContext(ClockContext);
  return (
    <>
      <div className="clock">
        <h3 id="timer-label">{ctx.state}</h3>
        <div id="time-left">
          {`${ctx.minutes < 10 ? "0" + ctx.minutes : ctx.minutes}:${
            ctx.seconds < 10 ? "0" + ctx.seconds : ctx.seconds
          }`}
        </div>
      </div>
      <ClockControls />
    </>
  );
}

export default Clock;
