# React-Select-Timezone

A simple component wrapping [React-Select](https://github.com/JedWatson/react-select) and [Moment.Timezone](https://momentjs.com/timezone/) to make a timezone picker.

Forked from vinhnglx/react-timezone-select

## Installation

```
$ npm install @capaj/react-select-timezone
```

## Usage

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import SelectTimezone from 'react-select-timezone'

const App = () => {
  return (
    <div>
      <SelectTimezone
        value={momentTimezone.tz.guess()} // the default, so you can omit if you don't need other value
        clearable // allows user to have null value in this select
        guess // this will fill the input with user's timezone guessed by moment. A "value" prop has always bigger priority than guessed TZ
        onChange={val => {
          console.log(val.value) // like "Europe/London"
          console.log(val.time) // like "-2.00"
          console.log(val.label) // like "(GMT+02:00) Europe/Prague"
          console.log(val.offset) // like -120
        }}
      />
    </div>
  )
}

App.propTypes = {
  name: PropTypes.string
}

export default App
```

if you just need to display a timezone in the same format, do `import {formatTimezone} from @capaj/react-select-timezone` and use that. It will format the `Europe/London` into `(GMT+01:00) Europe/London`
