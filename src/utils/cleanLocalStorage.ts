export default function cleanLocalStorage() {
  window.localStorage.removeItem('access');
  window.localStorage.removeItem('user');
}
