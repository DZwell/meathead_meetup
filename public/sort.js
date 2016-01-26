

function matchMaker(meatHead1, meatHead2) {
    return JSON.stringify(meatHead1) === JSON.stringify(meatHead2);
}


var joe = {'day': 'monday', 'time': '6 AM', 'location': 'anytime fitness'};
var brady = {'day': 'monday', 'time': '6 AM', 'location': 'anytime fitness'};

console.log(matchMaker(joe, brady));
