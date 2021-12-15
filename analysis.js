// Helpers

function isEven(num) {
    return (num % 2 === 0);
}

function getAverage(list) {
    const sumList = list.reduce(
        function(addedValue = 0, newValue) {
        return addedValue + newValue;
        }
    );

    const average = sumList / list.length;

    return average;
}

// Median Calculator

function medianSalary(list) {
    const middle = parseInt(list.length / 2);

    if (isEven(list.length)) {
        const middleSalary1 = list[middle - 1];
        const middleSalary2 = list[middle];
        const median = getAverage([middleSalary1, middleSalary2]);
        return median;
    } else {
        return list[middle];
    }
}

// General median

const salariesLondon = london.map(
    function (character) {
        return character.salary;
    }
);

const salariesLonSort = salariesLondon.sort(
    function (a, b) {
        return a - b;
    }
);


const generalMedian = salariesLonSort;

// Top 10% median
const spliceStart = (salariesLonSort.length * 90) / 100;
const spliceCount = salariesLonSort.length - spliceStart;

const top10Salaries = salariesLonSort.splice(spliceStart, spliceCount);

const top10Median = medianSalary(top10Salaries)