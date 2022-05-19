import { useContext } from "react";
import ClockContext from "../store/clock-context";
import { Plus, Minus } from "./AllSvgs";

const BreakControl = () => {
  const ctx = useContext(ClockContext);

  const increaseBreak = () => {
    if (ctx.playPause === true) return;
    if (ctx.breakLength >= 60) return;
    ctx.setBreakLength((prev) => prev + 1);
  };
  const decrementBreak = () => {
    if (ctx.playPause) return;
    if (ctx.breakLength <= 1) return;
    ctx.setBreakLength((prev) => prev - 1);
  };

  return (
    <div>
      <h2 id="break-label">Break Length</h2>
      <div>
        <button id="break-decrement" onClick={decrementBreak}>
          <Minus width={25} height={25} fill="#8e8d8a" />
        </button>
        <span id="break-length">{ctx.breakLength}</span>
        <button id="break-increment" onClick={increaseBreak}>
          <Plus width={25} height={25} fill="#8e8d8a" />
        </button>
      </div>
    </div>
  );
};

export default BreakControl;
