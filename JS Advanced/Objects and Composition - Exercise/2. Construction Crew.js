function solve (worker) {

    if (worker.dizziness === true) {
        let hydrationNeeded = worker.weight * 0.1 * worker.experience;
        worker.levelOfHydrated += hydrationNeeded;
        worker.dizziness = false;
    }

    return worker;

}
