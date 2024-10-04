import React from "react";
import { TbMicrophone, TbMicrophoneOff } from "react-icons/tb";

interface MicToggleProps {
  isMicOn: boolean;
  toggleMic: () => void;
}

const MicToggle: React.FC<MicToggleProps> = ({ isMicOn, toggleMic }) => {
  return (
    <button
      className={`rounded-full p-4 ${
        isMicOn
          ? "bg-dark-4 hover:bg-blue-1/10"
          : "bg-blue-1 hover:bg-blue-1/35"
      }`}
      onClick={toggleMic}
    >
      {isMicOn ? <TbMicrophoneOff /> : <TbMicrophone />}
    </button>
  );
};

export default MicToggle;
