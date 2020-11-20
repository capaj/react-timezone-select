import React from 'react'
import Select from 'react-select'
import sortBy from 'lodash.sortby'
import moment from 'moment-timezone'
import { List } from 'react-virtualized'
import { formatTimezone } from './formatTimezone'
export * from './formatTimezone'

export const getTimezoneProps = (tzString) => {
  const tz = moment.tz(tzString)
  const tzStringOffset = tz.format('Z').replace(':00', '').replace(':30', '.5')
  let x = tzStringOffset === 0 ? 0 : parseInt(tzStringOffset).toFixed(2)

  return {
    label: formatTimezone(tzString),
    value: `${tzString}`,
    time: `${x}`,
    offset: tz._offset,
  }
}

export const makeVirtualMenuListComponent = (ListProps) => {
  return (props) => {
    return (
      <List
        rowCount={props.children.length}
        style={{
          width: '100%',
        }}
        rowHeight={34.18}
        height={300}
        width={600}
        rowRenderer={({ key, index, style }) => {
          return (
            <div style={style} key={key}>
              {props.children[index]}
            </div>
          )
        }}
        {...ListProps}
      />
    )
  }
}

export class SelectTimezone extends React.Component<any, any> {
  timeZones: any[]
  constructor(props) {
    super(props)

    this.state = {}

    const timeZones = moment.tz.names().map((tz) => {
      return getTimezoneProps(tz)
    })

    this.timeZones = sortBy(timeZones, [
      function (el) {
        return -el.time
      },
    ])
  }
  componentDidMount() {
    const { onChange, value } = this.props
    if (this.props.guess && !value) {
      const guessed = moment.tz.guess()

      onChange && onChange(guessed)
      this.setState({
        selectedValue: guessed,
      })
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.value === undefined) {
      return null
    }
    if (nextProps.value != prevState.selectedValue) {
      return {
        selectedValue: nextProps.value,
      }
    }
    return null
  }

  render() {
    const {
      onChange,
      value: selectedTimezoneValue,
      isClearable = false,
      className,
      ...restProps
    } = this.props

    const selectClassName = className ? className : 'react-select-timezone'
    const selected = this.timeZones.find(({ value }) => {
      return value === this.state.selectedValue
    })

    return (
      <Select
        className={selectClassName}
        isClearable={isClearable}
        options={this.timeZones}
        isMulti={false}
        onChange={(option) => {
          if (option) {
            this.setState({ selectedValue: option.value })
            onChange && onChange(option.value)
          } else {
            this.setState({ selectedValue: null })
            onChange && onChange(null)
          }
        }}
        value={selected}
        {...restProps}
      />
    )
  }
}
