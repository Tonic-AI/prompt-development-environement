// src/renderer/RendererEventComponent.js
import EventData from '../main/EventData';
import RendererBaseComponent from './RendererBaseComponent';

// Component for handling events in renderer process
class RendererEventComponent extends RendererBaseComponent {
  constructor(type, data) {
    super();
    this.setType(type);
    this.setData(data);
  }

  // Send event to main process
  sendEventToMain(channel, data) {
    window.api.send(channel, data); // Use context bridge to send event
  }

  // Set up listener for events from main process
  setupListenerFromMain(channel, func) {
    window.api.receive(channel, func); // Use context bridge to listen for events
  }

  // Send event to self (within the same renderer process)
  sendEventToRenderer(eventType, data) {
    window.dispatchEvent(new CustomEvent(eventType, { detail: data }));
  }

  // Set up listener for events from self (within the same renderer process)
  setupListenerFromRenderer(channel, func) {
    window.addEventListener(channel, (event) => {
      func(event.detail.data)
    });
  }
}

export default RendererEventComponent; // Export for use in renderer system
