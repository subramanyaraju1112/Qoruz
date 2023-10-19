const STORAGE_KEY = 'hideWebinarPopup';

export const setHideWebinarPopupStorage = (): void => {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 30); // 30 days from now
  const item = { hidden: true, expiration: expirationDate.getTime() };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(item));
};

export const hasValidHideWebinarPopupStorage = (): boolean => {
  const item = localStorage.getItem(STORAGE_KEY);
  if (item) {
    const { hidden, expiration } = JSON.parse(item);
    return hidden && expiration > Date.now();
  }
  return false;
};
