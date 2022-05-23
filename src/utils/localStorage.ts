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
