class UndergroundSystem01 {
    private completedTrips: object
    private inProgressTrips: object
    constructor() {
        this.completedTrips = {};
        this.inProgressTrips = {};
    }

    checkIn(id: number, stationName: string, t: number): void {
        this.inProgressTrips[id] = { startStation: stationName, startTime: t };
    }

    checkOut(id: number, stationName: string, t: number): void {
        let { startStation, startTime } = this.inProgressTrips[id];

        if (this.completedTrips.hasOwnProperty(startStation)) {
            let parent = this.completedTrips[startStation];
            if (!parent.hasOwnProperty(stationName)) {
                parent[stationName] = [];
            }

            let data = this.completedTrips[startStation][stationName];
            data.push(t - startTime);
        } else {
            this.completedTrips[startStation] = { [stationName]: [t - startTime] };
        }

        delete this.inProgressTrips[id];
    }

    getAverageTime(startStation: string, endStation: string): number {
        let data = this.completedTrips[startStation][endStation]
        return _.mean(data)
    }
}

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */