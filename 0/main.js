var fs = require('fs').promises;

async function getInput() {
	try {
		const data = await fs.readFile('input.txt', 'utf8');
		return data;
	}
	catch (err) {
		console.error(err);
		return null;
	}
}

function parseInput(data) {
	var i = 0;
	var j = 0;
	for (let c of data) {
		i += c === '(' ? 1 : -1;
		j++;
		if (i === -1) console.log(j);
	}
	console.log(i);
}

async function run() {
	const lines = await getInput();
	parseInput(lines.trim());
}

run();
