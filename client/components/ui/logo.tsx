import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";
import { Icons } from "./icons";

interface LogoProps {
  className?: string;
  href?: string;
}

const Logo: FC<LogoProps> = ({ className, href }) => {
  return href ? (
    <Link href={href}>
      <Icons.logo
        className={cn(
          "w-8 h-8 md:w-12 md:h-12 active:scale-95 duration-75 transition-transform ease-in-out",
          className
        )}
      />
    </Link>
  ) : (
    <Icons.logo className={cn("w-8 h-8 md:w-12 md:h-12", className)} />
  );
};

export default Logo;
