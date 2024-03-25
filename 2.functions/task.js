function getArrayParams(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let sum = 0;

	arr.forEach((num) => {
		if (num > max) max = num;
		if (num < min) min = num;
		sum += num;
	});

	let avg = sum / arr.length;
	avg = Number(avg.toFixed(2));

	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {
	if (arr.length === 0) return 0;
	return arr.reduce((acc, num) => acc + num, 0);
}

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) return 0;
	const max = Math.max(...arr);
	const min = Math.min(...arr);
	return max - min;
}

function differenceEvenOddWorker(...arr) {
	let sumEvenElement = 0;
	let sumOddElement = 0;

	arr.forEach(num => {
		if (num % 2 === 0) sumEvenElement += num;
		else sumOddElement += num;
	});

	return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) return 0;

	let sumEvenElement = 0;
	let countEvenElement = 0;

	arr.forEach(num => {
		if (num % 2 === 0) {
			sumEvenElement += num;
			countEvenElement++;
		}
	});

	return countEvenElement > 0 ? sumEvenElement / countEvenElement : 0;
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;

	for (const arr of arrOfArr) {
		const result = func(...arr);
		if (result > maxWorkerResult) {
			maxWorkerResult = result;
		}
	}

	return maxWorkerResult;
}