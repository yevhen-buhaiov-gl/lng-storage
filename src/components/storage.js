import LocalCookie from '../modules/localCookie';
import isEqual from 'lodash.isequal';

export default class Storage {
    #namespace = '';
    #data = {};
    #default = {};
    #log = false;
    #actionFunctions = new Map();

    /**
     * @param {string} namespace
     * @param {any[]} defaultValues
     * @param {boolean} log
     */
    constructor(namespace, defaultValues = [], log) {
        this.#namespace = namespace;
        this.#log = log;
        defaultValues.forEach(({ key, value }) => {
            this.#default[this.getPropWithNamespace(key)] = value;
            this.set(key, value);
        });
        this.syncData();
    }

    /**
     * @param {string} prop
     */
    getPropWithNamespace(prop) {
        return `${this.#namespace}.${prop}`;
    }

    setToDefault(runActions = true) {
        for (const key in this.#default) {
            this.setData(key.replace(`${this.#namespace}.`, ''), this.#default[key], runActions);
        }
    }

    /**
     * @param {string} prop
     * @param {any} oldValue
     * @param {any} newValue
     */
    runActions(prop, oldValue, newValue) {
        const key = this.getPropWithNamespace(prop);
        const propFunctions = this.#actionFunctions.get(key);
        propFunctions?.forEach((/** @type {any[]} */ functions) => {
            functions.forEach(
                (/** @type {(arg0: any, arg1: any, arg2: any) => void} */ funcName) => {
                    funcName(prop, oldValue, newValue);
                }
            );
        });
    }

    /**
     * @param {string} key
     */
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

    /**
     * @param {string} key
     * @param {any} value
     */
    set(key, value, external = false, runActions = true, checkEqualValue = true) {
        if (external) {
            LocalCookie.setItem(this.getPropWithNamespace(key), value);
            return this.set(key, value, false, runActions, checkEqualValue);
        } else {
            return this.setData(key, value, runActions, checkEqualValue);
        }
    }

    /**
     * @param {{ key: string; value: any; external: boolean; checkEqualValue: boolean; }[]} data
     */
    setItems(data) {
        data.forEach(({ key, value, external, checkEqualValue }) =>
            this.set(key, value, external, checkEqualValue)
        );
    }

    /**
     * @param {string} key
     * @param {string | number} contextId
     * @param {(key: string, oldvalue: any, newvalue: any) => void} action
     */
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

    /**
     * @param {string | number} contextId
     */
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
            ?.map((key) => ({ key, value: LocalCookie.getItem(key) }))
            .forEach(({ key, value }) => {
                if (key.indexOf(this.#namespace) !== -1) {
                    const prop = key.replace(`${this.#namespace}.`, '');
                    this.set(prop, value);
                }
            });
    }

    /**
     * @param {string} key
     */
    getData(key) {
        return this.#data[this.getPropWithNamespace(key)];
    }

    /**
     * @param {string} prop
     * @param {any} value
     * @param {boolean} runActions
     * @param {boolean} [checkEqualValue]
     */
    setData(prop, value, runActions, checkEqualValue) {
        const propWithPrefix = this.getPropWithNamespace(prop);
        const oldValue = this.#data[propWithPrefix];
        if (checkEqualValue && isEqual(oldValue, value)) return;
        if (this.#log) this._log(`Set [${propWithPrefix}]:`, { current: value, prev: oldValue });
        this.#data[propWithPrefix] = value;
        if (runActions) this.runActions(prop, oldValue, value);
    }

    /**
     * @param {string} name
     * @param {{ current: any; prev: any; }} props
     */
    _log(name, props) {
        console.groupCollapsed(
            `%c${name}`,
            'background-color: #4B0082; color: white; padding: 2px 4px; border-radius: 2px',
            props
        );
        console.trace('Stack trace');
        console.groupEnd();
    }
}
