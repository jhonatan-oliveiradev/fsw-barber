import { cn } from "../_lib/utils";

interface DefaultContainerProps {
	className?: string;
	children: React.ReactNode;
}

const DefaultContainer = ({ children, className }: DefaultContainerProps) => {
	return <div className={cn("px-5 mt-5", className)}>{children}</div>;
};

export default DefaultContainer;
