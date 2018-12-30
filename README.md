# Catch duplicated CSS & SCSS lines
Duplicated CSS & SCSS Lines it's JavaScript package to print in console what's duplicated lines in your file.

### How it works?
`duplicate-css-lines.js` will skip `.selectors` & `{}` & `$variables` & `< >` & `var(--variable)` & `@extends` and will start to searching in scopes of your file, So you can use it with `CSS` & `SCSS`, Or any nested stylesheet with `{}`, Mission is make your stylesheet healthy without duplicates, Support:

<p align="left">
    <img width="60" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/2000px-CSS.3.svg.png" alt=" CSS logo">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <img width="80" src="http://codezyn.com/wassup/wp-content/uploads/2014/10/317889.png" alt=" SASS logo">
    &nbsp;&nbsp;&nbsp;
    <img width="80" src="https://vuejs.org/images/logo.png" alt="Vue logo">
</p>

#### Install Package
```js
npm i duplicated-css-lines
```

#### Start using it

CSS / SCSS
```js
dup <CSS file directory> //dummy example

dup app.scss //real example
```

Vue Single file component
```js
dup <Vue file directory> //dummy example

dup app.vue //real example
```

Will check style duplicate lines in `app.scss` / `app.vue` and back it to you in the console with number of duplicated lines.

```js
//result
margin: 2px;
color: black;
margin: 5px;

3 Duplicated Lines
```

### <a href="https://github.com/moumen-soliman/duplicated-css-lines/projects/1">Todo List</a>, Start contribute and join us.
