interface SectionTitleProps {
	title: string;
}

const SectionTitle = ({ title }: SectionTitleProps) => {
	return (
		<h2 className="text-xs uppercase text-gray-400 font-bold mb-3">{title}</h2>
	);
};

export default SectionTitle;
