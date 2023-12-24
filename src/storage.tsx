
export const getDataFromStorage = key => {
  const storedData = localStorage.getItem(key);
  return storedData ? JSON.parse(storedData) : null;
};

export const setDataToStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

