import Cookies from 'js-cookie';

class LocalCookie {
    constructor(options = { forceCookies: false }) {
        this.forceCookies = options.forceCookies || !this._checkIfLocalStorageWorks();
    }

    setItem(key, value) {
        return !this.forceCookies
            ? this._setItemLocalStorage(key, value)
            : this._setItemCookie(key, value);
    }

    getItem(key) {
        return !this.forceCookies ? this._getItemLocalStorage(key) : this._getItemCookie(key);
    }

    removeItem(key) {
        return !this.forceCookies ? this._removeItemLocalStorage(key) : this._removeItemCookie(key);
    }

    clear() {
        return !this.forceCookies ? this._clearLocalStorage() : this._clearCookies();
    }

    _clearCookies() {
        // empty all key/values in cookies
        document.cookie.split(';').forEach((c) => {
            document.cookie = c.replace(/^ +/, '').replace(/=.*/, '=;expires=Max-Age=-99999999');
        });

        return; //return undefined
    }

    _clearLocalStorage() {
        return window.localStorage.clear();
    }

    _removeItemCookie(key) {
        // to delete an k/v set the key to empty
        Cookies.remove(key);
        return; //return undefined just like localStorage
    }

    _removeItemLocalStorage(key) {
        window.localStorage.removeItem(key);
    }

    _setItemLocalStorage(key, value) {
        return window.localStorage.setItem(key, value);
    }

    _setItemCookie(key, value) {
        var now = new Date();
        var expires = new Date(now.getTime() + 1000 * 60 * 60 * 24 * 365 * 5);
        document.cookie = `${key}=${value}; expires=${expires.toUTCString()};`;
        return; //return undefined just like localStorage
    }

    keys() {
        return this.forceCookies ? this._getCookieKeys() : this._getLocalStorageKeys();
    }

    _getItemLocalStorage(key) {
        return window.localStorage.getItem(key);
    }

    _getItemCookie(key) {
        return Cookies.get(key);
    }

    _checkIfLocalStorageWorks() {
        return window.localStorage && typeof window.localStorage !== 'undefined';
    }

    _getLocalStorageKeys() {
        return Object.keys(window.localStorage);
    }

    _getCookieKeys() {
        return document.cookie
            .split(';')
            .map((item) => {
                const splitted = item.split('=')[0];
                return typeof splitted !== 'undefined' ? splitted.trim() : '';
            })
            .filter((item) => item !== '');
    }
}

export default new LocalCookie();
