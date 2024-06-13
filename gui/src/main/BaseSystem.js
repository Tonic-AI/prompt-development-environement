// src/main/BaseSystem.js
class BaseSystem {
    static instances = {};
  
    constructor() {
      const className = this.constructor.name;
      this.name = className;
      console.log(`[${className}] New system created`); // Log system creation
      if (!BaseSystem.instances[className]) {
        BaseSystem.instances[className] = this;
      }
      return BaseSystem.instances[className];
    }
  
    initialize() {
        // Placeholder for initialization code common to all derived systems
        // Placeholder for initialization code common to all derived systems
    }

    log(message) {
        console.log(`[${this.name}] ${message}`); // Log messages with system name prefix
        console.log(`[${this.name}] ${message}`); // Log messages with system name prefix
    }
  }

  module.exports = BaseSystem; // Export BaseSystem for inheritance