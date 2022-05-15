const marks1 = [1, 5, 1, 5];
const marks2 = [2, 3, 5, 2];
const marks3 = [4, 3, 5, 4];
const marks4 = [4, 5, 5, 4];
const marks5 = [5, 5, 5, 5];


function getMarksStatistic(marks) {
    let category = '';
    const averageMarks = marks.reduce((a, b) => a + b, 0) / marks.length;

    const lowestMark = Math.min(...marks);

    if (lowestMark === 1 || lowestMark === 2) {
        category = 'Двійочник';
    }
    if (lowestMark === 3) {
        category = 'Трійочник';
    }
    if (lowestMark === 4) {
        category = 'Хорошист';
    }
    if (lowestMark === 5) {
        category = 'Відмінник';
    }

    console.log('Середній бал студента', averageMarks);
    console.log('Cтудент -', category);
}
