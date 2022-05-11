import Storage from './components/storage';
export class LngDynamicStoragePlugin {
    #storages = new Map();
    #init = false;

    static createStorage() {
        if (!this.instance) {
            this.instance = new LngDynamicStoragePlugin();
        }
        return this.instance;
    }

    init(config = []) {
        if (this.#init) return console.info('#LDSP already inited.');
        if (lng?.Component) {
            const that = this;
            lng.Component.prototype._onDetach = (function (func) {
                return function () {
                    that.removeActions(this.id);
                    func.apply(this, arguments);
                };
            })(lng.Component.prototype._onDetach);
        }
        config.forEach((storageConfig) => {
            this.#storages.set(
                storageConfig.name,
                new Storage(storageConfig.namespace, storageConfig.defaultValues)
            );
        });
        this.#init = true;
    }

    getStorage(name) {
        return this.#storages.get(name);
    }

    setToDefault(name) {
        this.getStorage(name)?.setToDefault();
    }

    get(name, key) {
        return this.getStorage(name)?.get(key);
    }

    getAll(name) {
        return this.getStorage(name)?.getAll();
    }

    set(name, key, value, external = false, runActions = true, checkEqualValue = true) {
        this.getStorage(name)?.set(key, value, external, runActions, checkEqualValue);
    }

    setItems(name, data) {
        this.getStorage(name)?.setItems(data);
    }

    addAction(name, key, contextId, action) {
        this.getStorage(name)?.setActionFunc(key, contextId, action);
    }

    addActions(name, keys, contextId, action) {
        if (Array.isArray(keys))
            keys.forEach((key) => this.addAction(name, key, contextId, action));
    }

    removeActions(name, id) {
        this.getStorage(name)?.removeAllActions(id);
    }
}

const LDSP = LngDynamicStoragePlugin.createStorage();

export default LDSP;
