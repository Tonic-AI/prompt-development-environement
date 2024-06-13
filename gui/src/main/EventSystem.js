// src/main/EventSystem.js
const { EventEmitter } = require('events');
const BaseSystem = require('./BaseSystem');
const EventComponent = require('./EventComponent');

// EventSystem class extends BaseSystem to handle IPC events
class EventSystem extends BaseSystem {
    constructor() {
        super('EventSystem'); // Initialize with a system name
        this.eventEmitter = new EventEmitter(); // Create an instance of EventEmitter
        this.eventComponent = new EventComponent(this.eventEmitter);
        this.initializeMainListeners(); // Set up IPC event listeners
        this.initializeRendererListeners();
    }

    // Set up IPC event listeners to handle events from renderer processes
    initializeRendererListeners() { 
        this.log("Initialized IPC listeners");
        this.eventComponent.setupListenerFromRenderer('renderer-event', (event, data) => {
            this.log('Received message from renderer: ' + data); // Log received message
            this.eventComponent.sendEventToRenderer('main-event-response', 'Response from main process');
        });
    }

    // Set up event emitters for local main process events
    initializeMainListeners() {
        this.log("Initialized main process event listeners");
        // Listen for 'main-process-event' and handle it
        this.eventComponent.setupListenerFromMain('main-process-event', (data) => {
            this.log('Received message within main process: ' + data); // Log received message
        });
    }

    // Test method to demonstrate event dispatching
    test() {
        this.log('Test function executed'); // Log test execution
        this.eventComponent.sendEventToRenderer('main-event-renderer', 'Test message from main process');
        this.eventComponent.sendEventToMain('main-process-event', 'Hello from main process');
    }
}

module.exports = EventSystem; // Export EventSystem for use in other parts of the application
