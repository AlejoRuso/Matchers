# Heroes Sorter

![CI Status](https://github.com/AlejoRuso/Matchers/actions/workflows/ci.yml/badge.svg)

Sorts game heroes by health in descending order.

## Installation
```bash
npm install heroes-sorter
```

## Usage
```javascript
import sortHeroes from 'heroes-sorter';

const heroes = [
  {name: 'мечник', health: 10},
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
];

const sorted = sortHeroes(heroes);

```

## Tests
```bash
npm test
```