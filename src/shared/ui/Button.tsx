import { ButtonHTMLAttributes, FC } from "react";
import { COLOR_BACKGROUND, COLOR_BORDER, COLOR_TEXT } from "./color";

type ButtonType = "default" | "border" | "dark";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  mode?: ButtonType;
}

export const Button: FC<Props> = function Button(props) {
  const { mode = "default", ...rest } = props;

  let bgbutton = COLOR_BACKGROUND.main400;
  let textColor = COLOR_TEXT.alternative;
  
  if (mode == "dark") {
    bgbutton = COLOR_BACKGROUND.secondary400;

  } else if (mode == "border") {
    bgbutton = `border ${COLOR_BORDER.secondary200}` ;
    textColor = COLOR_TEXT.secondary400;
  }
 if(props.disabled){
  bgbutton = COLOR_BACKGROUND.secondary400
  textColor = COLOR_TEXT.secondary200;
 }
  return (
    <button
      {...rest}
      className={`rounded pb-2 pt-2 w-6/12 ${bgbutton} ${rest.className}`}
    >
      <p className={`font-normal ${textColor}`}>{rest.children}</p>
    </button>
  );
};
