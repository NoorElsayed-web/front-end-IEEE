const pUsername = "FavNano";
let pAge = 19;
let pScore = 5000;
let isOnline = 0;
let statuse;
if (isOnline)
    statuse = "🟢Online";
else
    statuse = "🔴Offline"
let pRank = "gold";
let pLevel = 14;


let kill = 8;
let killp = kill * 10;
let assist = 5;
let assistp = assist * 5;
let death = 3;
let deathp = death * 3;
let fmscore = killp + assistp - deathp;


if (pAge >= 18 && isOnline == true && pScore >= 1000) {
    //console.log("Welcome to the tournament,",pUsername);

}
else {
    //console.log("Sorry",pUsername, "you don't meet the requirements.");

}

if (pScore >= 5000)
    pRank = "Legend";
else if (pScore >= 3000)
    pRank = "Diamond";
else if (pScore >= 1000)
    pRank = "Gold";
else
    pRank = "silver";


/*calender*/
let dayNumber = 1;
let today = "";
switch (dayNumber) {
    case 1:
        today = "Monday — Bug Fixing Day";
        break;
    case 2:
        today = "Tuesday — New Feature Development";
        break;
    case 3:
        today = "Wednesday — Code Review Session";
        break;
    case 4:
        today = "Thursday — Testing & QA";
        break;
    case 5:
        today = "Friday — Deploy to Production 🚀";
        break;
    case 6:
        today = "Saturday — Team Game Night 🎮";
        break;
    case 7:
        today = "Sunday — Rest Day 😴";
        break;
    default:
        today = "Invalid Day";
}
//console.log("today :", today);



/* player card*/
console.log("GAMER PROFILE CARD   ")
console.log("UserName :", pUsername);
console.log("Age : ", pAge);
console.log("Score: ", pScore);
console.log("Statuse :", statuse);
console.log("Rank :", pRank);
console.log("Level : ", pLevel);
console.log("Final Match Score : ", fmscore);

// let a = "42";
// let b = 42;
// let c = true;
// let d = 99.9;
// let e;
// console.log("a: ",a,"type :",typeof(a));
// console.log("b :",b,"type :",typeof(b));
// console.log("c :",c,"type :",typeof c);
// console.log("d :",d,"type :",typeof d);
// console.log("e :",e,"type :",typeof e);
const fruits = ["apple", "banana", "strawberry", "melon"];
fruits.pop();
//console.log(fruits);
let users = [{ pk: 123, firstName: "ali", job: "sales" }, { pk: 145, firstName: "nour", job: "dancer" }];
let user = users.find(x => x.pk === 145);// find()
console.log(user.firstName);
console.log(user.job);
function task(arr) {
    let even = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0)
            even.push(arr[i])

    } return even;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let ouput = task(arr);
//console.log(ouput);

let team = ["delet", "ali", "mohamed", "nour"];
team.push("sara");
team.shift();
console.log(team);
let waitList = ["ahmed", "amged", "amany"];
console.log(waitList);
let allTeams = team.concat(waitList);
let output = allTeams.join(" vs ");
console.log(output);
// console.log(team[0]);
let player = {
    name: "nour",
    role: "CEO",
    goal: 4
};
console.log(player.name);
player.goal++;
console.log(player.goal)
player.skills = ["patient", "open minded"];
let squad = [
    {
        name: "first",
        score: 115
    }, {
        name: "second",
        score: 320
    }, {
        name: "third",
        score: 500
    }, {
        name: "four",
        score: 0
    }
]
//console.log(squad[1].name);
for (let i = 0; i < squad.length; i++) {
    if (squad[i].score === 0)
        continue;
    console.log(squad[i].name);
    console.log(squad[i].score);
}
let time = 3;
while (time) {
    //console.log(time);
    time--;
}
function calcPoints(wins, draws) {
    wins = wins * 3;
    return wins + draws;
}
let fPoints = calcPoints(3, 2);
console.log("Final Points : ", fPoints);

let finalMatch = [
    {
        name: "a",
        goals:3,
        isInjured: true
    },
    {
        name:"b",
        goals:5,
        isInjured:false
    },
    {
        name:"c",
        goals:8,
        isInjured:false
    },
    {
        name:"d",
        goals:9,
        isInjured:true
    }
];
function analyz(playerarray){
let totalGoals = 0;
let score = [];
for(let player of playerarray){
    if (player.isInjured)
        continue;
    totalGoals += player.goals;
    if (player.goals > 0)score.push(player.name);
    if(player.goals ==3){console.log(player.name,"game over");break;}
}
return{
    finalScore: totalGoals,
allPlayers:score.join()}
}
let analysis = analyz(finalMatch);
console.log("Final Score : ",analysis.finalScore);
console.log("All Players : ",analysis.allPlayers);

























 