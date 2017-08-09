export const inArray = (array, value) => array.indexOf(value) !== -1;

export const pushUnique = (array, value) => {
  if (array.indexOf(value) === -1) {
    return [...array, value];
  }
  return array;
};

export const unique = array => array.filter((item, i, ar) => ar.indexOf(item) === i);

