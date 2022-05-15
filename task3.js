const names = ['Юрій', 'Хелга', 'Хелга', 'Юрій', 'Андрій', 'Хелга', 'Андрій', 'Андрій', 'Юрій', 'Юрій', 'Хелга', 'Ігор', 'Ігор', 'Ігор', 'Юрій'];

function getDuplicateNamesCount(name, namesArray) {
    let duplicateCount = 0;

    namesArray.forEach((item) => {
        if (item === name) {
            duplicateCount += 1;
        }
    });
    console.log(duplicateCount)
}