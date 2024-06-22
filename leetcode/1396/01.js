var UndergroundSystem = /** @class */ (function () {
    function UndergroundSystem() {
        this.checkInList = [];
        this.customerDict = {};
    }
    UndergroundSystem.prototype.checkIn = function (id, stationName, t) {
        // // 记录这名乘客进入过stationName
        // // this.checkInList.push(id)
        // if (!this.checkInDict.hasOwnProperty(stationName)) {
        //     this.checkInDict[stationName] = []
        // }
        // 记录这名乘客进入
        this.checkInList.push(id);
        // 记录乘客checkin信息
        if (!this.customerDict.hasOwnProperty(id)) {
            this.customerDict[id] = {};
        }
        this.customerDict[id]["start"] = stationName;
        this.customerDict[id]["startTime"] = t;
    };
    UndergroundSystem.prototype.checkOut = function (id, stationName, t) {
        // // 记录这名乘客从stationName出去
        // if (!this.checkInDict.hasOwnProperty(stationName)) {
        //     this.checkInDict[stationName] = []
        // }
        // this.checkInList[stationName].push(id)
        // 记录乘客checkout信息
        this.customerDict[id]["end"] = stationName;
        this.customerDict[id]["endTime"] = t;
    };
    UndergroundSystem.prototype.getAverageTime = function (startStation, endStation) {
        var _this = this;
        var avaList = [];
        this.checkInList.forEach(function (id) {
            var customer = _this.customerDict[id];
            if (customer["start"] == startStation && customer["end"] == endStation) {
                avaList.push(customer["endTime"] - customer["startTime"]);
            }
        });
        return _.mean(avaList);
    };
    return UndergroundSystem;
}());
/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */ 
