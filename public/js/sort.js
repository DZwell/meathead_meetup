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

var MeatHead = function(properties) {
    this.userName = properties[0];
    this.days = properties[1];
    this.times = properties[2];
    this.gym = properties[3];
    this.muscleGroup = properties[4];
};






var dom = new MeatHead({0: 'Dom', 1: 'wednesday', 2: '5 PM', 3: 'anytime fitness', 4: 'pecs'});
var jose = new MeatHead({0: 'Jose', 1: 'tuesday', 2: '3 AM', 3: 'anytime fitness', 4: 'arms'});
var brady = new MeatHead({0: 'Brady',1: 'tuesday', 2: '2 AM', 3: 'anytime fitness', 4: 'arms'});
var chonson = new MeatHead({0: 'Chonson', 1: 'tuesday', 2: '3 AM', 3: 'anytime fitness', 4: 'arms'});
var jabroni = new MeatHead({0: 'Jabroni', 1: 'tuesday', 2: '5 AM', 3: 'anytime fitness', 4: 'arms'});

var users = [];

users.push(dom);
users.push(jose);
users.push(brady);
users.push(chonson);
users.push(jabroni);


console.log(matchMaker(jose, users));

