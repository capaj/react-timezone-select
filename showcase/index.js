import ReactDOM from 'react-dom'
import React, { Component, Fragment } from 'react'
import SelectTimezone from '../src/SelectTimezone'

const Test = () => (
  <Fragment>
    <SelectTimezone clearable />
    <SelectTimezone clearable guess />
    <SelectTimezone clearable guess value={'Europe/London'} />
  </Fragment>
)

ReactDOM.render(<Test />, window.reactApp)
