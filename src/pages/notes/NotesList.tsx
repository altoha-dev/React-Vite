import { FC } from "react";
import { Button } from "../../shared/ui/Button";
import { Card } from "../../shared/ui/Card";
import { COLOR_BACKGROUND, COLOR_BORDER } from "../../shared/ui/color";
import { Typography } from "../../shared/ui/Typography";
import { useNavigate } from "@tanstack/react-router";
import { useUnit } from "effector-react";
import { $notes } from "./store/NoteStore";


interface Props {}
export const NotesList: FC<Props> = function NotesList() {
  const navigate = useNavigate()
  const data = useUnit($notes)
  const list = data.map(item =>(
    <li className="w-full" key = {item.id.toString()}>
    <Card className={`${COLOR_BORDER.secondary100} border-2`}>
      <Typography size={20} weight={600}>
        {item.title}
      </Typography>
      <Typography>
        {item.description}
      </Typography>
      <Button mode = 'border' 
      onClick={()=>
        navigate({
          to:"/notes/edit/$noteID",
          params:{noteID:item.id.toString()}
        })
      }>
       {"Редактировать"}
      </Button>
    </Card>
  </li>
    
  ))

  return (
    <div className=" gap-6 ">
    <Button onClick={() => navigate({to:"/notes/add"})} className="w-full">{"+"}</Button>

     
      <ul className="flex gap4 flex-wrap">
       {list}
      </ul>
    </div>
  );
};
