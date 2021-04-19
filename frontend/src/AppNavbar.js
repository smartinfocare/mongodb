import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'
export default class AppNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {isOpen: false};
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div class="container-fluid">
          <nav class="navbar navbar-default">
            <div class="container">
              <div class="navbar-header">
              <a>  <Link  to="/"> SICS</Link></a>
              </div>
          
              <div class="collapse navbar-collapse" id="navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                  <li><Link to="/">  HOME</Link></li>
                  <li><Link to="/customers">  Customer List</Link></li>
                </ul>
              </div>
            </div>
          </nav>
          </div>
    )
         
  }
}