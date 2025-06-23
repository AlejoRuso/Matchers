import sortHeroes from '../src/sorter';

test('sorts heroes correctly', () => {
  const heroes = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  expect(sortHeroes(heroes)).toEqual(expected);
});

test('empty array returns empty array', () => {
  expect(sortHeroes([])).toEqual([]);
});

test('single hero returns same array', () => {
  const hero = [{ name: 'маг', health: 100 }];
  expect(sortHeroes(hero)).toEqual(hero);
});
