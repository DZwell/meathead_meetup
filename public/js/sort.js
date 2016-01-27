function matchMaker(meatHead, userList) {
    //Shifts array so meatHead is at index 0
    while (userList.indexOf(meatHead) != 0) {
        userList.unshift(userList.pop());
    }
    console.log(userList);
    // for (i in userList) {
    //     if(meathead )
    // }
}

var jose = {'name': 'Jose', 'day': 'tuesday', 'time': '6 AM', 'location': 'anytime fitness'};
var brady = {'name': 'Brady','day': 'monday', 'time': '6 AM', 'location': 'anytime fitness'};
var chonson = {'name': 'Chonson', 'day': 'tuesday', 'time': '6 AM', 'location': 'anytime fitness'};
var jabroni = {'name': 'Jabroni', 'day': 'tuesday', 'time': '6 AM', 'location': 'anytime fitness'};
var users = [jose, brady, chonson, jabroni];

// console.log(users);
console.log(matchMaker(brady, users));

//Change params to (meathead, userList)
//Rotate list so meathead is at userList[0]
//Start comparison from userList[1]
//Push like users to new array and return new array

