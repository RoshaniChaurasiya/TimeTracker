import React, { useEffect, useState } from "react";

export default function Project() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  var timer;
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    timer = setInterval(() => {
      setSeconds(seconds + 1);

      if (seconds === 59) {
        setMinutes(minutes + 1);
        setSeconds(0);
      }
    },1000);

    return () => clearInterval(timer);
  });

  const btnStyle = {
    color: "#050805",
    background: "#3cfa2a",
    border: "none",
    padding: "20px",
    margin:"0 20px",
    borderRadius: "20px",
    cursor: "pointer",
  };

  const restartTime=()=>{
    setSeconds(0);
    setMinutes(0)
  }

  const stopTime=()=>{
    clearInterval(timer);
  }
  return (
    <div>
      <h1 style={{ color: "#f54842", textAlign: "center", fontSize: 80 }}>
        Time:
      </h1>
      <h1 style={{ color: "#1b71fa", textAlign: "center", fontSize: 80 }}>
        {minutes<10 ?"0"+minutes:minutes}:{seconds<10?"0"+seconds:seconds}
      </h1>
      <div style={{display:"flex",justifyContent:'center'}}>
      <button style={btnStyle} onClick={restartTime}>
       Restart
      </button><br />
      <br /><button style={btnStyle} onClick={stopTime}>
      stop
      </button>
      </div>
      <br />
    </div>
  );
}
