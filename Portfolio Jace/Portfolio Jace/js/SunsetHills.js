function SunsetHills(buildings) {
    
    let tallest = Number.MIN_VALUE;

    let sunsetViews = new Array();

    for (var index = 0; index < buildings.length; index++) {
        if (buildings[index] > tallest) {
            tallest = buildings[index];
            sunsetViews.push(`The Building in position ${index} with height ${tallest} can see the sunset. <br>`);
        }
    }

    return sunsetViews.join("");
}
