const text = document.getElementById("demo");
const text1 = document.getElementById("demo1");
text.innerHTML="";

const isBayazidbroisgoodteacher = 700;
const iswearegoodstudent = 400;
const iswearenotgoodstudent = 500;

// if (isBayazidbroisgoodteacher > iswearegoodstudent) {
//    text.innerHTML = ("Bayazid bro is really good mentor");
// } else if (isBayazidbroisgoodteacher > iswearenotgoodstudent) {
//    text.innerHTML = ("we really like our mentor");
// }
// else {
//    text.innerHTML = ("No one is good!");
// }


switch (new Date().getDay()) {
   case 0:
      text1.innerHTML = "Today Is sunday"
      break;
   case 1:
      text1.innerHTML = "Today Is Monday"
      break;
   case 2:
      text1.innerHTML = "Today Is Tuesday"
      break;
   case 3:
      text1.innerHTML = "Today Is Wednesday"
      break;
   case 4:
      text1.innerHTML = "Today Is Thursday"
      break;
   case 5:
      text1.innerHTML = "Today Is Friday"
      break;
   case 6:
      text1.innerHTML = "Today Is Saturday"
      break;
}

let number = 10;

typeof (number)



function myFunction(x, y = 10) {
   return x + y;
}
myFunction(5);

const star = 20;

for (let i = 1; i <= star; i++) {
   let spaces = " ".repeat(star - i);
   let row = "*".repeat(i * 2 - 1);
   text.innerHTML += spaces + row + spaces + "<br>";
}


const row = 10;

for (let i = 1; i <= row; i++) {
   let gap = " ".repeat(row - i);   
   let h = "_".repeat(i * 2 - 1);   
   console.log(gap + h + gap);
}