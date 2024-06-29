// src/main/BaseSystem.js
const log = require('electron-log');

class BaseSystem {
	static instances = {};

	constructor(name) {
		this.name = name;
		log.info(`[${name}] New system created`);
		if (!BaseSystem.instances[name]) {
			BaseSystem.instances[name] = this;
		}
		return BaseSystem.instances[name];
	}

	initialize() {
		// Placeholder for initialization code common to all derived systems
	}

	log(message) {
		log.info(`[${this.name}] ${message}`); // Log messages with system name prefix using electron-log
	}
}

module.exports = BaseSystem; // Export BaseSystem for inheritance
