//Date object
//date and time in javascript go with built in date object

//let date = new Date();//time and time object
//console.log(date);

//Date Object equal to  /100 seconds
//jan  1 970 utc

//let date = new Date(0);1970
//console.log(date);

//let date = new Date(24 * 3600 * 1000);
//console.log(date);//1970

//let date = new Date("2000-01-26");
//console.log(date);

//Date object Methods
//console.log(Date.UTC(0));

//let date = Date.now();
//console.log(date);

//Date.parse();
//let date1 = new Date("04 jan 1995");
//let date = Date.parse("04 jan 1995");
//console.log(date);
//console.log(Date.parse(date1));

/*Date.prototype.getDate();
Date.prototype.getDay();
Date.prototype.getFullYear();
Date.prototype.getHours()
Date.prototype.getMilliseconds();
Date.prototype.getMinutes();
Date.prototype.getMonth();
Date.prototype.getSeconds();
Date.prototype.getTime();*/

//Date.prototype.getDate();
/*let date = new Date();
console.log(date.getDay());
console.log(date.getFullYear());
console.log(date.getMinutes());
console.log(date.getMilliseconds());
console.log(date.getMonth());
console.log(date.getTime());
console.log(date.getHours());
console.log(date.getSeconds());*/

/*function DigitalClock() {
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    /*let Amormpm = date.getHours()<12 ? "AM" : "PM"
    document.getElementById("clock").innerHTML = ' <h1>${hour}:${minutes}:${seconds}</h1>';
      }
DigitalClock();
setInterval(DigitalClock,1000);*/

let second = document.querySelector("#second");
let minute = document.querySelector("#minute");
let hour = document.querySelector("#hour");
let digitalClock = document.querySelector("#digitalClock");

function SetClock() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  let hourDeg = hh * 30 + mm * 0.5;
  let minuteDeg = mm * 6 + ss * 0.1;
  let secondDeg = ss * 6;
  hour.style.transform = `rotateZ(${hourDeg}deg)`;
  minute.style.transform = `rotateZ(${minuteDeg}deg)`;
  second.style.transform = `rotateZ(${secondDeg}deg)`;
  digitalClock.innerHTML = `${hh % 12} : ${mm} : ${hh > 12 ? "PM" : "AM"}`;
}
setInterval(SetClock, 1000);
SetClock();