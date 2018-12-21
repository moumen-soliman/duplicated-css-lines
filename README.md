# Catch duplicated CSS & SASS lines
Duplicated CSS & SASS Lines it's NodeJS Library or Script to print in console what's duplicated lines in your file, Still in beta but it's works fine till now

### How it works?
`duplicate-css-lines.js` will escape `.selectors` & `{}` and will start to searching in scopes of your file, So you can use it with `CSS` & `SASS`, or any nested stylesheet.

```js
$ cd demo

$ node duplicate-css-lines.js <CSS file directory> //dummy example

$ node duplicate-css-lines.js app.scss //real example
```
Will check duplicate lines in `app.scss` and back it to you in console in array.

```js
//result
[ 'background-color: #282c34', 'display: flex' ]
```

### Features plan if you need to contribute choose one of them 
- Add Colors for console with every duplicate line if contain color.
- <s>Count how much line duplicate in file.</s>
- Number of duplicated line in file.
- <s>Convert multiplie `.replace` to be one function and working dynamic without duplicate.</s>
- <s>Make function working just in scopes without take `.className` or `{ }` as a objects value.</s>
- Convert this script to library to be installed and used.