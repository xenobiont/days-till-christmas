/* 
function must work correctly at any moment of time, e.g.also in the next year
also we need to account for the fact that christmas might have already passed 
*/

const CHRISTMAS_MONTH = 12;
const CHRISTMAS_DAY = 25;

const now = new Date();
const nowYear = now.getFullYear();

function getDaysDifference(date1, date2) {
	const DAY = 1000 * 60 * 60 * 24;
	return Math.floor((date1.getTime() - date2.getTime()) / DAY);
}

/* DAY OF YEAR */

const dayOfYear = getDaysDifference(new Date(), new Date(nowYear, 0, 1));
console.log(`Days passed after the New Year: ${dayOfYear}`);

/* CHRISTMAS DATE */
let christmas = new Date(nowYear, CHRISTMAS_MONTH, CHRISTMAS_DAY);
// set christmas date for current year

if (now > christmas) {
	christmas.setFullYear(nowYear + 1);
}

// calculate the difference between Christmas day and today in milliseconds and convert it to days
const daysBeforeChristmas = getDaysDifference(christmas, now);

console.log(`${daysBeforeChristmas} left until the next Christmas!`);
