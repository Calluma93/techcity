import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Family To Do List</Link>
        <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">To Do List</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Create New Task</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Add Family Member</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}