# Catch duplicated CSS & SCSS lines
Duplicated CSS & SCSS Lines it's JavaScript package to print in console what's duplicated lines in your file, Still in beta but it's works fine till now

### How it works?
`duplicate-css-lines.js` will skip `.selectors` & `{}` & `$variables` & `< >` & `var(--variable)` and will start to searching in scopes of your file, So you can use it with `CSS` & `SCSS`, Or any nested stylesheet with `{}`, Mission is make your stylesheet healthy without duplicates.

#### Install Package
```js
npm i duplicated-css-lines
```

#### Start using it

```js
dup <CSS file directory> //dummy example

dup app.scss //real example
```
Will check duplicate lines in `app.scss` and back it to you in the console with number of duplicated lines.

```js
//result
margin: 2px;
color: black;
margin: 5px;

3 Duplicated Lines
```

### Features plan, Start contribute and join us :) :-
- Make Package working on Vue.js (Single File Components) and catch inner `<style></style>`.
- Make Package working on CSS in JS. 
- Number of duplicated line in file.
- <s>skip css `$variables` duplicated.</s>
- <s>skip spaces between target and value.</s>
- <s>Add Colors for console with every duplicate line.</s>
- <s>Count how much line duplicate in file.</s>
- <s>Convert multiplie `.replace` to be one function and working dynamic without duplicate.</s>
- <s>Make function working just in scopes without take `.className` or `{ }` as a objects value.</s>
- <s>Convert this script to library to be installed and used.</s>
