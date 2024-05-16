"use client";
import NavigationLinks from "@/components/subscriber/navigation-links";
import Logo from "@/components/ui/logo";
import { FC } from "react";
import SidebarDropdownMenu from "./side-bar-dropdown-menu";

interface SideBarProps {}

const SideBar: FC<SideBarProps> = ({}) => {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <div className="border-t -ml-3 md:ml-0 h-16 justify-between fixed z-50 flex-1 w-full md:relative md:h-full bottom-0 md:border-none flex flex-row md:justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2 p-2">
        <Logo />
        <NavigationLinks />

        {/* user && <UserButton/> */}
        <p>user</p>
        <div className="hidden md:flex relative md:mt-auto flex-1 items-end w-full">
          <SidebarDropdownMenu />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
