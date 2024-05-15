import { ThemeToggle } from "@/components/theme-toggle";
import Logo from "@/components/ui/logo";

export default function Home() {
  return (
    <main>
      <Logo
        href="/"
        className="absolute left-8 top-8 md:left-10 md:top-10 active:scale-95 duration-75 transition-transform ease-in-out"
      />
    </main>
  );
}
