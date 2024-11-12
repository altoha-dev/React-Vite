import { TextField } from "@mui/material";
import { FC } from "react";
import { Controller, Form, useForm } from "react-hook-form";
import { Button } from "../../shared/ui/Button";

interface Props {}
type Form = {
  title: string;
  description: string;
};
export const NoteForm: FC<Props> = function NoteForm() {
  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<Form>({
    defaultValues: {
      title: "",
      description: "",
    },
  });

  return (
    <form
      onSubmit={handleSubmit((form) => {
        console.log(form);
      })}
      className="flex flex-col gap-3"
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
        {"Добавить"}
      </Button>
    </form>
  );
};
