import heroHealth from '../app';

test.each([
	['Мечник', { name: 'Мечник', health: 10 }, 'critical'],
	['Лучник', { name: 'Лучник', health: 40 }, 'wounded'],
	['Маг', { name: 'Маг', health: 90 }, 'healthy'],
])('testing %s health', (_, hero, expected) => {
	const result = heroHealth(hero);
	expect(result).toBe(expected);
});
