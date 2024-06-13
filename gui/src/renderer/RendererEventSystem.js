// src/renderer/RendererEventSystem.js
import RendererBaseSystem from './RendererBaseSystem';

export default class RendererEventSystem extends RendererBaseSystem {
    constructor() {
        super('R-EVENT-SYSTEM');
        this.initializeIpcListeners();
    }

    initializeIpcListeners() {
        window.api.receive('main-event-response', (data) => {
            this.log('Received response from main process: ' + data);
        });
    }

    test() {
        this.log('test function executed');
        window.api.send('renderer-event', 'Hello to Better Prompts');
    }
}
