import React, { ChangeEvent, PureComponent } from 'react';
import './TimeZone.css';

type timeZoneState = {
  timeZoneList: number[]
}

export class TimeZone extends PureComponent<{ onChangeTimeZone: Function }> {

  state: timeZoneState = {
    timeZoneList: [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -11, -12]
  }

  changeTimeZone(e: ChangeEvent<HTMLSelectElement>) {
    this.props.onChangeTimeZone(parseInt(e.target.value));
  }

  render() {
    return (
      <div className="app-container__time-zone-container">
        <h4 className="time-zone-container__heading">Choose time zone</h4>
        <select onChange={(e) => this.changeTimeZone(e)} className="time-zone-container__time-zone">
          {this.state.timeZoneList.map(zone =>
            <option key={zone} value={zone}>{`UTC ${zone < 0 ? '+' : '-'}${zone < 10 && zone > -9 ? '0' : ''}${Math.abs(zone)}:00`}</option>)}
        </select>
      </div>
    )
  }
}

export default TimeZone
