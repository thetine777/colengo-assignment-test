import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  theme?: "primary" | "secondary";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  theme = "primary",
}) => {
  return <button className={`button ${theme}`}>{children}</button>;
};
