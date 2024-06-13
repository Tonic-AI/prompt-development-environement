// src/renderer/RendererEventSystem.js
import RendererBaseSystem from './RendererBaseSystem';
import RendererEventComponent from './RendererEventComponent';

// System for handling renderer events
export default class RendererEventSystem extends RendererBaseSystem {
    constructor() {
        super('RendererEventSystem'); // Initialize with system name
        this.rendererEventComponent = new RendererEventComponent(); // Create event component instance
        this.initializeMainListeners(); // Set up IPC listeners
        this.initializeRendererListeners(); // Set up local listeners
    }

    // Initialize IPC listeners for main process communication
    initializeMainListeners() {
        this.rendererEventComponent.setupListenerFromMain('main-event-response', (data) => {
            this.log('Received response from main process: ' + data); // Log responses from main
        });
    }

    // Initialize local listeners for renderer process communication
    initializeRendererListeners() {
        this.rendererEventComponent.setupListenerFromRenderer('renderer-event-self', (data) => {
            this.log('Received local event: ' + data); // Log local events
        });
    }

    // Test function to demonstrate event sending
    test() {
        this.log('Test function executed'); // Log test execution
        this.rendererEventComponent.sendEventToMain('renderer-event', 'Hello to Better Prompts'); // Send test event to main
        this.rendererEventComponent.sendEventToRenderer('renderer-event-self', 'Hello from self'); // Send local event
    }
}
