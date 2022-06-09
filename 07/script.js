// 7 - create a table with array of objects with js.
// example of array = [
// { name: 'James', age: 9, country: 'United States' },
// { name: 'Rony', age: 31, country: 'United Kingdom' },
// { name: 'Peter', age: 58, country: 'Canada' },
// { name: 'Marks', age: 20, country: 'Spain' }
// ]
// your output must like the picture with following rules(apply these rules with javascript(not
// css)) :
// if age in a row is < 10 then row background color must be yellow.
// if age in a row is 10 <= age < 40 then row background color must be green.
// if age in a row is 40 <= age < 80 then row background color must be red.
// if age in a row is >= 80 then row background color must be blue.


let employees = [
{ name: 'James', age: 9, country: 'United States' },
{ name: 'Rony', age: 31, country: 'United Kingdom' },
{ name: 'Peter', age: 58, country: 'Canada' },
{ name: 'Marks', age: 20, country: 'Spain' }
];

let headers = ['Name', 'Age', 'Country'];

let table = document.createElement('table');
console.log(table);
let headerRow = document.createElement('tr');

headers.forEach((headerText) => {
  let header = document.createElement('th');
  header.style.border = "1px solid black";
  let textNode = document.createTextNode(headerText);
  header.appendChild(textNode);
  headerRow.appendChild(header);
});

table.appendChild(headerRow);

employees.forEach((emp) => {
  let row = document.createElement('tr');

  Object.values(emp).forEach((text) => {
    let cell = document.createElement('td');
    cell.style.border = "1px solid black";
    let textNode = document.createTextNode(text);
    cell.appendChild(textNode);
    row.appendChild(cell);
      if (emp.age < 10) {
        row.style.backgroundColor = 'yellow';
      } else if (emp.age >= 10 && emp.age < 40) {
        row.style.backgroundColor = 'green';
      } else if (emp.age >= 40 && emp.age < 80) {
        row.style.backgroundColor = 'red';
      } else if (emp.age >= 80) {
        row.style.backgroundColor = 'blue';
      }
  });

  table.appendChild(row);
});
document.body.appendChild(table);
