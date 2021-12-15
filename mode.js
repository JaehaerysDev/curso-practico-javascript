const myList = [
    1,
    4,
    5,
    6,
    2,
    6
]

const myListCount = {};

myList.map(
    function (element) {
        if (myListCount[element]) {
            myListCount[element] += 1;
        } else {
            myListCount[element] = 1;
        }        
    }
);

const myListArray = Object.entries(myListCount).sort(
    function (elementA, elementB) {
        return elementA[1] - elementB[1];
    }
);

const mode = myListArray[myListArray.length - 1];