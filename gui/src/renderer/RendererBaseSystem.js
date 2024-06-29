// src/renderer/RendererBaseSystem.js
// Base system class for renderer processes
export default class RendererBaseSystem {
    static instances = {};

    constructor(name) {
        this.name = name;
        console.log(`[${this.name}] New System created`);

        if (!RendererBaseSystem.instances[name]) {
            RendererBaseSystem.instances[name] = this;
        }
        return RendererBaseSystem.instances[name];
    }


    initialize() {
        // Placeholder for system initialization code here
    }

    // Log messages with system name
    log(message) {
        console.log(`[${this.name}] ${message}`); // Prefix log with system name
    }
}
