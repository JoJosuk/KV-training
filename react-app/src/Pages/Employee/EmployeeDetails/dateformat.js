import { isISOString } from "./isISOString";

export const dateformat = (str) => {
  if (isISOString(str)) {
    const newStr = str.split("T");
    const values = newStr[0].split("-");
    return `${values[2]}- ${values[1]}-${values[0]}`;
  } else {
    return str;
  }
};
