//Array of people, there is no need to change this


function search(name,arrayOfObjects){
    for(i=0;i<arrayOfObjects.length;i++){
        var tempPerson = arrayOfObjects[i];
        if (name===tempPerson.name){
            console.log('Position in the list: '+(i+1));
            return;
        }
    }
    console.log("Try Again!");
}

function filter(arrayOfObjects, minScore){
    var filteredArray=[];
    for(i=0;i<arrayOfObjects.length;i++){
        var tempPerson = arrayOfObjects[i];
        if (minScore<tempPerson.score){
            filteredArray.push(tempPerson);
        }   
    }
    return filteredArray;
}

// function sort()
function sort(unsortedArray){
    var sortedArray=[];
    var initialLenght=unsortedArray.length;
    for(var i=0;i<initialLenght;i++){
        var maxScore = 0;
        var maxScorePosition = 0;
        for(var j=0;j<unsortedArray.length;j++){
            var tempPerson = unsortedArray[j];
            scoreAtual = parseInt(tempPerson.score);
            if(maxScore < parseInt(tempPerson.score)){
                maxScore=tempPerson.score;
                maxScorePosition=j;
            }
        }
        sortedArray.push(unsortedArray[maxScorePosition]);
        unsortedArray.splice(maxScorePosition,1);
    }
        return sortedArray;
}

const PERSONDATA = [{
    name:"Michael",
    rank:4,
    age:19,
    score: 66
},{
    name:"Emily",
    rank:7,
    age:22,
    score: 37
},{
    name:"Sam",
    rank:2,
    age:23,
    score:80
},{
    name:"William",
    rank:10,
    age:26,
    score:11
},{
    name:"James",
    rank:8,
    age:26,
    score:28
},{
    name:"Mia",
    rank:5,
    age:28,
    score:54
},{
    name:"Isabella",
    rank:1,
    age:31,
    score:100
},{
    name:"Alex",
    rank:3,
    age:34,
    score:75
},{
    name:"Olivia",
    rank:6,
    age:36,
    score:42
},{
    name:"Geoff",
    rank:9,
    age:41,
    score:19
}]
console.log('Part 1: SEARCH');
search("James",PERSONDATA);  // Should log that James was found at position #5
search("Eric",PERSONDATA);   // Should log that Eric was not found.

console.log('Part 2: FILTER');
var filteredArray = filter(PERSONDATA, 50);
console.log(filter(PERSONDATA, 50)); // Should display an array of everyone with a score greater than 50

console.log('Part 3: SORT');
console.log(sort(filteredArray));
/* Ex: 
[ { name: 'Alex', rank: 3, age: 34, score: 75 },
  { name: 'Isabella', rank: 1, age: 31, score: 100 },
  { name: 'Mia', rank: 5, age: 28, score: 54 },
  { name: 'Michael', rank: 4, age: 19, score: 66 },
  { name: 'Sam', rank: 2, age: 23, score: 80 } ]
*/

/*
    Write your functions below.
*/