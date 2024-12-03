import { createContext, FC, PropsWithChildren, useContext, useState } from "react";
import { AddNoteDto, Note, UpdateNoteDto } from "../model/Note";

 
 interface NotesContextValues{
  data:Note[],
  addNote: (dto: AddNoteDto) => void
  updateNote: (dto: UpdateNoteDto) => void
 }

  const NotesContext = createContext<NotesContextValues>({
    data: [],
    addNote:()=>{},
    updateNote:()=>{}
  })

  export const useNotes = ()=> useContext(NotesContext)


  
   

 export const NotesProvider: FC<PropsWithChildren> = function NotesProvider(props){
   
   const addNote = (dto: AddNoteDto) =>{
 setNotes((prevState) =>[
     ...prevState,
      {id: prevState.length + 1 , createDate: new Date(),...dto}
     ])
   }   

   const updateNote = (dto:UpdateNoteDto)=>{
      const {id, ...nestDto} = dto
     setNotes((prevState) =>
       prevState.map( note =>{
         if(note.id === dto.id){
           return {...note,...nestDto}
         }
         return note
       })
     )
   }

  
  
  const [notes, setNotes] = useState<Note[]>([])
  return <NotesContext.Provider value={{
    data: notes,
    addNote,
    updateNote
  }}>
    {props.children}


  </NotesContext.Provider>
 }