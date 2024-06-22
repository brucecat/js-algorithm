var UndergroundSystem01 = /** @class */ (function () {
    function UndergroundSystem01() {
        this.completedTrips = {};
        this.inProgressTrips = {};
    }
    UndergroundSystem01.prototype.checkIn = function (id, stationName, t) {
        this.inProgressTrips[id] = { startStation: stationName, startTime: t };
    };
    UndergroundSystem01.prototype.checkOut = function (id, stationName, t) {
        var _a;
        var _b = this.inProgressTrips[id], startStation = _b.startStation, startTime = _b.startTime;
        if (this.completedTrips.hasOwnProperty(startStation)) {
            var parent_1 = this.completedTrips[startStation];
            if (!parent_1.hasOwnProperty(stationName)) {
                parent_1[stationName] = [];
            }
            var data = this.completedTrips[startStation][stationName];
            data.push(t - startTime);
        }
        else {
            this.completedTrips[startStation] = (_a = {}, _a[stationName] = [t - startTime], _a);
        }
        delete this.inProgressTrips[id];
    };
    UndergroundSystem01.prototype.getAverageTime = function (startStation, endStation) {
        var data = this.completedTrips[startStation][endStation];
        return _.mean(data);
    };
    return UndergroundSystem01;
}());
/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */ 
