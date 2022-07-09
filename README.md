
# Redux Toolkit

### React Course

[My React Course](https://www.youtube.com)

### Support

Find the App Useful? [You can buy me a coffee]

#### Docs

[Redux Toolkit Docs (https://redux-toolkit.js.org/introduction/getting-started)]

### Install Template

```sh
npx create-react-app@latest my-react-app --template redux
```

#### Existing App

```sh
npm installl @reduxjs/toolkit react-redux
```

### @reduxjs/toolkit

consists of few libraries

- redux (core library, state management)
- immer (alllows to mutate state)
- redux-thunk (handle async actions)
- reselect 9simplifies reducer functions)


### Extras

- redux devtools
- combine reducers


#### react-redux

connects our app to redux

#### Setup Store

- create store.js

```js
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {},
});
```


#### Setup Provider

- index.js

```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
```

#### Setup Dealer Slice

- application feature
- create features folder/dealer
- create dealerSlice.js

```js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    dealerItems: [],
    amount: 0,
    total:0,
    isLoading: true,
};

const dealerSlice = createSlice({
    name: 'dealer',
    initialState,
});

console.log(dealerSlice);
export default dealerSlice.reducer;
```

- store.js

```js
import { configureStore } from '@reduxjs/toolkit';
import dealerReducer from './features/dealer/dealerSlice'

export const store = configureStore({
    reducer: {
        dealer: dealerReducer,
    },
});
```