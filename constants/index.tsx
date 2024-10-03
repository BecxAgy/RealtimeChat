import {
  TbHome,
  TbCalendarUser,
  TbCalendarDown,
  TbVideo,
  TbSquareRoundedPlus,
} from "react-icons/tb";
export const sidebarLinks = [
  {
    icon: <TbHome size={22} />,
    route: "/",
    label: "Home",
  },

  {
    icon: <TbCalendarUser size={22} />,
    route: "/upcoming",
    label: "Upcoming",
  },
  {
    icon: <TbCalendarDown size={22} />,
    route: "/previous",
    label: "Previous",
  },
  {
    icon: <TbVideo size={22} />,
    route: "/recordings",
    label: "Recordings",
  },
  {
    icon: <TbSquareRoundedPlus size={22} />,
    route: "/personal-room",
    label: "Personal Room",
  },
];

export const avatarImages = [
  "/images/avatar-1.jpeg",
  "/images/avatar-2.jpeg",
  "/images/avatar-3.png",
  "/images/avatar-4.png",
  "/images/avatar-5.png",
];
