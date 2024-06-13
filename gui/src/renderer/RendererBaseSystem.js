// src/renderer/RendererBaseSystem.js
// Base system class for renderer processes
export default class RendererBaseSystem {
    constructor(name) {
        this.name = name; // System name
        console.log(`[${this.name}] System created`); // Log system creation
    }

    // Placeholder for system initialization
    initialize() {
        // Common initialization code here
    }

    // Log messages with system name
    log(message) {
        console.log(`[${this.name}] ${message}`); // Prefix log with system name
    }
}
