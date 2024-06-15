// src/main/RegistryHelper.js
const EventNames = require('./EventNames');

class EventRegistryHelper {
    static getKeysFromEventNames(keys = []) {
        return keys.length > 0 ? keys : Object.keys(EventNames);
    }
    
    static createDefaultValue(key) {
        return () => {
            console.log(`Event triggered: ${key}`);
        };
    }
}

module.exports = EventRegistryHelper;
