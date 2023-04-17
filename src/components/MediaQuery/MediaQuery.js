import React, { useEffect, useState } from "react";

const MediaQuery = (config, callback) => {
  const getDeviceOrientation = () => {
    if (window.orientation === undefined) {
      return "unknown";
    } else if (Math.abs(window.orientation) === 90) {
      return "landscape";
    } else {
      return "portrait";
    }
  };

  const computeReturnValue = () => {
    if (!config) {
      return true;
    }
    const { maxWidth, minWidth, orientation } = config;
    const myOrientation = getDeviceOrientation();
    if (!maxWidth && !minWidth) {
      return true;
    }
    if (!maxWidth) {
      maxWidth = Infinity;
    }
    if (!minWidth) {
      minWidth = -1 * Infinity;
    }
    if (
      windowWidth <= maxWidth &&
      windowWidth >= minWidth &&
      (!orientation || orientation == myOrientation)
    ) {
      return true;
    }
    return false;
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [returnValue, setReturnValue] = useState(computeReturnValue());

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setReturnValue(computeReturnValue);
    if (callback) {
      callback(windowWidth);
    }
  }, [windowWidth]);

  return [returnValue, windowWidth];
};

export default MediaQuery;
