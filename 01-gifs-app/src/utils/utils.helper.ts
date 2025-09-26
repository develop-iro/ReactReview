export const formatValue = (value: string) => {
  return value.trim().toLowerCase();
};

export const isEmpty = (value: string): boolean => {
  return value.trim().length === 0;
};

export const contains = (value: Array<string>, item: string): boolean => {
  return value.includes(item);
};
