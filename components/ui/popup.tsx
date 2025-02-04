import React from "react";
import Draggable from "react-draggable";

interface PopupProps {
  showPopup: boolean;
  closePopup: () => void;
}

const Popup: React.FC<PopupProps> = ({ showPopup, closePopup }) => {
  if (!showPopup) return null; // Don't render if showPopup is false

  return (
    <Draggable handle=".draggable-handle" style={{ touchAction: "none" }}>
      <div className="absolute popupstyle popuplayout top-40 left-1/3 text-white 
 bg-white p-6 shadow-lg z-50">
        <button
          className="absolute top-5 right-8 text-white text-4xl font-bold"
          onClick={closePopup}
        >
          ×
        </button>
        <div className="draggable-handle text-xl mt-10 font-medium mb-4">
          Last year marked the Broad Institute’s 20th anniversary. As we enter
          2025, Broad scientists are shaping the future of science and medicine
          by inventing new tools, advancing discoveries, forging new communities,
          tackling tough questions, and leading the larger scientific community
          in understanding disease to transform human health.
          <br />
          <br />
          We’re doing this with the “Broad approach”— courageous, collaborative,
          creative, data-driven, and at-scale.
          <br />
          <br />
          The stories featured here are just a sampling of how the Broad is
          having an impact and we invite you to learn more on this website.
          <br />
          <br />
          —Todd Golub, Director of the Broad Institute
        </div>
      </div>
    </Draggable>
  );
};

export default Popup;
