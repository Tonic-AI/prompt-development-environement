// src/renderer/RendererBaseSystem.js
export default class RendererBaseSystem {
    constructor(name) {
        this.name = name;
        console.log(`[${this.name}] System created`);
    }

    initialize() {
        // Initialization code common to all renderer systems
    }

    log(message) {
        console.log(`[${this.name}] ${message}`);
    }
}
