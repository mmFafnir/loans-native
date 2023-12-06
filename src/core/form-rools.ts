// import { ValidationRule } from "react-hook-form";
// import { NotifyEnum } from "../types/notifyEnum";

export const validRequired = 'Required field';

export const validEmail = {
  value:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  message: `Must include the '@' symbol and valid domain (e.g. .com, .net).`,
};

export const validMin = (min: number) => ({
  value: min,
  message: `Field may not be less than ${min} letters`,
});

export const validMax = (max: number) => ({
  value: max,
  message: `Field may not be more than ${max} letters`,
});

export const validNotNumber = {
  value: /^[a-zA-Z]+$/,
  message: `include numeric values/symbols.`,
};

// export const validPhoneNumber = {
//   value:  /^(?!0|1)\(\d{3}\)\s*\d{3}-\d{4}$/,
//   message:
//     'Must only contain numeric values. Number must be 10 digits including area code and should not start on 0 or 1.',
// };

// value: /\d+/,
// export const validNumber: Rule = {
//   required: true,
//   type: "number",
//   message: "В поле должно быть число!",
// };
