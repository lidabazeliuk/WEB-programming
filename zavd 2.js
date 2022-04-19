
const marksArr = [40, 30, 60, 100, 70, 80, 50, 90];

const getBadMarks = marks =>
 {
  let badMarks = [];
  marks.forEach((item, index) => 
  {
    if (item < 60) 
    {
      //якщо умова нас задовільняє то в пустий масив додаєм індекс оцінки
      badMarks.push(index + 1); // +1 для того шоб показало номер оцінки рахуючи з 1ці а не з 0
    }
  });
  console.log(badMarks);
// виведе [1, 2, 7]
};