// src/renderer/RendererEventSystem.js
export default class RendererEventSystem {
  constructor() {
    console.log("[R-EVENT-SYSTEM] created");
    this.initializeIpcListeners();
  }

  initializeIpcListeners() {
    window.api.receive('main-event-response', (data) => {
      console.log('[R-EVENT-SYSTEM] Received response from main process:', data);
    });
  }

  test() {
    console.log('[R-EVENT-SYSTEM] test function executed');
    window.api.send('renderer-event', 'Hello to Better Prompts');
  }
}
