import { TextField } from "@mui/material";
import { FC } from "react";
import { Controller, Form, useForm } from "react-hook-form";
import { Button } from "../../shared/ui/Button";
import { useNotes } from "./store/NotesProvider";
import { useRouter } from "@tanstack/react-router";
import { Note } from "./model/Note";
import { useUnit } from "effector-react";
import { addNote, updateNote } from "./store/NoteStore";

interface Props {
  note?: Note;
}
type Form = {
  title: string;
  description: string;
};
export const NoteForm: FC<Props> = function NoteForm(props) {
  const [addNoteFn, updateNoteFn] = useUnit([addNote,updateNote])
  const { history } = useRouter();

  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<Form>({
    defaultValues: {
      title: props.note?.title ?? "",
      description: props.note?.description ?? "",
    },
  });

  return (
    <form
      className="flex flex-col gap-3"
      onSubmit={handleSubmit((form) => {
        if (props.note) {
          updateNoteFn({ id: props.note.id, ...form });
        } else {
          addNoteFn(form);
        }

        history.back();
      })}
    >
      <Controller
        name="title"
        control={control}
        rules={{
          required: "Это поле обязательно",
          validate: (value) => value.length > 5 || "минимум 6 символов",
        }}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            error={Boolean(error?.message)}
            helperText={error?.message}
            label="Заголовок"
            fullWidth={true}
            variant="outlined"
          />
        )}
      ></Controller>

      <Controller
        name="description"
        control={control}
        rules={{
          required: "Это поле обязательно",
          validate: (value) => value.length > 5 || "минимум 6 символов",
        }}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            error={Boolean(error?.message)}
            helperText={error?.message}
            label="Описание"
            fullWidth={true}
            variant="outlined"
            multiline={true}
            rows={9}
          />
        )}
      ></Controller>
      <Button disabled={!isValid} type="submit" className="w-full">
        {props.note ? "Сохранить" : "Добавить"}
      </Button>
    </form>
  );
};
