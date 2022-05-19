import { createContext, useEffect, useRef, useState } from "react";

const ClockContext = createContext({
  breakLength: 0,
  setBreakLength: () => {},
  sessionLength: 0,
  setSessionLength: () => {},
  seconds: 0,
  setSeconds: () => {},
  playPause: false,
  setPlayPause: () => {},
  minutes: 0,
  setMinutes: () => {},
  state: "",
  setState: () => {},
  audioSrc: "",
  audioRef: 0,
});

export const ClockContextProvider = (props) => {
  const [state, setState] = useState("Session");
  const [bLength, setBLength] = useState(5);
  const [sLength, setSLength] = useState(25);
  const [playPause, setPlayPause] = useState(false);
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [play, setPlay] = useState(false);
  const audioRef = useRef();
  let src =
    "https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav";

  if (minutes === 0 && seconds === 0 && play) {
    audioRef.current.load();
    audioRef.current.play();
  }

  const updateTimeHandler = () => {
    minutes === 0 ? setPlay(true) : setPlay(false);

    if (minutes === 0 && seconds === 0) {
      if (state === "Session") {
        setState("Break");
        setSeconds(0);
        setMinutes(bLength);
      } else {
        setState("Session");
        setSeconds(0);
        setMinutes(sLength);
      }
    } else {
      if (seconds === 0) {
        setMinutes((minutes) => minutes - 1);
        setSeconds(59);
      } else {
        setSeconds((seconds) => seconds - 1);
      }
    }
  };

  useEffect(() => {
    if (bLength < 0) setBLength((prev) => Math.abs(prev));
    if (sLength < 0) setSLength((prev) => Math.abs(prev));
    if (minutes < 0) setMinutes((prev) => Math.abs(prev));
    if (seconds < 0) setSeconds((prev) => Math.abs(prev));
    if (playPause) {
      const timer = setTimeout(updateTimeHandler, 1000);
      return () => {
        clearTimeout(timer);
      };
    }
  });

  const contextValue = {
    breakLength: bLength,
    sessionLength: sLength,
    setBreakLength: setBLength,
    setSessionLength: setSLength,
    seconds,
    minutes,
    setSeconds,
    setMinutes,
    playPause,
    setPlayPause,
    state,
    setState,
    audioSrc: src,
    audioRef,
  };

  return (
    <ClockContext.Provider value={contextValue}>
      {props.children}
    </ClockContext.Provider>
  );
};

export default ClockContext;
