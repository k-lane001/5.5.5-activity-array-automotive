//this includes the vehicle class as a module
import { Vehicle as VehicleModule } from './vehicle';

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

// *** new Car class ***

class Car extends v {
    constructor(maximumPassengers, passenger, numberOfWheels, maximumSpeed, fuel, scheduleService) {
        super(make, model, year, color, mileage);
        this.maximumPassengers = maximumPassengers;
        this.passenger = passenger;
        this.numberOfWheels = numberOfWheels;
        this.maximumSpeed = maximumSpeed;
        this.fuel = fuel;
        this.scheduleService = scheduleService;
    }
    loadPassenger(num) {
        if(num + this.passenger <= this.maxPassengers) {
                console.log('Load Passengers');
        } else {
            console.log('There is not enough room for all passengers.');
        }
    }
    start() {
        if(this.fuel > 0) {
            start == true;
            console.log('Start the engine');
        } else {
            start == false;
            console.log('Fill the tank');
        }
    }
    scheduleService(mileage) {
        if(this.mileage > 30000) {
            scheduleService == true;
            console.log('Time for a tune-up!')
        } else {
            scheduleService == false;
            console.log('Remember to get a tune-up at 30,000 miles!')
        }
    }
}
// *** new Car object ***
let A28MercurySedan = new Car ["Mecury", "Sedan", "1965", "color", "mileage", 5, 0, 4, 160, 10, false];