export default function cleanLocalStorage() {
  const localStorage = Object.entries(window.localStorage);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  for (let [key, _value] of localStorage) {
    window.localStorage.removeItem(key);
  }
}
