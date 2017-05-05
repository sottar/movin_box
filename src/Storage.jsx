/* @flow */
export default class Storage {
  getLocalStorage(key: string): ?string {
    return localStorage[key];
  }

  saveLocalStorage(key: string, value: string) {
    localStorage[key] = value;
  }

  deleteLocalStorage(key: string) {
    localStorage.removeItem(key);
  }

}
