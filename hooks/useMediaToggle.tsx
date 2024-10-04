"use client";
import { Call } from "@stream-io/video-react-sdk";
import { useState, useEffect } from "react";

const useMediaToggle = (
  initialMicState: boolean,
  initialCamState: boolean,
  call: Call
) => {
  const [isMicOn, setIsMicOn] = useState(initialMicState);
  const [isCamOn, setIsCamOn] = useState(initialCamState);

  const toggleMic = () => {
    setIsMicOn(!isMicOn);
  };

  const toggleCam = () => {
    setIsCamOn(!isCamOn);
  };

  useEffect(() => {
    if (!isMicOn) {
      call.microphone.enable();
    } else {
      call.microphone.disable();
    }
  }, [isMicOn, call]);

  useEffect(() => {
    if (!isCamOn) {
      call.camera.enable();
    } else {
      call.camera.disable();
    }
  }, [isCamOn, call]);

  return { isMicOn, isCamOn, toggleMic, toggleCam };
};

export default useMediaToggle;
