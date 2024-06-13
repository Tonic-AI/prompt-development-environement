// src/main/EventComponent.js
const BaseComponent = require('./BaseComponent');

class EventComponent extends BaseComponent {
    constructor(type, data) {
        super();
        this.type = type;
        this.data = data;
    }

    dispatch(ipcMain) {
        ipcMain.emit(this.type, this.data);
    }
}

module.exports = EventComponent;
