type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  return (
    <button
      className={`px-8 py-4 rounded-full transition-all duration-300 ${
        variant === "primary"
          ? "bg-white text-black hover:scale-105"
          : "border border-white hover:bg-white hover:text-black"
      }`}
    >
      {children}
    </button>
  );
}