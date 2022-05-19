import { useContext } from "react";
import ClockContext from "../store/clock-context";
import { Plus, Minus } from "./AllSvgs";

const SessionControl = () => {
  const ctx = useContext(ClockContext);

  const increaseSession = () => {
    if (ctx.playPause === true) return;
    if (ctx.sessionLength >= 60) return;
    ctx.setSessionLength((prev) => prev + 1);
    ctx.setMinutes((prev) => prev + 1);
  };
  const decrementSession = () => {
    if (ctx.playPause) return;
    if (ctx.sessionLength <= 1) return;
    ctx.setSessionLength((prev) => prev - 1);
    ctx.setMinutes((prev) => prev - 1);
  };

  return (
    <div>
      <h2 id="session-label">Session Length</h2>
      <div>
        <button id="session-decrement" onClick={decrementSession}>
          <Minus width={25} height={25} fill="#8e8d8a" />
        </button>
        <span id="session-length">{ctx.sessionLength}</span>
        <button id="session-increment" onClick={increaseSession}>
          <Plus width={25} height={25} fill="#8e8d8a" />
        </button>
      </div>
    </div>
  );
};

export default SessionControl;
