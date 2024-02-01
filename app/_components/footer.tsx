const Footer = () => {
  return (
    <footer className="bottom-0 w-full bg-secondary px-5 py-6">
      <p className="text-xs text-gray-400 opacity-75">
        © {new Date().getFullYear()} Copyright{" "}
        <span className="font-bold">FSW Barber</span>.
      </p>
    </footer>
  );
};

export default Footer;
