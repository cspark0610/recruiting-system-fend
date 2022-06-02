export function getStorageItem(key: string, isPrimitive?: boolean) {
  return isPrimitive
    ? window.localStorage.getItem(key)
    : window.localStorage.getItem(key)
    ? JSON.parse(window.localStorage.getItem(key) as string)
    : null;
}

export function setStorage(items: Record<string, string>) {
  for (let key in items) {
    window.localStorage.setItem(key, items[key]);
  }
}

export function cleanStorage() {
  const localStorage = Object.entries(window.localStorage);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  for (let [key, _value] of localStorage) {
    window.localStorage.removeItem(key);
  }
}
