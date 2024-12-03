import { createFileRoute } from "@tanstack/react-router";
import { NoteForm } from "../../pages/notes/NoteForm";
import { useNotes } from "../../pages/notes/store/NotesProvider";
import { Typography } from "@mui/material";
import { useUnit } from "effector-react";
import { $notes } from "../../pages/notes/store/NoteStore";

export const Route = createFileRoute("/notes/edit/$noteID")({
  component: NoteFormRoute,
  staticData: {
    title: "Редактирование заметки",
  },
});
function NoteFormRoute() {
  const {noteID} =Route.useParams()
  const data = useUnit($notes)
  const note = data.find(note => note.id === Number(noteID))
  if(!note)
    return <Typography align="center">{"Заметки не существует"}</Typography>
  return <NoteForm note={note}/>;
}
