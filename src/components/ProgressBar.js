import { useState, useEffect } from "react";

function ProgressBar({ percentage }) {
    let [bar, setBar] = useState(0);
  
  

  useEffect(() => {
    const interval = setInterval(() => {
        setBar((prev) => (prev<100 ? prev +10 : 100));
    },1000)
  })

  return (
    <div className="progress-bar-parent">
    <div className="progress-bar" style={{ width: `${percentage}`}}>
      <span className="progress-bar-text">{percentage}%</span>
    </div>
  </div>
  )
}

export default ProgressBar;
