// first we set our birthday variable
let birthday = '2020-09-13';
// then we set today's day
let today = '2020-05-20';
/* then we substract birthday and today variable and store the output in a new variable.(js will store the output in seconds) */ 
const timeDiff  = (new Date(birthday)) - (new Date(today)); 
/* we then create a new variable to store the total amount of seconds in 24hrs (the last *1000 bit is just to take care of milliseconds) */
const secsIn24Hours = 24 * 60 * 60 * 1000;
/* next we divide timeDiff variable output and millisecsIn24Hrs variable */
let days = timeDiff / secsIn24Hours;

console.log(days);