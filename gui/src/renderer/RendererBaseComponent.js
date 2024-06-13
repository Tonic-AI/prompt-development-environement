// src/renderer/RendererBaseComponent.js
// Base component class for renderer components
class RendererBaseComponent {
  constructor() {
    this.type = ''; // Event type
    this.data = null; // Event data
  }

  // Set the event type
  setType(type) {
    this.type = type;
  }

  // Set the event data
  setData(data) {
    this.data = data;
  }
}

export default RendererBaseComponent; // Export for inheritance
