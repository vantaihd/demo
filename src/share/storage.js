export class LocalStorageService {
  localStorage;
  isEnabled = false;

  constructor() {
    if (!window.localStorage) {
      this.isEnabled = false;
      console.error("Current browser does not support Local Storage");
      return;
    }
    this.isEnabled = true;
    this.localStorage = window.localStorage;
  }

  set(key, value) {
    if (this.isEnabled) {
      this.localStorage.setItem(key, value);
    }
  }

  get(key) {
    if (!this.isEnabled) {
      return "";
    }

    return this.localStorage.getItem(key) || "";
  }

  setObject(key, value) {
    if (!this.isEnabled) {
      return;
    }
    this.localStorage.setItem(key, JSON.stringify(value));
  }

  getObject(key) {
    if (!this.isEnabled) {
      return null;
    }
    return JSON.parse(this.localStorage.getItem(key) || "null");
  }

  remove(key) {
    if (!this.isEnabled) {
      return;
    }
    this.localStorage.removeItem(key);
  }

  clear() {
    this.localStorage.clear();
  }
}
