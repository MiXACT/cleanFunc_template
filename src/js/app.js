export default function heroHealth(hero) {
	let result;
	if (hero.health < 15) {
		result = 'critical';
	} else if (hero.health <= 50) {
		result = 'wounded';
	} else {
		result = 'healthy';
	}
	return result;
}
