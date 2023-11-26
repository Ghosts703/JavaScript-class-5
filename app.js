// ----------------------------------------------------------------------------------------
// // if statement, relational operators, assignment operators.
// var num = 5;
// var num1 = +prompt("enter a number");
// var num2 = prompt("enter a number");

// if (num == 7) {
//   alert("Han number theek hai!");
// }
// if (num === "5") {
//   alert("good");
// }
// if (num == "5") {
//   alert("nice");
// } else {
//   alert("Number galat");
// }

// // === check the value, check the datatype of the value as well.
// // == check only the value.
// ----------------------------------------------------------------------------------------

// // ------------------------------------------------------------------------------------
// var userName = prompt("enter username");
// var pass = prompt("enter password");

// if (userName === "admin" && pass === "admin") {
//   alert("login successful!");
//   location.href = "./welcome.html";
// } else {
//   alert("login unsuccessful!");
//   location.href = "./index.html";
// }

// // difference between +prompt, -prompt and prompt.
// ----------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------
// var maths = +prompt("Enter your mathematics marks:");
// var chem = +prompt("Enter your chemistry marks:");
// var bio = +prompt("Enter your biology marks:");
// var isl = +prompt("Enter your islamiat marks:");
// var english = +prompt("Enter your english marks:");
// var total = maths + chem + bio + isl + english;
// var perc = (total / 500) * 100;
// var grade;
// console.log(perc);
// console.log(perc.toFixed(3));
// if (perc >= 80 && perc <= 100) {
//   grade = "A+";
// } else if (perc >= 70 && perc <= 80) {
//   grade = "A";
// } else if (perc >= 60 && perc <= 70) {
//   grade = "B";
// } else if (perc >= 50 && perc <= 60) {
//   grade = "C";
// } else if (perc >= 40 && perc <= 50) {
//   grade = "D";
// } else {
//   grade = "F";
// }
// // template literals
// document.write(
//   `<table border='2px' >
//     <tr>
//     <th>Mathematics</th>
//     <th>Chemistry</th>
//     <th>Biology</th>
//     <th>Islamiat</th>
//     <th>English</th>
//     <th>Percentage</th>
//     <th>Grade</th>
//     </tr>

//     <tr>
//     <td>${maths}</td>
//     <td>${chem}</td>
//     <td>${bio}</td>
//     <td>${isl}</td>
//     <td>${english}</td>
//     <td>${perc}</td>
//     <td>${grade}</td>
//     </tr>
//     </table>`
// );
// ----------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------
// var num1 = +prompt("Enter number");
// var num2 = -prompt("Enter number");
// var name1 = prompt("Enter you name");

// document.write(num1);
// document.write(num2);
// document.write(name1);
// console.log(name1 + num1 + num2);
// ----------------------------------------------------------------------------------------
