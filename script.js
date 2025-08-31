const text = document.getElementById("demo");
const text1 = document.getElementById("demo1");

const OpuIslove = 700;
const AwoladIslove = 1000;
const HiramoniIslove = 500;

if (AwoladIslove > HiramoniIslove) {
   text.innerHTML=("Awolad is Really Love Hiramoni");
} else if (AwoladIslove > OpuIslove) {
   text.innerHTML=("Awolad Really Really love Hiramoni");
}
else {
   text.innerHTML=("Awolad isnt Love Hiramoni");
}


switch(new Date().getDay()){
   case 0 :
   text1.innerHTML="Today Is sunday"
   break;   
   case 1:
   text1.innerHTML="Today Is Monday"
   break;   
   case 2:
   text1.innerHTML="Today Is Tuesday"
   break;   
   case 3:
   text1.innerHTML="Today Is Wednesday"
   break;   
   case 4:
   text1.innerHTML="Today Is Thursday"
   break;   
   case 5:
   text1.innerHTML="Today Is Friday"
   break;   
   case 6:
   text1.innerHTML="Today Is Saturday"
   break;
}

