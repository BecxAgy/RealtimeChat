"use client";
import React from "react";
import {
  TbArrowsJoin,
  TbCalendarEvent,
  TbClockRecord,
  TbMessage2,
} from "react-icons/tb";
import HomeCard from "./HomeCard";
import { useRouter } from "next/navigation";

const MeetingTypeList = () => {
  const router = useRouter();
  const [meetingState, setMeetingState] = React.useState<
    "isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
  >();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 xl:gap-2 md:gap-4 sm:gap-6 ">
      <HomeCard
        icon={<TbMessage2 className="text-2xl" />}
        title="New Meeting"
        description="Start an instant meeting"
        handleClick={() => setMeetingState("isInstantMeeting")}
      />
      <HomeCard
        icon={<TbArrowsJoin className="text-2xl" />}
        title="Join Meeting"
        description="via invitation link"
        className="bg-blue-1"
        handleClick={() => setMeetingState("isJoiningMeeting")}
      />
      <HomeCard
        icon={<TbCalendarEvent className="text-2xl" />}
        title="Schedule Meeting"
        description="Plan your meeting"
        className="bg-purple-1"
        handleClick={() => setMeetingState("isScheduleMeeting")}
      />
      <HomeCard
        icon={<TbClockRecord className="text-2xl" />}
        title="View Recordings"
        description="Meeting Recordings"
        className="bg-yellow-1"
        handleClick={() => router.push("/recordings")}
      />
    </div>
  );
};

export default MeetingTypeList;
