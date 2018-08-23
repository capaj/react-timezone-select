import React from 'react'
import Select from 'react-select'
import sortBy from 'lodash.sortby'
import moment from 'moment-timezone'

export const formatTimezone = tzString =>
  `(GMT${moment.tz(tzString).format('Z')}) ${tzString}`

export const getTimezoneProps = tzString => {
  const tz = moment.tz(tzString)
  const tzStringOffset = tz
    .format('Z')
    .replace(':00', '')
    .replace(':30', '.5')
  let x = tzStringOffset === 0 ? 0 : parseInt(tzStringOffset).toFixed(2)

  return {
    label: formatTimezone(tzString),
    value: `${tzString}`,
    time: `${x}`,
    offset: tz._offset
  }
}

class SelectTimezone extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
    if (props.guess) {
      this.state.selectedValue = moment.tz.guess()
    }
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.value) {
      return {
        selectedValue: nextProps.value
      }
    }
    if (nextProps.value === undefined) {
      return prevState
    }
    return {
      selectedValue: null
    }
  }

  timeZones() {
    const timeZones = moment.tz.names()
    const offsetTmz = []

    for (const i in timeZones) {
      offsetTmz.push(getTimezoneProps(timeZones[i]))
    }

    return sortBy(offsetTmz, [
      function(el) {
        return -el.time
      }
    ])
  }

  render() {
    const {
      onChange,
      value,
      isClearable = false,
      className,
      ...restProps
    } = this.props
    const selectOptions = this.timeZones()
    const selectClassName = className ? className : 'react-select-timezone'
    const selected = selectOptions.find(({ value }) => {
      return value === this.state.selectedValue
    })

    return (
      <Select
        className={selectClassName}
        isClearable={isClearable}
        options={selectOptions}
        isMulti={false}
        onChange={option => {
          if (option) {
            this.setState({ selectedValue: option.value })
            onChange && onChange(option.value)
          } else {
            this.setState({ selectedValue: null })
            onChange && onChange(null)
          }
        }}
        defaultValue={selected}
        {...restProps}
      />
    )
  }
}

export default SelectTimezone
