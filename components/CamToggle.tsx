import React from "react";
import { TbVideo, TbVideoOff } from "react-icons/tb";

interface CamToggleProps {
  isCamOn: boolean;
  toggleCam: () => void;
}

const CamToggle: React.FC<CamToggleProps> = ({ isCamOn, toggleCam }) => {
  return (
    <button
      className={`rounded-full p-4  ${
        isCamOn
          ? "bg-dark-4 hover:bg-blue-1/10"
          : "bg-blue-1 hover:bg-blue-1/35"
      }`}
      onClick={toggleCam}
    >
      {isCamOn ? <TbVideoOff /> : <TbVideo />}
    </button>
  );
};

export default CamToggle;
