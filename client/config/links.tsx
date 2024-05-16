import { IconWeight } from "@phosphor-icons/react";
import {
  BellSimple,
  ChatsCircle,
  DotsNine,
  Fire,
  House,
  MagnifyingGlass,
} from "@phosphor-icons/react/dist/ssr";

export const links = [
  {
    name: "Home",
    href: "/s",
    icon: (weight: IconWeight | undefined) => (
      <House className="w-6 h-6 shrink-0" weight={weight} />
    ),
  },
  {
    name: "Search",
    href: "/s/search",
    icon: (weight: IconWeight | undefined) => (
      <MagnifyingGlass className="w-6 h-6 shrink-0" weight={weight} />
    ),
    hideOnMobile: true,
  },
  {
    name: "Trending",
    href: "/s/trending",
    icon: (weight: IconWeight | undefined) => (
      <Fire className="w-6 h-6 shrink-0" weight={weight} />
    ),
  },
  {
    name: "Messages",
    href: "/s/mypixel/messages",
    icon: (weight: IconWeight | undefined) => (
      <ChatsCircle className="w-6 h-6 shrink-0" weight={weight} />
    ),
    hideOnMobile: true,
  },
  {
    name: "Notifications",
    href: "/s/mypixel/notifications",
    icon: (weight: IconWeight | undefined) => (
      <BellSimple className="w-6 h-6 shrink-0" weight={weight} />
    ),
    hideOnMobile: true,
  },
  // {
  //   name: "My Pixel",
  //   href: "/s/mypixel",
  //   icon: (weight: IconWeight | undefined) => (
  //     <DotsNine className="w-6 h-6 shrink-0" weight={weight} />
  //   ),
  // },
];
