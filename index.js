require('dotenv').config({ quiet: true });
const path = require('path');

function main(a, b) {
    return a + b;
}
console.log(main(2, 3));
console.log('==>', process.env.PORT);
console.log('path =>', path.join(__dirname, 'ad'));