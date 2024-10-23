import { FC, useState } from "react";
import { Card } from "../shared/ui/Card";
import { Typography } from "../shared/ui/Typography";
import { Button } from "../shared/ui/Button";
import { COLOR_TEXT } from "../shared/ui/color";

interface Props {
  title: string;
}

export const BasketCard: FC<Props> = function BasketCard(props) {
  const [count, setCount] = useState<number>(0);

  return (
    <li>
      <Card>
        <Typography size={20} weight={600} align="center">
          {props.title}
        </Typography>
        <div className="flex">
          {""}
          <Button mode="dark" onClick={() => setCount(count - 1)}>
            {"-"}
          </Button>
          <Typography
            size={20}
            weight={600}
            className={`w-full flex justify-center items-center`}
          >
            {count}
          </Typography>
          <Button mode="dark" onClick={() => setCount(count + 1)}>
            {"+"}
          </Button>
        </div>
      </Card>
    </li>
  );
};
