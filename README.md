# React-Select-Timezone

A simple component wrapping [React-Select](https://github.com/JedWatson/react-select) and [Moment.Timezone](https://momentjs.com/timezone/) to make a timezone picker.

Forked from vinhnglx/react-timezone-select

## Installation

```
$ npm install @capaj/react-select-timezone
```

## Usage

```
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import SelectTimezone from 'react-select-timezone';

const App = () => {
  return (
    <div>
      <SelectTimezone onChange={(timezone) => console.log(timezone)}/>
    </div>
  );
};

App.propTypes = {
  name: PropTypes.string,
};

export default App;
```
