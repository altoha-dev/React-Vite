
import { createEffect, createEvent, createStore } from "effector";
import { AddNoteDto, Note, UpdateNoteDto } from "../model/Note";

export const addNote  =createEvent<AddNoteDto>()
export const updateNote  =createEvent<UpdateNoteDto>()

export const setNotesDefaultValue =createEffect<void,Note[]>(()=>{
    console.log("test")
    const notesString = localStorage.getItem("notes")

    if(!notesString)return[]

    return JSON.parse(notesString)
})

export const $notes = createStore<Note[]>([])
.on(addNote, (state,dto)=>[
    ...state,
{id: state.length + 1 , createDate: new Date(),...dto}
])

.on(updateNote, (state,dto)=>
    state.map( note =>{
      const {id,...nestDto} = dto
    if(note.id === dto.id){
      return {
          ...note,
          ...nestDto}
    }
    return note
  })
)


.on(setNotesDefaultValue.doneData,(_, value )=>value)

$notes.updates.watch((value)=>{
    localStorage.setItem('notes', JSON.stringify(value))
})