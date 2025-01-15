var fs = require('fs').promises;

async function main() {
	const data = await fs.readFile('input.txt', 'utf8');
	const lines = data.split('\n');
	const nums = [];
	for (let i = 0; i < lines.length - 1; i++) {
		let line = lines[i];
		var arr = new Float32Array(line.split('x').map((num) => parseInt(num)));
		nums.push(arr);
	}
	var total = 0;
	var ribbon = 0;
	for (let num of nums) {
		num.sort();
		total += num[0] * num[1] + 2 * num[0] * num[1] + 2 * num[0] * num[2] + 2 * num[1] * num[2];
		ribbon += 2 * num[0] + 2 * num[1] + num[0] * num[1] * num[2];
	}
	console.log(total);
	console.log(ribbon);
}

main();
