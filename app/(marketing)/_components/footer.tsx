import { Button } from "@/components/ui/button";
import { Logo } from "./logo";

export const Footer = () => {
  return (
    <div className="flex items-center w-full p-6 bg-background dark:bg-[#191919] z-50">
      <Logo />
      <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x text-muted-foreground">
        <Button variant="ghost" size="sm">
          Privacy Policy
        </Button>
        <Button variant="ghost" size="sm">
          Terms & Conditions
        </Button>
      </div>
    </div>
  );
};
