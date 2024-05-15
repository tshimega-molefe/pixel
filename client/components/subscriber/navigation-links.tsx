"use client";
import { links } from "@/config/links";
import { cn } from "@/lib/utils";
import { IconWeight } from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

interface NavigationLinksProps {}

const NavigationLinks: FC<NavigationLinksProps> = ({}) => {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        // Determine if the link is active
        const isActive = pathname === link.href;

        // Set the icon weight based on whether the link is active
        const iconWeight: IconWeight | undefined = isActive
          ? "fill"
          : "regular";

        return (
          <Link
            key={link.name}
            href={link.href}
            passHref
            className={cn(
              "duration-75 transition-all ease-out group flex flex-row items-center md:justify-start !px-3 md:!my-3 lg:space-x-2 md:!py-2 lg:hover:bg-accent/40",
              isActive ? "lg:bg-accent/30" : "lg:bg-transparent",
              {
                "hidden md:flex": link.hideOnMobile,
              }
            )}
          >
            <span
              className="group-active:scale-90 duration-75 ease-in-out transition-all"
              aria-label={link.name}
            >
              {link.icon(iconWeight)}
            </span>
            <span
              className={cn(
                "hidden lg:block group-active:scale-95 duration-75 ease-out transition-all md:mt-0.5 text-sm",
                isActive ? "lg:font-bold" : "lg:font-normal"
              )}
            >
              {link.name}
            </span>
          </Link>
        );
      })}
    </>
  );
};

export default NavigationLinks;
