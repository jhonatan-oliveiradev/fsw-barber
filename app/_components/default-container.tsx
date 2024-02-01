import { cn } from "../_lib/utils";

interface DefaultContainerProps {
  className?: string;
  children: React.ReactNode;
}

const DefaultContainer = ({ children, className }: DefaultContainerProps) => {
  return <section className={cn("mt-5 px-5", className)}>{children}</section>;
};

export default DefaultContainer;
