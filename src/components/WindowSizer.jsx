import React, { useState, useEffect } from "react";

const WindowSizer = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div className="windowSizer">Window Width: {windowWidth}px</div>;
};

export { WindowSizer };
