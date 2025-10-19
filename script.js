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


let c = 10;
let a = 3;
let b = 9;
 
function timesTen(x,y,z) {
    return x+y+z;
}
 
let d = timesTen(c,b,a);
 
console.log(d);






// কেন এটা referenceError দেখাচ্ছে
   

function timesTen(a) {
    x = 10;
    return a * 10;
}
 
let y = timesTen(x);
console.log(y);


const arr = [3,5,6,7,1,2]
console.log(arr.sort());
console.log(arr.reverse());


console.log(window.innerWidth);
console.log(window.outerHeight);
console.log(window.location);
const btn = document.getElementById("newwindow")


btn.addEventListener("click", () => {
   const newWin = window.open(
      "",                   
    "MyNewWindow", 
    "width=500,height=400,left=200,top=200"
   );

   newWin.document.title = "My New Window";
  newWin.document.body.innerHTML = `
    <div style="font-family: system-ui; padding: 20px;">
      <h2>Hello!</h2>
      <p>This is a new window opened from external JS.</p>
      <p>Current size: ${newWin.outerWidth} x ${newWin.outerHeight}</p>
      <button id="resizeBtn">Resize to 800x600</button>
    </div>
  `;
   
})


console.log(document.body.innerHTML);



// 500px পর্যন্ত scroll করা
window.scrollTo({
  top: 500, 
  left: 0, 
  behavior: "smooth" 
});

