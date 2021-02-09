
const covariance = (set1, set2) => {
	const mean1 = set1.reduce((a, b) => (a + b)) / set1.length
	const mean2 = set2.reduce((a, b) => (a + b)) / set2.length

	let covariance = 0;
	for (let i = 0; i < set1.length; i++) {
			covariance += (set1[i] - mean1) * (set2[i] - mean2);
	}

	return covariance / set1.length;
}

const std = (set) => {
	const mean = set.reduce((a, b) => (a + b)) / set.length
	let dev = 0

	for (let i = 0; i < set.length; i++) {
		dev += (set[i] - mean)**2
	}

	return Math.sqrt(dev / set.length)
}

const correlation = (set1, set2) => (covariance(set1, set2) / (std(set1) * std(set2)))

exports.corr = correlation
exports.std = std
exports.cov = covariance
