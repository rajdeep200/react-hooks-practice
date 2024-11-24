import React from "react";
import { useLayoutEffect } from "react";
import { useState, useEffect } from "react";
import { useRef } from "react";

const UseLayoutEffectDemo = () => {
  const [showPopup, setShowPopup] = useState(false);
  const buttonRef = useRef();
  const popupRef = useRef();

  useEffect(() => {
    if (buttonRef.current == null || popupRef.current == null) return;
    const { bottom } = buttonRef.current.getBoundingClientRect();
    let i = 0;
    popupRef.current.style.top = `${bottom + 25}px`;
  }, [showPopup]);

  return (
    <div>
      <button ref={buttonRef} onClick={() => setShowPopup(!showPopup)}>
        Click me
      </button>
      {showPopup && (
        <div ref={popupRef} style={{ position: "absolute", top: "-50px" }}>
          This is Popup
        </div>
      )}
    </div>
  );
};

export default UseLayoutEffectDemo;
