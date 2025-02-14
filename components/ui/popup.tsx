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
    <>
      <div className="hidden md:block">
        <Draggable
          nodeRef={nodeRef}
          handle=".draggable-handle"
          disabled={isTouchDevice}
        >
          <div
            ref={nodeRef}
            className="draggable-handle relative z-50 flex cursor-grab flex-col shadow-lg md:left-1/3 md:top-40 md:w-1/2 lg:w-1/3"
          >
            <div>
              <PopupContent closePopup={closePopup} />
            </div>
            <div>
              <button
                className="pointer-events-auto absolute right-8 top-5 text-4xl font-medium text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  closePopup();
                }}
              >
                ×
              </button>
            </div>
          </div>
        </Draggable>
      </div>
      <div className="fixed bottom-0 left-0 top-0 block w-screen md:hidden">
        <PopupContent closePopup={closePopup} />
      </div>
    </>
  );
};

const PopupContent = ({ closePopup }: { closePopup: () => void }) => {
  return (
    <div className="popupstyle h-full w-full text-white">
      <div className="flex h-full w-full flex-col items-start justify-between overflow-y-scroll p-[30px] md:overflow-y-auto">
        <div>
          <div
            className={`= mx-6 mb-8 mt-12 pb-12 font-neueHaas text-xl font-semibold md:mb-0`}
          >
            Last year marked the Broad Institute’s 20th anniversary. As we enter
            our next decade, Broad scientists are shaping the future of science
            and medicine by inventing new tools, advancing discoveries, forging
            new communities, tackling tough questions, and leading the larger
            scientific community in understanding disease to transform human
            health.
            <br />
            <br />
            We’re doing this with the “Broad approach”— courageous,
            collaborative, creative, data-driven, and at-scale.
            <br />
            <br />
            The stories featured here are just a sampling of how the Broad is
            having an impact.
            <br />
            <br />
            —Todd Golub,
            <br />
            Director of the Broad Institute
          </div>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            closePopup();
          }}
          className="block text-2xl font-semibold underline underline-offset-4 md:hidden"
        >
          Enter Site
        </button>
      </div>
    </div>
  );
};

export default Popup;
