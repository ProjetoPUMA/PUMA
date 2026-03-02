import classNames from "classnames";
import type { ReactNode } from "react";

function Button({
  children,
  onClick,
  color,
}: {
  children: ReactNode;
  onClick?: () => void;
  color: string;
}) {
  return (
    <button
      className={classNames("button", {
        "button--blue": color === "blue",
        "button--red": color === "red",
        "button--light": color === "light",
        "button--dark": color === "dark",
        "button--yellow": color === "yellow",
        "button--pink": color === "pink",
        "button--green": color === "green",
        "button--sat-green": color === "sat-green",
        "button--sat-blue": color === "sat-blue",
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
