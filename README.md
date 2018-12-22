# Catch duplicated CSS & SASS lines
Duplicated CSS & SASS Lines it's NodeJS Library or Script to print in console what's duplicated lines in your file, Still in beta but it's works fine till now

### How it works?
`duplicate-css-lines.js` will skip `.selectors` & `{}` & `$variables` and will start to searching in scopes of your file, So you can use it with `CSS` & `SASS`, Or any nested stylesheet, Mission is make your stylesheet healthy without duplicates.

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

### Features plan if you need to contribute choose one of them 
- <s>skip css `$variables` duplicated.</s>
- <s>skip spaces between target and value.</s>
- <s>Add Colors for console with every duplicate line.</s>
- <s>Count how much line duplicate in file.</s>
- Number of duplicated line in file.
- <s>Convert multiplie `.replace` to be one function and working dynamic without duplicate.</s>
- <s>Make function working just in scopes without take `.className` or `{ }` as a objects value.</s>
- Convert this script to library to be installed and used.