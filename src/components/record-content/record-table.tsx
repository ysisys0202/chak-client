"use client";

import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import { Input, InputField } from "chak-blocks/plain";
import { recordContentStyles } from "./style.css";

const recordFields = [
  {
    id: "title",
    label: "제목",
    type: "text",
  },
  {
    id: "reading-status",
    label: "상태",
    type: "select",
    options: [
      { value: "pre-reading", name: "읽기 전" },
      { value: "reading", name: "읽는 중" },
      { value: "stop", name: "중단" },
      { value: "done", name: "완독" },
    ],
  },
  {
    id: "rating",
    label: "별점",
    type: "select",
    options: Array.from({ length: 10 }, (_, index) => ({
      value: index + 1,
      name: index + 1,
    })),
  },
  {
    id: "detail-comment",
    label: "상세 기록",
    type: "textarea",
  },
];

const RecordTable = () => {
  return (
    <div>
      {recordFields.map(({ id, label, type, options }) => {
        const isInput = type !== "select" && type !== "textarea";
        return (
          <InputField
            id={id}
            label={label}
            className={recordContentStyles.cellItem}
          >
            {isInput && (
              <Input
                id={id}
                type={type}
                value="책 제목"
                className={recordContentStyles.cellInput}
                readOnly
              />
            )}

            {type === "select" && (
              <select id={id} className={recordContentStyles.cellInput}>
                {options?.map(({ value, name }) => (
                  <option value={value}>{name}</option>
                ))}
              </select>
            )}
            {type === "textarea" && (
              <TextareaAutosize
                id={id}
                className={`${recordContentStyles.cellInput} ${recordContentStyles.textarea}`}
                value="pZGVtZW51U3R5bGVzX3NlbGZfXzFweGNmeGowIHsKICBkaXNwbGF5OiBmbGV4OwogIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47CiAgYWxpZ24taXRlbXM6IHN0YXJ0OwogIHdpZHRoOiAxMDAlOwogIG1heC13aWR0aDogMjgwcHg7CiAgaGVpZ2h0OiAxMDB2aDsKICBib3JkZXItcmFkaXVzOiAwIDEyMHB4IDAgMDsKICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVkN2UyOwp9Ci5zdHlsZV9zaWRlbWVudVN0eWxlc19sb2dvX18xcHhjZnhqMSB7CiAgbWFyZ2luOiA2MHB4IDAgMCAyNHB4Owp9Ci5zdHlsZV9zaWRlbWVudVN0eWxlc191c2VyUHJvZmlsZV9fMXB4Y2Z4ajIgewogIG1hcmdpbjogMCBhdXRvOwogIG1hcmdpbi10b3A6IDEyMHB4Owp9Ci5zdHlsZV9zaWRlbWVudVN0eWxlc19uYXZfXzFweGNmeGozIHsKICBtYXJnaW4tdG9wOiA4MHB4OwogIHdpZHRoOiAxMDAlOwp9Ci5zdHlsZV9zaWRlbWVudVN0eWxlc19sb2dvdXRCdXR0b25fXzFweGNmeGo0IHsKICBtYXJnaW4tdG9wOiBhdXRvOwogIG1hcmdpbi1sZWZ0OiAyNHB4OwogIG1hcmdpbi1ib3R0b206IDYwcHg7Cn0KLnN0eWxlX3NpZGVtZW51SXRlbVN0eWxlc19saW5rX18xcHhjZnhqNSB7CiAgZGlzcGxheTogZmxleDsKICBhbGlnbi1pdGVtczogY2VudGVyOwogIGdhcDogOHB4OwogIHBhZGRpbmc6IDEycHg"
              />
            )}
          </InputField>
        );
      })}
    </div>
  );
};

export default RecordTable;
