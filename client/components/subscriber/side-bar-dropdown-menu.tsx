"use client";

import ThemeToggle from "@/components/theme-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icons } from "@/components/ui/icons";
import useKeydownEvents from "@/hooks/use-keydown-events";
import useOnClickOutside from "@/hooks/use-on-click-outside";
import { cn } from "@/lib/utils";
import { CirclesFour, Download, GearSix, Ticket } from "@phosphor-icons/react";
import Link from "next/link";
import { FC, KeyboardEvent, useRef, useState } from "react";

interface SidebarDropdownMenuProps {}

const SidebarDropdownMenu: FC<SidebarDropdownMenuProps> = ({}) => {
  const [open, setOpen] = useState<boolean>(false);

  const ref = useRef<HTMLDivElement>(null);

  // Use onClickOutside hook to close the dropdown when a click is detected outside of it
  useOnClickOutside(
    ref,
    () => {
      setOpen(false);
    },
    0,
    ["mousedown", "touchstart"]
  );

  // Use useKeydownEvents hook to close the dropdown on specific key presses
  useKeydownEvents({
    Escape: () => {
      setOpen(false);
    }, // Close dropdown on Escape key
    Backspace: () => {
      setOpen(false);
    }, // Close dropdown on Backspace key
    Delete: () => {
      setOpen(false);
    }, // Close dropdown on Delete key
  });

  // Use handleEnterKeydown function to open the dropdown on enter key press
  const handleEnterKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    // Toggle dropdown on Enter key
    if (event.key === "Enter") {
      setOpen(!open);
    }
  };

  return (
    <DropdownMenu open={open}>
      <DropdownMenuTrigger asChild>
        <button
          onKeyDown={handleEnterKeyDown}
          onClick={() => setOpen(!open)}
          className={cn(
            "duration-75 transition-all ease-out group flex flex-row items-center md:justify-start !px-3 md:!my-3 lg:space-x-2 md:!py-2 lg:hover:bg-accent/40 cursor-pointer lg:w-full"
          )}
          tabIndex={0}
        >
          <CirclesFour
            className="h-5 w-5 shrink-0 group-active:scale-90 duration-75 ease-in-out transition-all"
            aria-label="More Options"
          />

          <span
            className={cn(
              "hidden lg:block group-active:scale-95 duration-75 ease-out transition-all text-sm"
            )}
          >
            More
          </span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        ref={ref}
        align="center"
        side="top"
        sideOffset={8}
        className={cn(
          "md:w-44 lg:w-[13.95rem] !rounded-none !p-1 transition-opacity duration-150 ease-in-out space-y-2",
          !open && "opacity-0"
        )}
      >
        <DropdownMenuItem asChild>
          <Link
            href="/s/studio"
            className="duration-75 transition-all ease-out group flex flex-row items-center md:justify-start !px-3 md:space-x-2 lg:hover:bg-accent/40 cursor-pointer lg:w-full"
            onClick={() => setOpen(false)}
          >
            <Icons.icon className="w-4 h-4 shrink-0" />
            <p>My Pixel Studio</p>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link
            href="/s/studio/downloads"
            className="duration-75 transition-all ease-out group flex flex-row items-center md:justify-start !px-3 md:space-x-2 lg:hover:bg-accent/40 cursor-pointer lg:w-full"
            onClick={() => setOpen(false)}
          >
            <Download className="w-4 h-4 shrink-0" />
            <p>Downloads</p>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href="/s/studio/settings"
            className="duration-75 transition-all ease-out group flex flex-row items-center md:justify-start !px-3 md:space-x-2 lg:hover:bg-accent/40 cursor-pointer lg:w-full"
            onClick={() => setOpen(false)}
          >
            <GearSix className="w-4 h-4 shrink-0" />
            <p>Settings</p>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <div className="duration-75 transition-all ease-out !px-3 lg:hover:bg-accent/40 lg:w-full">
            <ThemeToggle />
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SidebarDropdownMenu;
