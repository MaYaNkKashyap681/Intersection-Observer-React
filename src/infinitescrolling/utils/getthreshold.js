const getthreshold = (numSteps) => {
    let thresholds = [];
    for (let i = 1.0; i <= numSteps; i++) {
        let ratio = i / numSteps;
        thresholds.push(ratio);
    }
    thresholds.push(0);
    return thresholds;
}

export { getthreshold }