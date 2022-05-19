import React from "react";
import { useContext } from "react";
import ClockContext from "../store/clock-context";
import { Pause, Play, Reset } from "./AllSvgs";
function ClockControls() {
  const ctx = useContext(ClockContext);

  const resetHandler = () => {
    ctx.audioRef.current.pause();
    ctx.audioRef.current.currentTime = 0;
    ctx.setPlayPause(false);
    ctx.setMinutes(25);
    ctx.setSeconds(0);
    ctx.setSessionLength(25);
    ctx.setBreakLength(5);
    ctx.setState("Session");
  };

  return (
    <div>
      <button
        id="start_stop"
        onClick={() => {
          ctx.setPlayPause(!ctx.playPause);
        }}
      >
        {ctx.playPause ? (
          <Pause width={30} fill="#8e8d8a" height={30}  />
        ) : (
          <Play width={30} height={30} fill="#8e8d8a" />
        )}
      </button>
      <button id="reset" onClick={resetHandler}>
        <Reset width={30} height={30} fill="#8e8d8a" />
      </button>
    </div>
  );
}

export default ClockControls;
