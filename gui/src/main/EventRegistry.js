// src/main/EventRegistry.js
const BaseRegistry = require('./BaseRegistry');
const EventRegistryHelper = require("./EventRegistryHelper");

class EventRegistry extends BaseRegistry {
    constructor(keys = []) {
        super(EventRegistryHelper.getKeysFromEventNames(keys));
    }
}

module.exports = EventRegistry;
