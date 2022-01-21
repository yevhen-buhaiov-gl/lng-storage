import LocalCookie from '../modules/localCookie';
import isEqual from 'lodash.isequal';

export default class Storage {
    #namespace = '';
    #data = {};
    #default = {};
    #actionFunctions = new Map();

    constructor(namespace, defaultValues = []) {
        this.#namespace = namespace;
        defaultValues.forEach(({ key, value }) => {
            this.#default[this.getPropWithNamespace(key)] = value;
            this.set(key, value);
        });
        this.syncData();
    }

    getPropWithNamespace(prop) {
        return `${this.#namespace}.${prop}`;
    }

    setToDefault(runActions = true) {
        for (const key in this.#default) {
            this.setData(key.replace(`${this.#namespace}.`, ''), this.#default[key], runActions);
        }
    }

    runActions(prop, oldValue, newValue) {
        const key = this.getPropWithNamespace(prop);
        const propFunctions = this.#actionFunctions.get(key);
        propFunctions?.forEach((functions) => {
            functions.forEach((funcName) => {
                funcName(prop, oldValue, newValue);
            });
        });
    }

    get(key) {
        return this.getData(key);
    }

    getAll() {
        const data = {};
        for (const item in this.#data) {
            data[item.replace(`${this.#namespace}.`, '')] = this.#data[item];
        }
        return data;
    }

    set(key, value, external = false, runActions = true, checkEqualValue = true) {
        if (external) {
            LocalCookie.setItem(this.getPropWithNamespace(key), value);
            this.set(key, value, false, runActions, checkEqualValue);
        } else {
            this.setData(key, value, runActions, checkEqualValue);
        }
    }

    setItems(data) {
        data.forEach(({ key, value, external }) => this.set(key, value, external));
    }

    setActionFunc(key, contextId, action) {
        const keyWithPrefix = this.getPropWithNamespace(key);
        const stringContextId = String(contextId);
        if (this.#actionFunctions.has(keyWithPrefix)) {
            const keyMap = this.#actionFunctions.get(keyWithPrefix);
            if (keyMap.has(stringContextId)) {
                const funcArray = keyMap.get(stringContextId);
                keyMap.set(stringContextId, [...funcArray, action]);
            } else {
                keyMap.set(stringContextId, [action]);
            }
        } else {
            this.#actionFunctions.set(keyWithPrefix, new Map([[stringContextId, [action]]]));
        }
    }

    removeAllActions(contextId) {
        if (this.#actionFunctions) {
            const stringContextId = String(contextId);
            this.#actionFunctions.forEach((el) => {
                el.has(stringContextId) && el.delete(stringContextId);
            });
        }
    }

    syncData() {
        LocalCookie.keys()
            .map((key) => ({ key, value: LocalCookie.getItem(key) }))
            .forEach(({ key, value }) => {
                if (key.indexOf(this.#namespace) !== -1) {
                    const prop = key.replace(`${this.#namespace}.`, '');
                    this.set(prop, value);
                }
            });
    }

    getData(key) {
        return this.#data[this.getPropWithNamespace(key)];
    }

    setData(prop, value, runActions, checkEqualValue) {
        const propWithPrefix = this.getPropWithNamespace(prop);
        const oldValue = this.#data[propWithPrefix];
        if (checkEqualValue && isEqual(oldValue, value)) return;
        this.#data[propWithPrefix] = value;
        if (runActions) {
            this.runActions(prop, oldValue, value);
        }
    }
}
