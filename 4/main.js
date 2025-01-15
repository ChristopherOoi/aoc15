import fs from 'fs/promises';
import { hash } from 'crypto';

var data = await fs.readFile('input.txt', 'utf-8');
data = data.trim()
console.log(data);
for (let i = 0;; i++) {
	var test = data + i.toString();
	var h = hash('md5', test, 'hex');
	if (h.startsWith('000000')) {
		console.log(h);
		console.log(i);
		break;
	}
}
