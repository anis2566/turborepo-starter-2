import { Card } from "../components/card";
import { cn } from "../lib/utils";

interface CardWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const CardWrapper = ({ children, className }: CardWrapperProps) => {
  return (
    <Card
      className={cn(
        "w-full px-2 rounded-xs p-3 gap-y-3 shadow-xs bg-gradient-to-t from-primary/5 to-card dark:bg-card",
        className
      )}
    >
      {children}
    </Card>
  );
};
