let str = `helle okten`;
let toUppercace = str.toUpperCase();
let indexOfE = str.indexOf(`e`);
let phone = `(097)-123-456`;
let rezalt = phone
    .replaceAll(`-`, ``)
    .replaceAll(/[()-]/g, ``);
//////metody masyviv

Array.isArray();
Array.isArray({});
let arr = [];
arr.push(`jdvhbdjfvb`);
arr.pop();
arr.join(`,`);

let nums = [1, 5, 7, 9];
arr.concat(nums);
///-------------
// let users=[
//  {name:`vasia`,age:4, statys: true},
//  {name:`vasia1`,age:8, statys: true},
//  {name:`vasia2`,age:4, statys: true},
//  {name:`vasia3`,age:7, statys: true},
// ]
//
// function whotDoUser(user){
//  console.log(user);
// }
// users.forEach((user)=> console.log(user));
// users.filter((value)=> value.age>5 );
//     users
//      .map((value,index) => ({name:value.name,id: index+1}))
//      .filter(value=> value.age>5)
//      .forEach(value => console.log(value));
//
// user.reduse((acum,item)=>{
//  acum.names.push(item.name);
//  acum.ages.push(item.age);
// return acum
// },{names:[],ages:[]})

const cutString = (str, n) => {
    str1 = [];
    for (let i = 0; i < str.length; i += n) {
        str1.push(str.slice(i, n + 1));
    }
    return str1;
};

const toUp = (str) => str[0].toUpperCase() + str.slice(1);

const val = (str) => {
    if (!str.startsWith(`@`) && str.includes(`@`) &&
        str.includes(`.`, str.indexOf(`@` + 3))) {
        console.log(`valid`);
    } else {
        console.log(`not valid`);
    }
};

////кожне слово з великоъ лытери
// let str = `щзвм мвам мам вмм`;
// const copitalize = (str) => str.split(` `)
//     .map((value) => value[0].toUpperCase() + value.slice(1))
//     .join(` `);
//
// let count =(str, symb)=>{
//     let count = 0;
//     let split = str.split();
//     for (const item of split) {
//         if(item===symb){
//             count++;
//         }
//     }
//     return count;
// }

const cutString=(art,n)=>str.split(` `).slice(0,n).join(` `);