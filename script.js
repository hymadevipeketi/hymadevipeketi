// let milliseconds =0, seconds = 0, minutes =0,hours =0;
// let timeshow = document.getElementById('timeshow')
// let timeref;


// document.getElementById('start').onclick = function() {
//     timeref = setInterval(updateTime,10)
// }

// function updateTime() {
//     milliseconds= milliseconds+10;
//     if(milliseconds==1000) {
//         seconds= seconds+1;
//         milliseconds =0;
//         if(seconds==60) {
//             minutes=minutes+1;
//             seconds=0;
//             if(minutes==60) {

//                 hours=hours+1;
//                 minutes=0;
//             }
//         }
//     }
 
//      let h,m,s,ms;
//      if(hours<10) {
//         h='0'+hours
//      }
//       else {
//         h=hours
//       }

//       if(minutes<10) {
//         m='0'+minutes
//      }
//       else {
//         m=minutes
//       }
//       if(seconds<10) {
//         s='0'+seconds
//      }
//       else {
//         s=seconds
//       }

//       if(milliseconds<10) {
//         ms='0'+milliseconds
//      }
//      else  if(milliseconds<100){
//             ms='00'+milliseconds
//         }
     
//       else {
//         ms=milliseconds
//       }

//      timeshow.innerHTML = '$(h) : $(m) : $(s) : &()ms'
//     }
//     document.getElementById('reset').onclick = function() {
//         clearInterval(timeref)
//     }


//     document.getElementById('reset').onclick = function() {
//         clearInterval(timeref)
//         milliseconds =0;
//         seconds =0;
//         minutes =0
//         hours =0;
//         timeshow.innerHTML = "00 : 00 : 00 : 00"
//     }

let milliseconds = 0,
    seconds = 0,
    minutes = 0,
    hours = 0;
let timeshow = document.getElementById('timeshow');
let timeref;

document.getElementById('start').onclick = function() {
    timeref = setInterval(updateTime, 10);
};

function updateTime() {
    milliseconds = milliseconds + 10;
    if (milliseconds >= 1000) { // Use >= for accurate counting
        seconds = seconds + 1;
        milliseconds = 0;
        if (seconds >= 60) {
            minutes = minutes + 1;
            seconds = 0;
            if (minutes >= 60) {
                hours = hours + 1;
                minutes = 0;
            }
        }
    }

    let h = hours.toString().padStart(2, '0'), // Use toString and padStart for formatting
        m = minutes.toString().padStart(2, '0'),
        s = seconds.toString().padStart(2, '0'),
        ms = milliseconds.toString().padStart(3, '0');

    timeshow.innerHTML = `${h} : ${m} : ${s} : ${ms}`; // Use template literals for string construction
}

// Combine reset logic into a single function
document.getElementById('reset').onclick = function() {
    clearInterval(timeref);
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    timeshow.innerHTML = "00 : 00 : 00 : 00";
};
