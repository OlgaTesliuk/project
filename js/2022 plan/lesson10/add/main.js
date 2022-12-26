let input = document.querySelector(`input`);
let btn = document.querySelector(`button`);

// btn.onclick = function () {
//     input.type = `text`;
//};

// btn.onmousedown = function () {
//     input.type = `text`;
// };
// btn.onmouseup = function () {
//     input.type = `password`;
// };

// localstorage
let ul = document.querySelector(`ul`);
// let data = new Date();
// let users =[
//     {name: `vasia`,
//     age:32,
//         status: true}
// ]
// localStorage.setItem(`arr`,JSON.stringify(users));

let visits = localStorage.getItem(`visits`);
console.log(visits);
if (!visits){
    visits =[];
    localStorage.setItem(`visit`,JSON.stringify(visits))
}
let  arrOfVisits =JSON.parse(visits);
arrOfVisits.push(new Date());
