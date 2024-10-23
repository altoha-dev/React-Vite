import { FC } from "react";
import { Button } from "../shared/ui/Button";
import { Typography } from "../shared/ui/Typography";
import { COLOR_TEXT } from "../shared/ui/color";

export const Header: FC = function Header() {
  return (
    <header className="bg-blue-500 py-3">
      <Typography
        color={COLOR_TEXT.alternative}
        size={20}
        align={"center"}
        weight={700}
      >
        {"Список товаров в корзине "}
      </Typography>
    </header>
  );
};
