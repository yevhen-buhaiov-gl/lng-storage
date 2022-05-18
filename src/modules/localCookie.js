import Cookies from 'js-cookie';

class LocalCookie {
    constructor(options = { forceCookies: false }) {
        this.forceCookies = options.forceCookies || !this._checkIfLocalStorageWorks();
    }

    /**
     * @param {string} key
     * @param {any} value
     */
    setItem(key, value) {
        try {
            const stringValue = JSON.stringify(value);
            return !this.forceCookies
                ? this._setItemLocalStorage(key, stringValue)
                : this._setItemCookie(key, stringValue);
        } catch (e) {
            return;
        }
    }

    /**
     * @param {string} key
     */
    getItem(key) {
        try {
            return JSON.parse(
                !this.forceCookies ? this._getItemLocalStorage(key) : this._getItemCookie(key)
            );
        } catch (e) {
            return;
        }
    }

    /**
     * @param {string} key
     */
    removeItem(key) {
        return !this.forceCookies ? this._removeItemLocalStorage(key) : this._removeItemCookie(key);
    }

    clear() {
        return !this.forceCookies ? this._clearLocalStorage() : this._clearCookies();
    }

    _clearCookies() {
        document.cookie.split(';').forEach((c) => {
            document.cookie = c.replace(/^ +/, '').replace(/=.*/, '=;expires=Max-Age=-99999999');
        });
    }

    _clearLocalStorage() {
        return window.localStorage.clear();
    }

    /**
     * @param {string} key
     */
    _removeItemCookie(key) {
        Cookies.remove(key);
    }

    /**
     * @param {string} key
     */
    _removeItemLocalStorage(key) {
        window.localStorage.removeItem(key);
    }

    /**
     * @param {string} key
     * @param {string} value
     */
    _setItemLocalStorage(key, value) {
        return window.localStorage.setItem(key, value);
    }

    /**
     * @param {string} key
     * @param {any} value
     */
    _setItemCookie(key, value) {
        Cookies.set(key, value, { expires: 365 * 5 });
    }

    keys() {
        return this.forceCookies ? this._getCookieKeys() : this._getLocalStorageKeys();
    }

    /**
     * @param {string} key
     */
    _getItemLocalStorage(key) {
        return window.localStorage.getItem(key);
    }

    /**
     * @param {string} key
     */
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
