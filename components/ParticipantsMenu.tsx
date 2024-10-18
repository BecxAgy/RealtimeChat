import { useCallStateHooks } from "@stream-io/video-react-sdk";
import Image from "next/image";
import React from "react";

const ParticipantsMenu = ({ onClose }: { onClose: () => void }) => {
  const { useParticipants } = useCallStateHooks();

  const participants = useParticipants();
  return (
    <div className="bg-dark-3 h-screen py-5  px-4 rounded-lg">
      {participants.map((participant) => (
        <div key={participant.sessionId}>
          <div className="flex items-center gap-2 bg-dark-4 p-2 rounded-lg">
            <div className="flex items-center">
              <Image
                className="w-8 h-8 rounded-full"
                src={participant.image}
                alt={participant.name}
                width={32}
                height={32}
              />
            </div>
            <div className="flex items-center">
              <p className="text-white">{participant.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ParticipantsMenu;
