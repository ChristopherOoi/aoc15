import fs from 'fs/promises';

var data = await fs.readFile('input.txt', 'utf-8');
data = data.trim().split('\n');
var count = 0;
for (const [i, l] of data.entries()) {
	var vowels = l.match(/[aeiou]/g);
	if (!vowels || vowels.length < 3) {
		continue;
	}
	var double = l.match(/(.)\1/g);
	if (!double) {
		continue;
	}
	var forbidden = l.match(/ab|cd|pq|xy/g);
	if (forbidden) {
		continue;
	}
	count++;
}
console.log(count);

count = 0;
for (const [i, l] of data.entries()) {
	var pair = l.match(/(..).*\1/g);
	if (!pair) {
		continue;
	}
	var repeat = l.match(/(.).\1/g);
	if (!repeat) {
		continue;
	}
	count++;
}
console.log(count);
