// src/renderer/RendererBaseSystem.js
// Base system class for renderer processes
export default class RendererBaseSystem {
    static instances = {};

    constructor() {
        const className = this.constructor.name;
        this.name = className;
        console.log(`[${this.name}] System created`); // Log system creation

        if (!RendererBaseSystem.instances[className]) {
            RendererBaseSystem.instances[className] = this;
        }
        return RendererBaseSystem.instances[className];
    }

    
    initialize() {
        // Placeholder for system initialization code here
    }

    // Log messages with system name
    log(message) {
        console.log(`[${this.name}] ${message}`); // Prefix log with system name
    }
}
