import { FC } from "react";
import { Button } from "../../shared/ui/Button";
import { Card } from "../../shared/ui/Card";
import { COLOR_BACKGROUND, COLOR_BORDER } from "../../shared/ui/color";
import { Typography } from "../../shared/ui/Typography";
import { useNavigate } from "@tanstack/react-router";

interface Props {}
export const NotesList: FC<Props> = function NotesList() {
  const navigate = useNavigate()
  return (
    <div className=" gap-6 ">
    <Button onClick={() => navigate({to:"/notes/add"})} className="w-full">{"+"}</Button>

     
      <ul className="flex gap4 flex-wrap">
        <li className="w-full">
          <Card className={`${COLOR_BORDER.secondary100} border-2`}>
            <Typography size={20} weight={600}>
              {"Заголовок"}
            </Typography>
            <Typography>{"Текст заметки"}</Typography>
          </Card>
        </li>
      </ul>
    </div>
  );
};
