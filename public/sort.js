

function matchMaker(meatHead1, meatHead2) {
    if (JSON.stringify(meatHead1) === JSON.stringify(meatHead2)) {
        console.log('We found a match!');
        return '';
    }
    console.log('Sorry, no one is available to work out at this time.');
    return '';
}


var joe = {'day': 'tuesday', 'time': '6 AM', 'location': 'anytime fitness'};
var brady = {'day': 'monday', 'time': '6 AM', 'location': 'anytime fitness'};

console.log(matchMaker(joe, brady));
