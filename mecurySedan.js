//this includes the vehicle class as a module
const VehicleModule = require("./vehicle")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class a28Mercury extends v {
    constructor(maximumPassengers, passenger, numberOfWheels, maximumSpeed, fuel, scheduleService) {
        super(make, model, year, color, speed, started);
        this.maximumPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = 'false';
    }
    loadPassenger(num) {
        if(this.passenger < this.maximumPassengers) {
            availableRoom == 'true';
            console.log('There is room for more passengers.')
        } 
    }
    start() {
        if(this.fuel > 0) {
            start == 'true';
        }
    }
    scheduleService(mileage) {
        if(this.mileage > 30000) {
            timeForMaintenance == 'true';
            console.log('Time for a tune-up!')
        }
    }
}