type IAsNumberValue = string | number | undefined;

export const asNumber = (value: IAsNumberValue): number => {
  const numValue = Number(value);
  return isNaN(numValue) ? 0 : numValue;
};
