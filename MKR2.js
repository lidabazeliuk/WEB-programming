/*Використовуючи js, HTML та СSS створити:
a. Об’єкт для зберігання даних про фільм (Id, назва, режисер,
продюсер, список акторів, URL-трейлеру, рік випуску, касові збори).
b. На основі об’єкту фільму створити новий об’єкт, який перевизначає
метод toString()
c. Об’єкт для зберігання даних про колекцію фільмів, цей об’єкт
повинен містити конструктор та метод для збільшення касових
зборів фільму з вказаним id на вказану суму.
d. Відобразити дані про фільм зі збільшеними касовими зборами на
сторінці.*/

class Film {
    constructor(id, name, director, producer, list_actors, url, year, cash_fees) {
        this.id = id;
        this.name = name;
        this.director = director;
        this.producer = producer;
        this.actors = actors;
        this.url = url;
        this.year = year;
        this.cash_fees = cash_fees;
    }
}
class StringifyFilm extends Film {
    ToString(){
        return `
        id:${this.id},
        name:${this.name},
        director:${this.director},
        producer:${this.producer},
        actors:${this.actors},
        url: ${this.url},
        `;
      }
}
class FilmCollection {
    constructor(films = []) {
        this.films = films;
    }
}
add(film) {
    this.films.push(film);
  }

  add(cash_fees) {
      let userIndex = this.films.findIndex((cash_fees) => cash_fees.id == id);
      if ( number == -1) throw "Not found";
      this.films.splice(number,1);
  }
  class FilmCollectionHtml extends FilmCollection {
     FilmCollectionToHtml(film) {
        return `
        <tr>
          <td>
              ${film.id}
          </td>
          <td>
              ${film.name}
          </td>
          <td>
              ${film.director}
          </td>
          <td>
              ${film.producer}
          </td>
          <td>
              ${film.actors}
          </td>
          <td>
              ${film.url}
          </td>
          `;
     }
     filmsToHtml(){
        let rows = "";
        for (let film of this.getAll()) {
          rows += this.filmsToHTML(film);
        return `
        <table>
          <tr>
            <th>
              Id
            </th>
            <th>
              Name
            </th>
            <th>
              Director
            </th>
            <th>
              Producer
            </th>
            <th>
             Actors
            </th>
            <th>
             Url
          </tr>
            ${rows}
        </table>
        <button type="button" onclick="Addcash_fees()">
            Add cash fees
        </button>
        `,
     }
  }
}

document.getElementById("root").innerHTML = films.toHTML();
