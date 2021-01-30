import React, { Component } from 'react';

import './ThemeSwitch.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

export class ThemeSwitch extends Component {

  state = {
    darkTheme: false
  }

  componentDidMount() {
    this.setState({
      darkTheme: localStorage.getItem('theme') === 'dark'
    });
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }

  onToggle(e: React.FormEvent<HTMLInputElement>) {
    this.setState({
      darkTheme: e.currentTarget.checked
    });
    if (e.currentTarget.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }

  render() {
    return (
      <div className="app-container__theme-switch">
        <h4 className="theme-switch__heading">Light Mode</h4>
        <div className="theme-switch__toggler">
          {this.state.darkTheme ?
            <FontAwesomeIcon icon={faMoon} className="toggler__icon" /> :
            <FontAwesomeIcon icon={faSun} className="toggler__icon" />}
          <input
            onChange={(e) => this.onToggle(e)}
            type="checkbox"
            className="toggler__checkbox"
            id="checkbox"
            name="checkbox"
            checked={this.state.darkTheme} />
          <label htmlFor="checkbox" className="toggler__slider"></label>
        </div>
      </div>
    )
  }
}

export default ThemeSwitch;
