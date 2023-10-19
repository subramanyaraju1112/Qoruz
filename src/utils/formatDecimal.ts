export const formatDecimal = (number: number) => {
  if (!number) {
    return null;
  }
  let formattedNumber = number.toFixed(2);
  if (formattedNumber.indexOf('.') === -1) {
    formattedNumber += '.00';
  }
  return formattedNumber;
};
