"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useKeydownEvents from "@/hooks/use-keydown-events";
import useOnClickOutside from "@/hooks/use-on-click-outside";
import { cn } from "@/lib/utils";
import { ArrowsOut } from "@phosphor-icons/react";
import { FC, useRef, useState, KeyboardEvent } from "react";

interface SidebarDropdownMenuProps {}

const SidebarDropdownMenu: FC<SidebarDropdownMenuProps> = ({}) => {
  const [open, setOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  // Use onClickOutside hook to close the dropdown when a click is detected outside of it
  useOnClickOutside(ref, () => setOpen(false), 0, ["mousedown", "touchstart"]);

  // Use useKeydownEvents hook to close the dropdown on specific key presses
  useKeydownEvents({
    Escape: () => setOpen(false), // Close dropdown on Escape key
    Backspace: () => setOpen(false),
    Delete: () => setOpen(false),
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
          <span
            className="group-active:scale-90 duration-75 ease-in-out transition-all"
            aria-label="More Options"
          >
            <ArrowsOut className="w-6 h-6 shrink-0" />
          </span>
          <span
            className={cn(
              "hidden lg:block group-active:scale-95 duration-75 ease-out transition-all md:mt-0.5 text-sm"
            )}
          >
            More Options
          </span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="center"
        side="top"
        sideOffset={8}
        className="md:w-44 lg:w-[13.95rem]"
        ref={ref}
      >
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Profile</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SidebarDropdownMenu;
