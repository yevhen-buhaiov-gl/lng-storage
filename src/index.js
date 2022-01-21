import Storage from './components/storage';

/**
 * Main LDSP
 */
export class LngDynamicStoragePlugin {
    #storages = [];

    init(config = []) {
        config.forEach((storageConfig) => {
            this.#storages.push({
                name: storageConfig.name,
                instance: new Storage(storageConfig.namespace, storageConfig.defaultValues),
            });
        });
    }

    getStorage(name) {
        return this.#storages?.find((storage) => storage.name === name)?.instance;
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

const LDSP = new LngDynamicStoragePlugin();

Object.freeze(LDSP);

export default LDSP;
