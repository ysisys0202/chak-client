import React from "react";
import { UseFormRegister } from "react-hook-form";
import TextareaAutosize from "react-textarea-autosize";
import { RecordData } from "@/util/validation/record";
import { DataTypes } from "@/types/data";

type Props = {
  type: HTMLInputElement["type"] | "select" | "textarea";
  id: keyof RecordData;
  options?: { value: string | number; name: string | number }[];
  register: UseFormRegister<RecordData>;
  dataType?: DataTypes;
};

const RecordFormField = ({ type, id, options, dataType, register }: Props) => {
  if (type === "textarea") {
    return <TextareaAutosize {...register(id)} />;
  }
  if (type === "select") {
    return (
      <select
        id={id}
        {...register(id, { valueAsNumber: dataType === "number" })}
      >
        {options?.map(({ value, name }) => (
          <option key={value} value={value}>
            {name}
          </option>
        ))}
      </select>
    );
  }
  return <input type={type} {...register(id)} />;
};

export default RecordFormField;
