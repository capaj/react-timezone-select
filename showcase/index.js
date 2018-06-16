import ReactDOM from 'react-dom'
import React, { Component, Fragment } from 'react'
import SelectTimezone, { formatTimezone } from '../src/SelectTimezone'

const Test = () => (
  <Fragment>
    <SelectTimezone clearable />
    Check the console to see formatted timezone value:
    <SelectTimezone
      clearable
      guess
      onChange={opt => {
        console.log(formatTimezone(opt.value))
      }}
    />
    <SelectTimezone clearable guess value={'Europe/London'} />
  </Fragment>
)

ReactDOM.render(<Test />, window.reactApp)
