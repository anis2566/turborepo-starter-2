import Image from "next/image";

import {
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Separator } from "@workspace/ui/components/separator";

interface HeaderProps {
  title: string;
  description: string;
}

export const Header = ({ title, description }: HeaderProps) => {
  return (
    <CardHeader className="px-0">
      <div className="w-[65px] h-[65px] flex items-center justify-center rounded-full border-2 border-muted backdrop-blur-md mx-auto">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={40}
          height={40}
          className="mx-auto"
        />
      </div>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <Separator />
    </CardHeader>
  );
};
