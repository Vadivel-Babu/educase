import { type ButtonHTMLAttributes, type ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | String;
  variant?: "primary" | "secondary" | "disabled"; // Add your custom types here
}

const variantStyles = {
  disabled: "cursor-not-allowed bg-gray-300 text-white",
  primary: "cursor-pointer bg-primary text-white hover:bg-violet-800",
  secondary: "cursor-pointer bg-secondary text-black hover:bg-violet-400",
};

const Button = ({ children, variant = "primary", ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={`w-full py-3 rounded-md font-semibold capitalize mt-1.5 ${variantStyles[variant] || variantStyles.primary}`}
    >
      {children}
    </button>
  );
};

export default Button;
