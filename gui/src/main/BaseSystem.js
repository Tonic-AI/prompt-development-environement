// src/main/BaseSystem.js
class BaseSystem {
    constructor(name) {
        this.name = name;
        console.log(`[${this.name}] System created`);
    }

    initialize() {
        // Initialization code common to all systems
    }

    log(message) {
        console.log(`[${this.name}] ${message}`);
    }
}

module.exports = BaseSystem;
