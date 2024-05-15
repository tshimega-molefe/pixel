import { Icons } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";

interface LogoProps {}

const Logo: FC<LogoProps> = ({}) => {
  return (
    <Link
      href="/s"
      className={cn(
        "hidden md:flex !mb-10 !p-0 items-center justify-center active:scale-95 transition-all ease-in-out duration-75"
      )}
    >
      <Icons.logo className="w-6 h-6 shrink-0 lg:hidden" />
      <Icons.logo className="w-6 h-6 hidden lg:block" />
    </Link>
  );
};

export default Logo;
