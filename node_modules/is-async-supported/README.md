# is-async-supported

Check if async/await is available

## Installation

`npm install is-async-supported`

## Usage

```
const isAsyncSupported = require('is-async-supported')

if(!isAsyncSupported()) {
  // Load runtime transform
}
```

## Background

This package gives you the ability to load for example [async-to-gen](https://github.com/leebyron/async-to-gen) only when your Node.js environment doesn't support async/await.

At the moment this is not suitable for checking in browsers since it depends on the `VM` module provided by Node.js
