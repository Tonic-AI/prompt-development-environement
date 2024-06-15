// src/main/EventData.js
const BaseData = require('./BaseData');

class EventData extends BaseData {
    constructor(eventType, data) {
        super(data);
        this.eventType = eventType;
    }

    toString() {
        return EventData.serialize(this.eventType, this.data);
    }

    // Static serialize method that includes eventType
    static serialize = (eventType, eventData) => BaseData.serialize({ "eventType": eventType, "data": eventData });

    // Static deserialize method that handles eventType and returns an EventData object
    static deserialize = (serializedData) => {
        const { eventType, data } = BaseData.deserialize(serializedData);
        return new EventData(eventType, data);
    }
}

module.exports = EventData;
