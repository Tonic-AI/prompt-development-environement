// src/main/EventSystem.js
const { EventEmitter } = require('events');
const BaseSystem = require('./BaseSystem');
const EventComponent = require('./EventComponent');
const EventRegistry = require('./EventRegistry');
const EventNames = require('./EventNames');
const ChannelNames = require('./ChannelNames');
const EventData = require('./EventData');

// EventSystem class extends BaseSystem to handle IPC events
class EventSystem extends BaseSystem {
    constructor() {
        super('EventSystem');
        this.eventRegistry = new EventRegistry();
        this.eventEmitter = new EventEmitter();
        this.eventComponent = new EventComponent(this.eventEmitter, this.eventRegistry);
    }

    // Test method to demonstrate event dispatching
    test() {
        this.log('Executing test function');
        this.eventComponent.setupListenerFromRenderer((event, eventData) => {
            this.log(`Recieved event from renderer: ${EventData.serialize(eventData.eventType, eventData.data)}`);
            const replyEventData = new EventData(EventNames.APP_PULSE + '-reply', 'Hello test reply event from renderer');
            this.log(`Send reply event to renderer: ${replyEventData}`)
            event.sender.send(ChannelNames.MAIN_EVENT_RESPONSE, replyEventData.toString())
        });
        this.eventComponent.setupListenerFromMain((data) => {
            this.log(`Received event from main: ${data}`);
        });

        const data = 'Hello test event from main';
        this.log(`Send event to main : ${data}`)
        this.eventComponent.sendEventToMain(EventNames.APP_PULSE, data);

        const data0 = 'Hello test event from main';
        this.log(`Send event to renderer: \"${data0}\"`)
        this.eventComponent.sendEventToRenderer(EventNames.APP_PULSE, data0);
    }
}

module.exports = EventSystem;
