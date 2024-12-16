export const capitalize = (str: string): string => {
  if (str.length <= 1) {
    return str.toUpperCase();
  } else {
    return str[0].toUpperCase() + str.slice(1);
  }
};

export const reverseString = (str: string): string => {
  if (str.length <= 1) {
    return str;
  } else {
    return str.split("").reverse().join("");
  }
};
