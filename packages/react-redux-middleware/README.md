# React Redux Middleware

This is two basic middlewares for the all React api driven [react-redux](https://github.com/jonstuebe/react-redux/tree/master/packages/react-redux)

## Importing

### ES6

```javascript
import { logger, thunk } from "@jonstuebe/react-redux-middleware";
```

### ES5 (CommonJS)

```javascript
const { logger, thunk } = require("@jonstuebe/react-redux-middleware");
```

### ES5 (UMD Build)

```javascript
var thunk = ReactReduxMiddleware.thunk;
var logger = ReactReduxMiddleware.logger;
```

## Install

npm

```shell
npm i -s @jonstuebe/react-redux-middleware
```

or yarn

```shell
yarn add @jonstuebe/react-redux-middleware
```

## Usage

## thunk

Just like redux, [react-redux](https://github.com/jonstuebe/react-redux/tree/master/packages/react-redux) does not handle async action creators as those can be handled by middleware. Thus thunk.

#### Writing thunks

```javascript
const thunk = (a, b) => {
  return dispatch => {
    setTimeout(() => {
      dispatch({
        type: "TEST",
        a,
        b
      });
    }, 3000);
  };
};
```

## logger

By adding the logger you'll get very basic logging in your console.
