const list1 = [
    100,
    200,
    300,
    400
];

let list1Sum = 0;

for (let i = 0; i < list1.length; i++) {
    list1Sum += list1[i];
}

const list1Avg = list1Sum / list1.length;

function getAvg(list) {

    const listSum = list.reduce (
        function (addedValue = 0, newValue) {
            return addedValue + newValue;
        }
    );

    //for (let i = 0; i < list1.length; i++) {
    //    listSum += list[i];
    //}

    const listAvg = listSum / list.length;

    return listAvg;

}

