"use client";

import {
  DeviceSettings,
  VideoPreview,
  useCall,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";

import Alert from "./Alert";
import { Button } from "./ui/button";
import MicToggle from "./MicToggle";
import CamToggle from "./CamToggle";
import useMediaToggle from "@/hooks/useMediaToggle";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";

const MeetingSetup = ({
  setIsSetupComplete,
}: {
  setIsSetupComplete: (value: boolean) => void;
}) => {
  // https://getstream.io/video/docs/react/guides/call-and-participant-state/#call-state
  const { useCallEndedAt, useCallStartsAt } = useCallStateHooks();
  const callStartsAt = useCallStartsAt();
  const callEndedAt = useCallEndedAt();
  const callTimeNotArrived =
    callStartsAt && new Date(callStartsAt) > new Date();
  const callHasEnded = !!callEndedAt;

  const call = useCall();

  if (!call) {
    throw new Error("useStreamCall must be used within a call.");
  }

  const { isMicOn, isCamOn, toggleMic, toggleCam } = useMediaToggle(
    true,
    true,
    call
  );

  const { user } = useUser();

  if (callTimeNotArrived)
    return (
      <Alert
        title={`Your Meeting has not started yet. It is scheduled for ${callStartsAt.toLocaleString()}`}
      />
    );

  if (callHasEnded)
    return (
      <Alert
        title="The call has been ended by the host"
        iconUrl="/icons/call-ended.svg"
      />
    );

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-3 text-white">
      <h1 className="text-center text-2xl font-bold">
        Configure your camera and microphone
      </h1>
      {!isCamOn ? (
        <VideoPreview />
      ) : (
        <div>
          {user && user.imageUrl && (
            <Image
              src={user?.imageUrl}
              alt="User Image"
              width={100}
              height={100}
              className="rounded-full"
            />
          )}
        </div>
      )}
      <div className="flex h-16 items-center justify-center gap-3">
        <div className="flex h-16 items-center justify-center gap-3">
          <MicToggle isMicOn={isMicOn} toggleMic={toggleMic} />
          <CamToggle isCamOn={isCamOn} toggleCam={toggleCam} />
          <Button
            className="rounded-md bg-green-500 px-4 py-2.5"
            onClick={() => {
              call.join();

              setIsSetupComplete(true);
            }}
          >
            Join meeting
          </Button>
        </div>
        <DeviceSettings />
      </div>
    </div>
  );
};

export default MeetingSetup;
