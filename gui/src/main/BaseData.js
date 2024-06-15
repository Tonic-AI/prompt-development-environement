// src/main/BaseData.js
class BaseData {
    constructor(data) {
        this.data = data;
    }

    // Static serialize method as an arrow function
    static serialize = (data) => JSON.stringify(data);

    // Static deserialize method as an arrow function
    static deserialize = (data) => new BaseData(JSON.parse(data));
}

module.exports = BaseData;
