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
      getAll() {
        return [...this.worker];
      }
  }

class WorkerWithDom extends Worker {
  workerToHtml(worker) {
    return `
    <tr>
          <td>
          ${worker.id}
          </td>
          <td>
              ${worker.code}
          </td>
          <td>
              ${worker.name}
          </td>
          <td>
              ${worker.position}
          </td>
          <td>
              ${worker.salary}
          </td>
          <td>
              ${worker.children}
          </td>
          <td>
              ${worker.experience}
          </td>
          <td>
          <td> 
          <button onclick="DeleteWorker(${worker.id})">
               Delete
           </button>
          </td>
          <td> 
           <button onclick="StartEditWorker(${worker.id})">
                Edit
            </button>
          </td>
          </tr>
        `; 
  }
}

WorkerTableToHtml() {
  let rows = "";
  for (let worker of this.getAll()) {
    rows += this.workerToHtml(worker);
  }

return`
<table>
<tr>
    <th>
        ID
    </th>
    <th>
        Code
    </th>
    <th>
        Name
    </th>
    <th>
        Position
    </th>
    <th>
        Salary
    </th>
    <th>
        Children
    </th>
    <th>
        Experience
    </th>
    <th colspan="2">
        Actions
    </th>
</tr>
${rows}
</table>
<button type="button" onclick="ShowAddWorker()">
    Add worker
</button>
`;
}

addFormToHTML() {
  return ` 
      <div id="add">
          <form name="addForm" method="post" action="#">
              <h3> Add Worker </h3>
              <input name="id" type="hidden">
              <input name="code" placeholder="code"> 
              <input name="name" placeholder="name">
              <input name="position" placeholder="position">
              <input name="salary" placeholder="salary"> 
              <input name="experience" placeholder="experience"> 
              <button type="button" onclick="AddNewWorker()">
                  Save
              </button>
          </form>
      </div>
  `;
}
editFormToHTML() {
  return ` 
      <div id="edit">
          <form name="editForm" method="post" action="#">
              <h3> Edit Person </h3>
              <input name="id" type="hidden">
              <input name="code" placeholder="code"> 
              <input name="name" placeholder="name"> 
              <input name="position" placeholder="position">
              <input name="salary" placeholder="salary">
              <input name="children" placeholder="children">
              <input name="experience" placeholder="experience">

              <button type="button" onclick="EditWorker()">
                  Save
              </button>
          </form>
      </div>
  `;
}

toHTML() {
  return this.WorkerTableToHTML() + this.addFormToHTML() + this.editFormToHTML();
}

addEventListners() {
  document.addEventListener("deleteWorker", (event) => {
    super.Deleteel(event.detail.id);
    document.getElementById("root").innerHTML = this.toHTML();
  });
  document.addEventListener("addWorker", (event) => {
      super.AddOne(
        new StringAccounting(
          event.detail.code,
          event.detail.name,
          event.detail.position,
          event.detail.salary,
          event.detail.children,
          event.detail.experience,
        )
      );
      document.getElementById("root").innerHTML = this.toHTML();
    });
    document.addEventListener("editWorker", (event) => {
      super.edit(
        event.detail.id,
        new StringifyDAI(
          event.detail.code,
          event.detail.name,
          event.detail.position,
          event.detail.salary,
          event.detail.children,
          event.detail.experience,
        )
      );
      document.getElementById("root").innerHTML = this.toHTML();
    });
  }
function deleteWorker(id) {
  let deleteWorkerEvent = new CustomEvent("deleteWorker", { detail: { id } });
  document.dispatchEvent(deleteWorkerEvent);
}
function AddNewWorker() {
  const code = document.getElementsByName("code")[0].value;
  const name = document.getElementsByName("name")[0].value;
  const position = document.getElementsByName("position")[0].value;
  const salary = document.getElementsByName("salary")[0].value;
  const children = document.getElementsByName("children")[0].value;
  const experience = document.getElementsByName("experience")[0].value;
  let addWorkerEvent = new CustomEvent("addWorker", {
    detail: {
      code,
      name,
      position,
      salary,
      children,
      experience,
    },
  });
  document.dispatchEvent(addWorkerEvent);
}
function ShowAddWorker() {
  document.getElementById("add").style.display = "block";
  document.getElementById("edit").style.display = "none";
}
function editWorker() {
  const code = document.getElementsByName("code")[1].value;
  const name = document.getElementsByName("name")[1].value;
  const position = document.getElementsByName("position")[1].value;
  const salary = document.getElementsByName("salary")[1].value;
  const children= document.getElementsByName("children")[1].value;
  const experience = document.getElementsByName("experience")[1].value;
  const id = document.getElementsByName("id").value;
  let addWorkerEvent = new CustomEvent("editWorker", {
    detail: {
      id,
      code,
      name,
      position,
      salary,
      children,
      experience
    },
  });
  document.dispatchEvent(addWorkerEvent);
}

function StartEditWorker(id) {
  document.getElementById("edit").style.display = "block";
  document.getElementById("add").style.display = "none";

  let worker = arr.getById(id);

  document.getElementsByName("code")[1].value = worker.code;
  document.getElementsByName("name")[1].value = worker.name;
  document.getElementsByName("position")[1].value = worker.position;
  document.getElementsByName("salary")[1].value = worker.salary;
  document.getElementsByName("children")[1].value = worker.children;
  document.getElementsByName("experience")[1].value = worker.experience;
  document.getElementsByName("id").value = id;
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
  