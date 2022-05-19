import { useContext } from "react";
import Clock from "./components/Clock";
import "./App.css";
import BreakControl from "./components/BreakControl";
import SessionControl from "./components/SessionControl";
import ClockContext from "./store/clock-context";

function App() {
  const ctx = useContext(ClockContext);
  return (
    <div className="App">
      <div>
        <h1 id="title" >25 + 5 Clock</h1>
        <div id="controls">
          <BreakControl />
          <SessionControl />
        </div>
        <Clock />
        <audio id="beep" preload="auto" src={ctx.audioSrc} ref={ctx.audioRef} />
      </div>
    </div>
  );
}

export default App;
