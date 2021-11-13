"use strict";

/* let c = 0;

if (c === 0) {
  c = 1;
} else if (c < 0) {
  c = 'less then zero';
} else {
  c *= 10;
}
использовать тернарный оператор!!! */

let c = 0;
c === 0 ? c = 1 : c < 0 ? (c = 'less than zero') : (c *= 10);
console.log(c);
