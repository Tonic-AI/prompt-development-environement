// src/main/BaseRegistry.js
const EventRegistryHelper = require("./EventRegistryHelper");

class BaseRegistry {
    constructor(keys) {
        this.initialize(keys);
    }

    initialize(keys = []) {
        this.registry = {};
        this.keys = {};
        this.nextId = 0;
        this.create(keys);
    }

    create(keys) {
        keys.forEach(key => {
            this.add(key);
            this.register(key);
        });
    }

    register(key, value = null) {
        this.set(key, value || EventRegistryHelper.createDefaultValue(key));
    }

    add(name) {
        if (!this.exists(name)) {
            this.keys[name] = this.nextId++;
        }
        return this.keys[name];
    }

    set(name, value) {
        this.registry[this.add(name)] = value;
    }

    get(name) {
        return this.registry[this.keys[name]];
    }

    exists(name) {
        return Object.hasOwnProperty.call(this.keys, name);
    }

    unregister(name) {
        if (this.exists(name)) {
            delete this.registry[this.keys[name]];
            delete this.keys[name];
        }
    }
}

module.exports = BaseRegistry;
