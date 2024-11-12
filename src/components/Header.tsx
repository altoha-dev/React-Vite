import { FC, HTMLAttributes } from "react";
import { Button } from "../shared/ui/Button";
import { Typography } from "../shared/ui/Typography";
import { COLOR_BACKGROUND, COLOR_TEXT } from "../shared/ui/color";

export const Header: FC<HTMLAttributes<HTMLElement>> = function Header(props) {
  return (
    <header className={`${COLOR_BACKGROUND.primary} py-8 `} >
       {props.children} 
    </header>
  );
};
