# React-Select-Timezone

A simple component is built in from [React-Select](https://github.com/JedWatson/react-select) and [Moment.Timezone](https://momentjs.com/timezone/)

## Installation

```
$ npm install react-select-timezone
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
      <SelectTimezone />
    </div>
  );
};

App.propTypes = {
  name: PropTypes.string,
};

export default App;
```

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/vinhnglx/react-timezone-select
