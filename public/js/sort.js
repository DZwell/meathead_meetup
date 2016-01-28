
function matchMaker(meatHead, userList) {
    var likeUsers = [];
    //Shifts array so meatHead is at index 0
    while (userList.indexOf(meatHead) != 0) {
        userList.unshift(userList.pop());
    };
    for (var i = 1; i < userList.length; i++) {
        var likenessCounter = 0;
        var j = 1;
        while (j <= 4) {
            if (userList[0][j] == userList[i][j]) {
                likenessCounter++;
            }
            j++;
        }
        if (likenessCounter === 4) {
            likeUsers.push(userList[i]);
        }
    }
    return likeUsers;
};

var jose = {0: 'Jose', 1: 'tuesday', 2: '3 AM', 3: 'anytime fitness', 4: 'legs'};
var brady = {0: 'Brady',1: 'tuesday', 2: '3 AM', 3: 'anytime fitness', 4: 'legs'};
var chonson = {0: 'Chonson', 1: 'tuesday', 2: '5 AM', 3: 'anytime fitness', 4: 'legs'};
var jabroni = {0: 'Jabroni', 1: 'tuesday', 2: '5 AM', 3: 'anytime fitness', 4: 'legs'};
var users = [jose, brady, chonson, jabroni];

// console.log(matchMaker(jose, users));
