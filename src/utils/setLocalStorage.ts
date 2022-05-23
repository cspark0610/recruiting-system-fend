export default function setLocalStorage(items: Record<string, string>) {
  for (let key in items) {
    window.localStorage.setItem(key, items[key]);
  }
}
