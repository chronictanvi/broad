"use client";

import React, { useRef } from "react";
import Draggable from "react-draggable";

interface PopupProps {
  showPopup: boolean;
  closePopup: () => void;
}

const isTouchDevice =
  typeof window !== "undefined" &&
  ("ontouchstart" in window || navigator.maxTouchPoints > 0);

const Popup: React.FC<PopupProps> = ({ showPopup, closePopup }) => {
  if (!showPopup) return null; // Don't render if showPopup is false

  const nodeRef = useRef(null);

  return (
    <Draggable
      nodeRef={nodeRef}
      handle=".draggable-handle"
      disabled={isTouchDevice}
    >
      <div
        ref={nodeRef}
        className="draggable-handle popupstyle popuplayout absolute z-50 h-full w-full cursor-grab bg-white p-6 text-white shadow-lg md:left-1/3 md:top-40 md:w-1/3"
      >
        <button
          className="pointer-events-auto absolute right-8 top-5 text-4xl font-medium text-white"
          onClick={(e) => {
            e.stopPropagation();
            closePopup();
          }}
        >
          ×
        </button>
        <div className="mt-10 font-neueHaas text-xl font-semibold">
          Last year marked the Broad Institute’s 20th anniversary. As we enter
          our next decade, Broad scientists are shaping the future of science
          and medicine by inventing new tools, advancing discoveries, forging
          new communities, tackling tough questions, and leading the larger
          scientific community in understanding disease to transform human
          health.
          <br />
          <br />
          We’re doing this with the “Broad approach”— courageous, collaborative,
          creative, data-driven, and at-scale.
          <br />
          <br />
          The stories featured here are just a sampling of how the Broad is
          having an impact.
          <br />
          <br />
          —Todd Golub, Director of the Broad Institute
        </div>
      </div>
    </Draggable>
  );
};

export default Popup;
