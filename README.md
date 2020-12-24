# Matrix.js
A simple and high-performance library for Statistics.

## Install
```
npm install --save @rayyamhk/statistics
```

## How to use
```javascript
const Statistics = require('@rayyamhk/statistics');

const data = new Statistics();
data.fit([1, 2, 3, 3, 4, 4]);
data.mean(); // 2.833
data.median(); // 3
data.mode(); // [3, 4]
data.stdev(); // 1.6666666666666667
```

## Build
```
npm install
npm run build
```
It creates a production version in `/lib`

## Test
```
npm install
npm run test
```
It runs all tests in `/src/tests`

## API
You can find the documentation in the following link:

[https://rayyamhk.github.io/Statistics.js/](https://rayyamhk.github.io/Statistics.js/)

## Examples

## How to contribute
You are welcome to contribute by:
- Reporting bugs
- Fixing bugs
- Adding new features
- Improving performance
- Improving code style of this library

## License
MIT
