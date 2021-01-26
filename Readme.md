# Course ES6 BootCamp

## Topics

- [Syntax Changes & Additions](https://www.udemy.com/course/es6-bootcamp-next-generation-javascript/learn/lecture/5331652#overview)
- [Modules & Clases](https://www.udemy.com/course/es6-bootcamp-next-generation-javascript/learn/lecture/5331758#overview)
- [Symbols](https://www.udemy.com/course/es6-bootcamp-next-generation-javascript/learn/lecture/5331846#overview)
- [Interators & Generators](https://www.udemy.com/course/es6-bootcamp-next-generation-javascript/learn/lecture/5331866#overview)
- [Promises](https://www.udemy.com/course/es6-bootcamp-next-generation-javascript/learn/lecture/5331968#overview)
- [Built-in Object Extensions](https://www.udemy.com/course/es6-bootcamp-next-generation-javascript/learn/lecture/5332006#overview)
- [Maps & Sets](https://www.udemy.com/course/es6-bootcamp-next-generation-javascript/learn/lecture/5332028#overview)
- The reflect API
- The Proxy API
- Project & Using it Today

### References:

- [MDN web docs](https://developer.mozilla.org/)

- [JavaScript. The Core.](http://dmitrysoshnikov.com/ecmascript/javascript-the-core/)

- [JavaScript Symbols: But Why?](https://medium.com/intrinsic/javascript-symbols-but-why-6b02768f4a5c)

- [w3schools Reference](https://www.w3schools.com/js/default.asp)

### Additional Notes:

ES6 (ECMAScript)

- Needs polyfills, transpilers for browser backaward compatibility

Java Script Types:

- Primatives

  - String : As the name suggests, the string is for a sequence of characters, for example, “demo”, “Hi”, etc.
  - Boolean : It has two values i.e True or False.
  - Number : Number represents numerical values such as 5, 20, 500, etc.
  - Undefined : Undefined value
  - Null : Null value (not nothing, consider it a bug in JS)
  - Symbol : New datatype introduced in ECMAScript 6.

- Objects

  - JavaScript objects are containers for named values called properties or methods.
  - Functions are JavaScript objects. Items created with 'new' or constructors.

### Specail values and operator conditions

| DEFINITION     | TESTS  |           |            |          |           |                |            |                 |
| :------------- | :----: | :-------: | :--------: | :------: | :-------: | :------------: | :--------: | :-------------: |
|                | if (a) | a == true | a == false | isNaN(a) | a == null | a == undefined | a === null | a === undefined |
| var a;         | FALSE  |   FALSE   |   FALSE    |   TRUE   |   TRUE    |      TRUE      |   FALSE    |      TRUE       |
| a = null;      | FALSE  |   FALSE   |   FALSE    |  FALSE   |   TRUE    |      TRUE      |    TRUE    |      FALSE      |
| a = undefined; | FALSE  |   FALSE   |   FALSE    |   TRUE   |   TRUE    |      TRUE      |   FALSE    |      TRUE       |
| a = '';        | FALSE  |   FALSE   |    TRUE    |  FALSE   |   FALSE   |     FALSE      |   FALSE    |      FALSE      |
| a = 'Hello';   |  TRUE  |   FALSE   |   FALSE    |   TRUE   |   FALSE   |     FALSE      |   FALSE    |      FALSE      |
| a = 1;         |  TRUE  |   TRUE    |   FALSE    |  FALSE   |   FALSE   |     FALSE      |   FALSE    |      FALSE      |

### Class Reference

- [ES6 Bootcamp](https://www.udemy.com/course/es6-bootcamp-next-generation-javascript)

### Certificate

![Certificate](./images/certificate.png)
