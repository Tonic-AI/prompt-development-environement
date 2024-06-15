// src/renderer/RendererEventSystem.js
import RendererBaseSystem from './RendererBaseSystem';
import RendererEventComponent from './RendererEventComponent';
import RendererChannelNames from './RendererChannelNames';

// System for handling renderer events
export default class RendererEventSystem extends RendererBaseSystem {
    constructor() {
        super('RendererEventSystem');
        this.rendererEventComponent = new RendererEventComponent();
    }

    // Test function to demonstrate event sending
    test() {
        this.log('Executing test function');
        this.rendererEventComponent.setupListenerFromMain(RendererChannelNames.MAIN_EVENT_RENDERER, (data) => {
            this.log(`Received renderer event from main: ${data}`);
        });
        this.rendererEventComponent.setupListenerFromMain(RendererChannelNames.MAIN_EVENT_RESPONSE, (data) => {
            this.log(`Received response event from main: ${data}`);
        });
        this.rendererEventComponent.setupListenerFromRenderer(RendererChannelNames.RENDERER_EVENT_SELF, (data) => {
            this.log(`Received renderer event from renderer: ${data}`);
        });
        this.rendererEventComponent.sendEventToMain(RendererChannelNames.RENDERER_EVENT, { eventType: 'app-pulse', data: 'Hello from renderer to main' });
        this.rendererEventComponent.sendEventToRenderer(RendererChannelNames.RENDERER_EVENT_SELF, { eventType: 'app-pulse', data: 'Hello from renderer self' });
    }
}
