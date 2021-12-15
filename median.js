const sampleList = [
    233, 
    123, 
    453,
    213, 
    312, 
    523
];

function sortList (list) {
    let sortedList = new Float64Array(list);
    sortedList = sortedList.sort();
    //const sortedList = list.sort(function (a, b) {  
        //return a - b;  
    //});

    return sortedList;
}

const listHalf = parseInt(sampleList.length / 2);

function isEven(num) {
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

let median;

function getAverage (list) {
    const listSum = list.reduce(
        function(addedValue = 0, newValue){
        return addedValue + newValue;
        }
    );

    const listAvg =  listSum / list.length;

    return listAvg;    
}

if (isEven(sampleList.length)) {
    const firstElement = sampleList[listHalf - 1];
    const secondElement = sampleList[listHalf];

    median = getAverage([firstElement, secondElement]);
    

} else {
    median = sampleList[listHalf];
}