//6. Об’єкт “Абонент” (номер телефону, домашня адреса, власник; 
//сумарна тривалість розмов, рахунок). Запит абонентів за казаною 
//адресою із тривалістю розмов більше ніж вказана.

//1. Об’єкт “Бухгалтерія” (Код, ПІБ; посада; заробітна плата;
 //кількість дітей; стаж). Запит працюючих, які обіймають посаду Х і мають
  //не більше, ніж Y дітей.

  class Accounting {
      constructor(code, name, position, salary, children, experience) {
        this.code = code;
        this.name = name;
        this.position = position;
        this.salary = salary;
        this.children = children;
        this.experience = experience;
        this.id = ++this.id;

      }
  }

  let id = 0;
  class StringToAccounting extends Accounting {
      ToString() {
          return `
          name: ${this.name}
          position: ${this.position}
          salary: ${this.salary}
          children: ${this.children}
          experience: ${this.experience}
          `;
      }
  }

  class Worker {
      constructor() {
          this.items = [];
      }
      get number() {
          return this.items.length;
      }
      add(worker) {
          this.items.push(worker);
      }
      addcollections(collections){
        for(let i=0; i<collections.length; i++)
        {
            this.items.push(collections[i]);
        }
      }
      edit(someId, newWorker) {
          this.worker [id] = newWorker;
      }
      delete(someId) {
          let index = this.worker.findIndex((elem) => elem.id == someId);
          if(index == -1) throw "Not found";
          this.worker.splice(index, 1);
      }
      getById(someId) {
        return this.worker.find((elem) => elem.id == someId);
      }
      getByPosition(somePosition) {
        return this.worker.filter((elem) => elem.position == somePosition);
      }
      getBySalary(someSalary) {
        return this.worker.filter((elem) => elem.salary >= someSalary);
      }
      getInfo(someId) {
        return this.getById(someId).ToString();
      }
  }

  let firstWorker = new StringToAccounting("1234", "Волошина Анастасія Іванівна", "головний бухгалтер","18 000 грн", "1");
  let secondWorker = new StringToAccounting("4567", "Парчевський Володимир Васильович", "водій", "12 000 грн","3");
  let thirdWorker = new StringToAccounting("7890", "Палас Антоніна Андріївна", "менеджер", "35 000 грн", "4");
  let fourthWorker = new StringToAccounting("3876", "Флекей Хелга Миколаївна", "перекладач", "43 000 грн", "1");

  let all = new AllWorker();

  all.add(worker)(firstWorker);
  all.add(worker)(secondWorker);
  all.add(worker)(thirdWorker);
  all.add(worker)(fourthWorker);

  console.log(accounting.task1);
  