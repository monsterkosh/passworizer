# Passworizer ![Build Status](https://travis-ci.org/mrhooray/rpg.png?branch=master)


Passworizer is simple but robust random password generator, it can generate
different levels of passwords with millons of combinations.

Randomizes each character individually and then scrambles them all to generate
even a more random combination for you to use.
It uses upper case letters, lower case letters, numbers and special characters.


## Installation
$ npm install passworizer


### About Passworizer
Passwords will always start with an Upper Case Letter for convenience.

If no parameters are passed, it will return a Level 1 Passoword (see below).


### Methods
Passworizer()

PassworizerAsync()


## Usage example

```js
const {Passworizer, PassworizerAsync} = require('passworizer');

Level 0:
const password = Passworizer(0);
// Result: X0cuvk8L
// 8 Characters (4 Lowercase, 2 Uppercase, 2 Numbers, 0 Symbol)  // No symbols

Level 1 (default):
const password = Passworizer();
// result: Y+81zrvh 
// 8 Characters (4 Lowercase, 1 Uppercase, 2 Numbers, 1 Symbol)

const password = Passworizer(1);
// Result: Vm1da<n8 
// 8 Characters (4 Lowercase, 1 Uppercase, 2 Numbers, 1 Symbol)

Level 2:
const password = Passworizer(2);
// Result: H3&PH6ontF?z
// 12 Characters (4 Lowercase, 4 Uppercase, 2 Numbers, 2 Symbol)

Level 3:
const password = Passworizer(3);
// Result: Wmc2(11YdO?F6u$-jT
// 18 Characters (5 Lowercase, 5 Uppercase, 4 Numbers, 4 Symbol)

let password = PassworizerAsync() 
// Takes the same parameters (0, 1, 2, 3)
// Returns a promise

```


## Thanks
Feel free to contribute to the proyect.
Let me know if you have any ideas about new features.
