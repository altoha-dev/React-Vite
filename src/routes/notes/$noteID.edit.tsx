import { createFileRoute } from "@tanstack/react-router";
import { NoteForm } from "../../pages/notes/NoteForm";

export const Route = createFileRoute("/notes/$noteID/edit")({
  component: NoteFormRoute,
  staticData: {
    title: "Редактирование заметки",
  },
});
function NoteFormRoute() {
  return <NoteForm />;
}
