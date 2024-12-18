import React, { useState } from "react";
import "../css/Widget.css";

const Widget = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleEmbed = () => setIsVisible(!isVisible);

  return (
    <div className="widget-container">
      <button onClick={toggleEmbed}>
        {isVisible ? "Close Widget" : "Open Widget"}
      </button>
      {isVisible && (
        <div className="embedded-widget">
          <h3>Hello, I'm a Widget!</h3>
          <p>This is a React-based widget.</p>
        </div>
      )}
    </div>
  );
};

export default Widget;
