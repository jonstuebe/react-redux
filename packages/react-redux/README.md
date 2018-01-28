# React Redux

Hi, I know you're looking at the name of the repo and thinking that's the same one. Why didn't you come up with a different name? Well because it uses an almost identical api to redux and borrows the same syntax from the original react-redux package. But that's enough of that. On to details:

## Install

npm

```shell
npm i -s @jonstuebe/react-redux
```

or yarn:

```shell
yarn add @jonstuebe/react-redux
```

## Importing

### ES6

```javascript
import { StoreProvider, Connect } from "@jonstuebe/react-redux";
```

### ES5 (CommonJS)

```javascript
const { StoreProvider, Connect } = require("@jonstuebe/react-redux");
```

### ES5 (UMD Build)

```javascript
var StoreProvider = ReactRedux.StoreProvider;
var Connect = ReactRedux.Connect;
```

## Basic Usage

### \<StoreProvider reducer middleware />

As you can see below, you'll still create a root reducer (either object or function) and can attach middleware. I've used almost the same api for the middleware so they should function the same as you're used to with plain old redux. In addition you'll notice that methods like `applyMiddleware` and `combineReducers` are no longer being used. That's because that logic has been moved to inside of the component rather than assembled together to create the store.

**Props:**

* `reducer` rootReducer (either object of reducers or single reducer function)
* `middleware` accepts an array of middlewares

### Example

```javascript
import React from "react";
import { StoreProvider } from "@jonstuebe/react-redux";
import { logger, thunk } from "@jonstuebe/react-redux-middleware";
import rootReducer from "./reducer";

export default () => (
  <StoreProvider reducer={reducer} middleware={[logger, thunk]}>
    <App />
  </StoreProvider>
);
```

### \<Connect mapStateToProps />

Similar API to [react-redux](https://github.com/reactjs/react-redux). mapDispatchToProps is incoming in the next version.

**Props**

* `mapStateToProps` accepts a function with an argument of state that returns an object. (optional)

### Example

```javascript
import React from "react";
import { Connect } from "@jonstuebe/react-redux";

export default () => (
  <Connect
    mapStateToProps={state => {
      return state;
    }}
  >
    {({ state, dispatch }) => <h2>State: {state}</h2>}
  </Connect>
);
```

### Dispatching Actions

```javascript
import React from "react";
import { Connect } from "@jonstuebe/react-redux";
import { increment } from "../actions";

export default () => (
  <Connect>
    {({ dispatch }) => (
      <button
        onClick={() => {
          dispatch(increment());
        }}
      />
    )}
  </Connect>
);
```

## Async Action Creators

As is with the case of redux async action creators can be accomplished through middleware. Borrowed from the redux-thunk package, there is a plug and play version available in the package [`@jonstuebe/react-redux-middleware`](https://github.com/jonstuebe/react-redux/tree/master/packages/react-redux-middleware)
