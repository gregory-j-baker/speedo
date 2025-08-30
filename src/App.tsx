import { useState, useMemo } from "react";
import "./index.css";

function App() {
  const [speed, setSpeed] = useState<number | "">("");
  const [time, setTime] = useState<number | "">("");
  const [newSpeed, setNewSpeed] = useState<number | "">("");

  const distance = useMemo(() => {
    if (typeof speed === "number" && typeof time === "number") {
      return (speed * time) / 60;
    }
    return 0;
  }, [speed, time]);

  const newTime = useMemo(() => {
    if (typeof newSpeed === "number" && newSpeed > 0 && distance > 0) {
      return (distance / newSpeed) * 60;
    }
    return 0;
  }, [newSpeed, distance]);

  return (
    <div className="container">
      <h1>Speed Calculator</h1>
      <div className="card">
        <div className="input-group">
          <label>Current Speed (km/h)</label>
          <input
            type="number"
            value={speed}
            onChange={(e) => setSpeed(e.target.value === "" ? "" : parseFloat(e.target.value))}
            placeholder="e.g., 80"
          />
        </div>
        <div className="input-group">
          <label>Travel Time (minutes)</label>
          <input
            type="number"
            value={time}
            onChange={(e) => setTime(e.target.value === "" ? "" : parseFloat(e.target.value))}
            placeholder="e.g., 60"
          />
        </div>
        <div className="input-group">
          <label>New Speed (km/h)</label>
          <input
            type="number"
            value={newSpeed}
            onChange={(e) => setNewSpeed(e.target.value === "" ? "" : parseFloat(e.target.value))}
            placeholder="e.g., 100"
          />
        </div>
        {newTime > 0 && (
          <div className="result">
            <h2>Updated Travel Time</h2>
            <p>{newTime.toFixed(2)} minutes</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;