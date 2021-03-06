import React, { Component } from 'react';
import './Clock.css';

interface TimeProps {
  secondsAngle: number,
  minutesAngle: number,
  hoursAngle: number
}

interface Dial {
  dial: number[]
}

export class Clock extends Component<TimeProps> {

  state: Dial = {
    dial: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  }

  render() {
    return (
      <div className="app-container__dial">
        <div className="dial__digit-container">
          {this.state.dial.map(digit => (
            <p key={digit} className="digit-container__digit">
              <span className={`digit__number-${digit} digit__number`}>{digit}</span>
            </p>))}
        </div>
        <div className="dial__central-axis">
          {this.props && <div className="central-axis__hour-arrow" style={{ transform: `rotate(${this.props.hoursAngle}deg)` }}></div>}
          {this.props && <div className="central-axis__minute-arrow" style={{ transform: `rotate(${this.props.minutesAngle}deg)` }}></div>}
          {this.props && <div className="central-axis__second-arrow" style={{ transform: `rotate(${this.props.secondsAngle}deg)` }}></div>}
        </div>
      </div >
    )
  }
}

export default Clock;
