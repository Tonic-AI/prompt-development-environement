// src/main/BaseSystem.js
class BaseSystem {
    constructor(name) {
        this.name = name; // Name of the system
        console.log(`[${this.name}] New system created`); // Log system creation
    }

    initialize() {
        // Placeholder for initialization code common to all derived systems
    }

    log(message) {
        console.log(`[${this.name}] ${message}`); // Log messages with system name prefix
    }
}

module.exports = BaseSystem; // Export BaseSystem for inheritance
