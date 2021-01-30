import React, { ChangeEvent, Component } from 'react';
import './TimeZone.css';

export class TimeZone extends Component<{ onChangeTimeZone: Function }> {

  changeTimeZone(e: ChangeEvent<HTMLSelectElement>) {
    this.props.onChangeTimeZone(parseInt(e.target.value));
  }

  render() {
    return (
      <div className="app-container__time-zone-container">
        <h4 className="time-zone-container__heading">Choose time zone</h4>
        <select onChange={(e) => this.changeTimeZone(e)} className="time-zone-container__time-zone">
          <option value="12">UTC -12:00</option>
          <option value="11">UTC -11:00</option>
          <option value="10">UTC -10:00</option>
          <option value="9">UTC -09:00</option>
          <option value="8">UTC -08:00</option>
          <option value="7">UTC -07:00</option>
          <option value="6">UTC -06:00</option>
          <option value="5">UTC -05:00</option>
          <option value="4">UTC -04:00</option>
          <option value="3">UTC -03:00</option>
          <option value="2">UTC -02:00</option>
          <option value="1">UTC -01:00</option>
          <option value="0">UTC +00:00</option>
          <option value="-1">UTC +01:00</option>
          <option value="-2">UTC +02:00</option>
          <option value="-3">UTC +03:00</option>
          <option value="-4">UTC +04:00</option>
          <option value="-5">UTC +05:00</option>
          <option value="-6">UTC +06:00</option>
          <option value="-7">UTC +07:00</option>
          <option value="-8">UTC +08:00</option>
          <option value="-9">UTC +09:00</option>
          <option value="-10">UTC +10:00</option>
          <option value="-11">UTC +11:00</option>
          <option value="-12">UTC +12:00</option>
        </select>
      </div>
    )
  }
}

export default TimeZone
