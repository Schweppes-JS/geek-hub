import React, { Component } from 'react';
import './ClockContainer.css';

import Clock from '../Clock';
import ThemeSwitch from '../ThemeSwitch';
import TimeZone from '../TimeZone';

type ClockState = {
  time: {
    seconds: number,
    minutes: number,
    hours: number
  },
  angles: {
    secondsAngle: number,
    minutesAngle: number,
    hoursAngle: number
  }
}

class ClockContainer extends Component<{}, ClockState> {

  private timeZone = new Date().getTimezoneOffset() / 60;

  state: ClockState = {
    time: {
      seconds: new Date().getSeconds(),
      minutes: new Date().getMinutes(),
      hours: new Date().getHours()
    },
    angles: {
      secondsAngle: new Date().getSeconds() * 6,
      minutesAngle: new Date().getMinutes() * 6,
      hoursAngle: (new Date().getHours() * 30) + (new Date().getMinutes() / 2)
    }
  }

  tick() {
    this.setState({
      angles: {
        secondsAngle: this.state.angles.secondsAngle + 6,
        minutesAngle: this.state.angles.minutesAngle + (new Date().getSeconds() === 59 ? 6 : 0),
        hoursAngle: this.state.angles.hoursAngle + (new Date().getSeconds() === 59 ? 0.5 : 0)
      }
    });
  }

  componentDidMount() {
    setInterval(() => this.tick(), 1000)
  }

  onChangeTimeZone = (value: number): void => {
    this.timeZone = value;
    const UTCHours = new Date().getUTCHours();
    let currentDate = new Date();
    currentDate.setHours(UTCHours - this.timeZone);
    this.setState({
      time: {
        ...this.state.time,
        hours: currentDate.getHours()
      },
      angles: {
        ...this.state.angles,
        hoursAngle: (currentDate.getHours() * 30) + (currentDate.getMinutes() / 2)
      }
    });
  }

  render() {
    return (
      <div className="root-container__app-container">
        <Clock {...this.state.angles} />
        <TimeZone onChangeTimeZone={this.onChangeTimeZone} />
        <ThemeSwitch />
      </div>
    )
  }
}

export default ClockContainer;