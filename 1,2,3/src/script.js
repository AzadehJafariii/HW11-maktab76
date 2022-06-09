let color = [
  'bg-white',
  'bg-white',
  'bg-sky-100',
  'bg-violet-100',
  'bg-teal-100',
  'bg-red-100',
  'bg-orange-100',
  'bg-blue-100',
  'bg-slate-100',
  'bg-slate-900',
];
let trs = document.querySelectorAll("tr");
function setColor(color) {
  trs.forEach((tr, i) => {
    tr.className = color[i];
  });
  trs[trs.length - 1].classList.add("text-white");
}
setColor(color);


let removebtn = document.createElement('button');
removebtn.innerHTML = 'click to remove'
removebtn.className = 'border-0 py-2 px-4 m-3 bg-yellow-200 font-bold rounded absolute left-16 top-2';
document.body.prepend(removebtn);


let table = document.querySelector('table');
removebtn.addEventListener('click', () => {
 for (let i = 1; i < 6; i++) {
   table.deleteRow(1);
 }
});

let addbtn = document.createElement('button');
addbtn.innerHTML = 'click to add';
addbtn.className = 'border-0 py-2 px-8 m-3 mt-8 bg-cyan-500 font-bold rounded absolute left-16';
document.body.append(addbtn);

addbtn.addEventListener('click', () => {
  let row1 = document.createElement('tr');
  row1.innerHTML = `<th class = "bg-yellow-200">Yellow</th>
  <td class="text-center bg-yellow-200">Cell</td>
  <td class="text-center bg-yellow-200">Cell</td>`;
  table.append(row1);
   let row2 = document.createElement("tr");
   row2.innerHTML = `<th class = "bg-zinc-200">Zinc</th>
  <td class="text-center bg-zinc-200">Cell</td>
  <td class="text-center bg-zinc-200">Cell</td>`;
   table.append(row2);
    let row3 = document.createElement("tr");
    row3.innerHTML = `<th class = "bg-lime-200">Lime</th>
  <td class="text-center bg-lime-200">Cell</td>
  <td class="text-center bg-lime-200">Cell</td>`;
    table.append(row3);
});








