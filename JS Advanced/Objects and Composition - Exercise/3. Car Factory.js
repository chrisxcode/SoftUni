function solve (requirements) {

    let car = {};

    car.model = requirements.model;

    function engineChoice(value) {
        let selectedEngine = {};

        if (value <= 90) {
            selectedEngine.power = 90;
            selectedEngine.volume = 1800;
        } else if (value > 90 && value <= 120) {
            selectedEngine.power = 120;
            selectedEngine.volume = 2400;
        } else if (value > 120 && value <= 200) {
            selectedEngine.power = 200;
            selectedEngine.volume = 3500;
        }

        return selectedEngine;
    }
        
    car.engine = engineChoice(requirements.power)

    car.carriage = { type: requirements.carriage, color: requirements.color}

    requirements.wheelsize % 2 == 0 ? requirements.wheelsize -= 1 : 0;

    let wheel = [1,2,3,4].fill(requirements.wheelsize);

    car.wheels = wheel;

    return car;

}
