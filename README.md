## Lightning Dynamic Storage Plugin

Plugin that created to simplify data storage and dynamically update the Lightning components✨

GitHub repository with an example of usage storage + router [public repository][lng-storage-usage].

## Init

```
LDSP.init([
    {
        name: 'main', // Storage name
        namespace: 'lng.main', // namespace for LocalStorage to split storage and exclude collisions
        defaultValues: [{key: 'color', value: 0xff225cb3, external: true }] // default values object
    }
], true); // by default log parameter is false
```

## Basic Usage

```
import { Lightning, Utils } from "@lightningjs/sdk";
import LDSP from "lng-storage";

export default class Home extends Lightning.Component {
    _setup() {
      LDSP.addAction('main', 'color', this.id, this._setBackgroundColor);
    }

    _init() {
      this.patch({
        Background: {
          rect: true,
          w: 1920,
          h: 1080,
          color: LDSP.get('main', 'color'),
        },
        Logo: {
          mountX: 0.5,
          mountY: 1,
          x: 960,
          y: 600,
          src: Utils.asset('images/logo.png'),
        },
        Text: {
          mount: 0.5,
          x: 960,
          y: 720,
          text: {
            text: "Home",
            fontFace: 'Regular',
            fontSize: 64,
            textColor: 0xbbffffff,
          },
        },
      })
    }

    _setBackgroundColor = (_key, _old, current) => {
      this.tag('Background').patch({ color: current });
    }
}
```

## Methods

```
LDSP.init(config, log) - Initialization of the Storages;

LDSP.get(storageName, key) - Get data by storage name and property key;

LDSP.set(storageName, key, value) - Set data by storage name and propery key;

LDSP.setToDefault(storageName) - Set storage data to default values by storage name;

LDSP.getAll(storageName) - Get whole storage object by storage name;

NOTE: To prevent memoty leak we should delete all callbacks when component have been detached and should pass Lightning component is as contextId!
LDSP.addAction(storageName, key, contextId, callback) - Add an event for the key that will be triggered when the value is changed (callback(key, oldValue, newValue));

LDSP.addActions(storageName, keys, contextId, callback) - Add an event for the keys (Array of keys) that will be triggered when the value of some key is changed (callback(key, oldValue, newValue));

LDSP.removeActions(storageName, contextId) - Removes all actions of storage for separate contextId;
```

GitHub [public repository][lng-storage].

[lng-storage]: https://github.com/yevhen-buhaiov-gl/lng-storage
[lng-storage-usage]: https://github.com/yevhen-buhaiov-gl/lng-storage-usage
