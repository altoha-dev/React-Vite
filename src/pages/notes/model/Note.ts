export interface Note {
    id: number;
    title:string
    description: string;
    createDate:Date
}
 export  type AddNoteDto = Pick<Note, "title"| "description">
  export type UpdateNoteDto = Partial<AddNoteDto> & Pick<Note, "id">