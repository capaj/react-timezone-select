import React from 'react'
import Select from 'react-select'
import sortBy from 'lodash.sortby'
import moment from 'moment'
import 'moment-timezone'

import 'react-select/dist/react-select.css'

class SelectTimezone extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.value) {
      return {
        selectedValue: nextProps.value
      }
    }
    return {
      selectedValue: moment.tz.guess()
    }
  }

  timeZones() {
    const timeZones = moment.tz.names()
    const offsetTmz = []

    for (const i in timeZones) {
      const tz = moment
        .tz(timeZones[i])
        .format('Z')
        .replace(':00', '')
        .replace(':30', '.5')
      let x = tz === 0 ? 0 : parseInt(tz).toFixed(2)

      const timeZone = {
        label: `(GMT${moment.tz(timeZones[i]).format('Z')}) ${timeZones[i]}`,
        value: `${timeZones[i]}`,
        time: `${x}`
      }
      offsetTmz.push(timeZone)
    }

    return sortBy(offsetTmz, [
      function(el) {
        return -el.time
      }
    ])
  }

  render() {
    const { onChange, value, clearable = false, ...restProps } = this.props
    const selectOptions = this.timeZones()
    return (
      <Select
        clearable={clearable}
        options={selectOptions}
        onChange={val => {
          this.setState({ selectedValue: val.value })
          onChange(val)
        }}
        value={this.state.selectedValue}
        {...restProps}
      />
    )
  }
}

export default SelectTimezone
