// src/renderer/RendererEventComponent.js
import RendererBaseComponent from './RendererBaseComponent';

// Component for handling events in renderer process
class RendererEventComponent extends RendererBaseComponent {
  constructor(type, data) {
    super(); // Call base component constructor
    this.setType(type); // Set event type
    this.setData(data); // Set event data
  }

  // Send event to main process
  sendEventToMain(channel, data) {
    window.api.send(channel, data); // Use context bridge to send event
  }

  // Set up listener for events from main process
  setupListenerFromMain(channel, callback) {
    window.api.receive(channel, callback); // Use context bridge to listen for events
  }

  // Send event to self (within the same renderer process)
  sendEventToRenderer(eventName, detail) {
    const event = new CustomEvent(eventName, { detail });
    window.dispatchEvent(event); // Dispatch the event
  }

  // Set up listener for events from self (within the same renderer process)
  setupListenerFromRenderer(eventName, callback) {
    window.addEventListener(eventName, (event) => callback(event.detail)); // Listen for the event
  }
}

export default RendererEventComponent; // Export for use in renderer system
