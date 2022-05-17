export default function cleanLocalStorage() {
  window.localStorage.removeItem('refresh_error');
  window.localStorage.removeItem('access');
  window.localStorage.removeItem('user');
}
