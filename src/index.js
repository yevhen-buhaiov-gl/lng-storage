import Storage from './components/storage';
class LightningStorage {
    #storages = new Map();
    #init = false;

    static createStorage() {
        if (!this.instance) this.instance = new LightningStorage();
        return this.instance;
    }

    init(config = [], log = false) {
        if (this.#init) return console.info("# You can't init LS twice.");
        if (lng?.Component) {
            const that = this;
            lng.Component.prototype._onDetach = (function (func) {
                return function () {
                    that.removeActions(this.id);
                    func.apply(this, arguments);
                };
            })(lng.Component.prototype._onDetach);
        } else {
            return console.error('Lightning is not loaded.');
        }
        config.forEach(({ name, namespace, defaultValues }) =>
            this.#storages.set(name, new Storage(`${name}.${namespace}.`, defaultValues, log))
        );
        this.#init = true;
    }

    /**
     * @param {string} name
     */
    _getStorage(name) {
        return this.#storages.get(name);
    }

    /**
     * @param {string} name
     */
    setToDefault(name) {
        this._getStorage(name)?.setToDefault();
    }

    /**
     * @param {string} name
     * @param {string} key
     */
    get(name, key) {
        return this._getStorage(name)?.get(key);
    }

    /**
     * @param {string} name
     */
    getAll(name) {
        return this._getStorage(name)?.getAll();
    }

    /**
     * @param {string} name
     * @param {string} key
     * @param {any} value
     * @param external
     * @param runActions
     * @param checkEqualValue
     */
    set(name, key, value, external = false, runActions = true, checkEqualValue = true) {
        this._getStorage(name)?.set(key, value, external, runActions, checkEqualValue);
    }

    /**
     * @param {string} name
     * @param {any} data
     */
    setItems(name, data) {
        this._getStorage(name)?.setItems(data);
    }

    /**
     * @param {string} name
     * @param {string} key
     * @param {string | number} contextId
     * @param {(key: string, oldvalue: any, value: any) => void} action
     */
    addAction(name, key, contextId, action) {
        this._getStorage(name)?.setActionFunc(key, contextId, action);
    }

    /**
     * @param {string} name
     * @param {string[]} keys
     * @param {string | number} contextId
     * @param {(key: string, oldvalue: any, value: any) => void} action
     */
    addActions(name, keys, contextId, action) {
        if (Array.isArray(keys))
            keys.forEach((key) => this.addAction(name, key, contextId, action));
    }

    /**
     * @param {string} name
     * @param {number | string} [id]
     */
    removeActions(name, id) {
        this._getStorage(name)?.removeAllActions(id);
    }
}

const LS = LightningStorage.createStorage();

export default LS;
