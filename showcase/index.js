import ReactDOM from 'react-dom'
import React, { Component, Fragment } from 'react'
import SelectTimezone, {
  formatTimezone,
  makeVirtualMenuListComponent
} from '../src/SelectTimezone'

const Test = () => (
  <Fragment>
    See the value in the console
    <SelectTimezone
      isClearable
      onChange={(value) => {
        console.log(value)
      }}
    />
    Check the console to see formatted timezone value:
    <SelectTimezone
      guess
      onChange={(value) => {
        console.log(formatTimezone(value))
      }}
    />
    <SelectTimezone isClearable guess value={'Europe/London'} />
    Virtualized menu list:
    <SelectTimezone
      guess
      components={{
        MenuList: makeVirtualMenuListComponent()
      }}
    />
  </Fragment>
)

ReactDOM.render(<Test />, window.reactApp)
