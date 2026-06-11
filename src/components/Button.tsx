import { type ButtonHTMLAttributes, type ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | String;
  variant?: "primary" | "secondary" | "disabled"; // Add your custom types here
}

const Button = ({ children, variant = "primary", ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={`${variant == "disabled" ? "cursor-not-allowed" : "cursor-pointer"} w-full py-3 rounded-md font-semibold capitalize mt-1.5 ${variant == "disabled" && "bg-gray-300 text-white "} ${variant == "primary" && "bg-violet-600 text-white hover:bg-violet-800"} ${variant == "secondary" && "bg-violet-300 text-black hover:bg-violet-400"}`}
    >
      {children}
    </button>
  );
};

export default Button;
