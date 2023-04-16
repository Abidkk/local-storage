alert("hello Smit -6");


////  this will store object data in json format into localstorage
// but on page load it will remove

// let students = [];
// function run(){
//    let std = {
//        name: prompt('Please Enter your name'),
//        age: prompt('Please enter your age'),
//        city:prompt('Please enter your city'),
//        course:prompt('Please enter course name')
//    };
// students.push(std);
// let stringfy = JSON.stringify(students);
// localStorage.setItem("students",stringfy);
// console.log(students);
// }

/////////////////////////////////////////////////////


 let prevStudents = localStorage.getItem("students");
 let students = prevStudents ? JSON.parse(prevStudents) : [] ;
function run(){
    let std = {
        name: prompt('Please Enter your name'),
        age: prompt('Please enter your age'),
        city:prompt('Please enter your city'),
        course:prompt('Please enter course name')
    };
students.push(std);
let stringfy = JSON.stringify(students);
localStorage.setItem("students",stringfy);
console.log(students);
}








// // Set Data in Local storage
// localStorage.setItem("Name","Abid Ali Khokhar");
// localStorage.setItem("Country","Islamic Republic of Pakistan");

// // Get Data from local storage
// let a = localStorage.getItem("Name");
// console.log(a);
// console.log(localStorage.getItem("Country"))