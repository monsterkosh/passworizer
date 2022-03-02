# Passworizer ![Build Status](https://travis-ci.org/mrhooray/rpg.png?branch=master)


Passworizer is simple but robust random password generator, it can generate
different levels of passwords with millons combinations.

Randomizes each character individually and then scrambles all to generate
even a more random combination for you to use.
It uses upper case letters, lower case letters, numbers and special characters.


## Installation
$ npm install passworizer


### About Passworizer
Passwords will always start with aa Upper Case Letter for convenience.

If no parameters are passed, it will return a Level 1 Passoword (see below).


### Methods
Passworizer()

PassworizerAsync()


## Usage example

```js
const {Passworizer, PassworizerAsync} = require('passworizer');

let password = Passworizer();
// result: Y+81zrvh 
// Default password: 8 Characters (4 Lowercase, 1 Uppercase, 2 Numbers, 1 Symbol)

let password = Passworizer(0);
// result: X0cuvk8L
// Difficulty 0: 8 Characters (4 Lowercase, 2 Uppercase, 2 Numbers, 0 Symbol)  // No symbols

let password = Passworizer(1);
// result: Vm1da<n8 
// Difficulty 1: 8 Characters (4 Lowercase, 1 Uppercase, 2 Numbers, 1 Symbol)

let password = Passworizer(2);
// result: H3&PH6ontF?z
// Difficulty 2: 12 Characters (4 Lowercase, 4 Uppercase, 2 Numbers, 2 Symbol)

let password = Passworizer(3);
// result: Wmc2(11YdO?F6u$-jT
// Difficulty 3: 18 Characters (5 Lowercase, 5 Uppercase, 4 Numbers, 4 Symbol)

let password = PassworizerAsync() 
// Takes the same parameters (0, 1, 2, 3)
// Returns a promise

```


## Thanks
Feel free to contribute to the proyect.
Let me know if you have any ideas about new features.
