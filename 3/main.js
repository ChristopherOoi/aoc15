import fs from 'fs/promises';

var data = await fs.readFile('input.txt', 'utf8');

let x = 0;
let y = 0;
let rx = 0;
let ry = 0;
let seen = new Map();
for (let i = 0; i < data.length; i++) {
	let c = data[i];
	let key = '';
	if (i % 2 === 0) {
		x += c === '>' ? 1 : c === '<' ? -1 : 0;
		y += c === '^' ? 1 : c === 'v' ? -1 : 0;
		key = x + ',' + y;
	}
	else {
		rx += c === '>' ? 1 : c === '<' ? -1 : 0;
		ry += c === '^' ? 1 : c === 'v' ? -1 : 0;
		key = rx + ',' + ry;
	}
	seen.set(key, (seen.get(key) || 0) + 1);
}

console.log(seen.size);
