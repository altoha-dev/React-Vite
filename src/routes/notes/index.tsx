import { createFileRoute } from "@tanstack/react-router";
import { NotesList } from "../../pages/notes/NotesList";





export const Route = createFileRoute("/notes/")({
    component: NoteListRoute,
    staticData: {
        title: "Список заметок",
      },
})
function NoteListRoute(){
    return <NotesList/>
}