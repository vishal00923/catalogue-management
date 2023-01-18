export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export const truncate = (str, lim) =>
  str.length > lim ? str.substring(0, lim) + '...' : str;
