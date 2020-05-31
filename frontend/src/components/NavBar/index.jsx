import React, { Component, useState } from "react";
import { Button, Dialog,DialogTitle, DialogContent, DialogActions, DialogContentText } from '@material-ui/core';
import { NavLink, Link } from "react-router-dom";
import Login from '../LoginForm';

import styled from "styled-components";
import "../LoginForm/styles.css"
import ValidatedLoginForm from "../LoginForm/ValidatedLoginForm";

const Navigation = styled.header`
  width: 100%;
  border-bottom: 10px solid #222;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 100px 0;
  height: 140px;
  margin-bottom: 60px;
  background: #f8f8f8;

  .logo a {
    padding-top: 33px;
    display: flex;
    flex-direction: column;
    clear: both;
    padding-bottom: 30px;
    text-decoration: none;

    p {
      width: 500px;
      display: block;
    }
    em {
      font-size: 0.5em;
      float: left;
      display: block;
      img {
        display: inline-block;
        margin-top: 5px;
        width: 15px;
        float: left;
      }
      .letterhead {
        display: inline-block;
        line-height: 260%;
        float: left;
      }
    }
  }
  .gray {
    color: #ccc;
  }
  a {
    color: #222;
    opacity: 0.55;
    transition: all 0.6s;
    color: #222;
    font-size: 1em;
  } 
  a:hover {
    opacity: 1;
  }
  .fa-bars {
    display: none;
    color: #222;
    font-size: 2rem;
  }
  nav {
    ul {
      display: flex;
      justify-content: space-between;
    }
    li {
      margin: 0 15px;
      justify-content: space-between;
      font-size: 1em;
    }
    a {
      font-size: 1em;
      text-decoration: none;
      .active {
        color: tomato;
      }
    }
    a.active {
      color: #222;
    }
  }

  @media only screen and (max-width: 800px) {
    padding: 0px;
    .logo {
      padding-left: 15px;
      padding-top: 0px !important;
    }
  }
  @media only screen and (max-width: 600px) {
    height: auto;
    min-height: 50px;
    display: block;
    position: relative;
    .logo {
      width: 100%;
      display: block;
      padding-top: 20px;
      margin: 0px;
      margin-left: -5px;
      a {
        padding: 20px 0px;
      }
    }
    .fa-bars {
      display: inline-block;
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
    }
    ul.collapsed {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-wrap: wrap;

      overflow: hidden;
      max-height: 0;
      -moz-transition-duration: 0.4s;
      -webkit-transition-duration: 0.4s;
      -o-transition-duration: 0.4s;
      transition-duration: 0.4s;
      -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      transition-timing-function: cubic-bezier(0, 1, 0.5, 1);

      &.is-expanded {
        overflow: hidden;
        max-height: 500px; /* approximate max height */
        -moz-transition-duration: 0.4s;
        -webkit-transition-duration: 0.4s;
        -o-transition-duration: 0.4s;
        transition-duration: 0.4s;
        -moz-transition-timing-function: ease-in;
        -webkit-transition-timing-function: ease-in;
        -o-transition-timing-function: ease-in;
        transition-timing-function: ease-in;
      }
      li {
        padding: 15px 10px;
        margin: 0px 0px;
        width: 100%;
      }
    }
  }
`;

function Nav() {
  const [isExpanded, toggleIsExpanded] = useState(false)
  const [openLoginDiaglog, toggleOpenLoginDialog] = useState(false)

  const handleToggle = (event) => {
    event.preventDefault();
    toggleIsExpanded(!isExpanded)
  }

  const onLogInButtonClicked = () => {
    toggleOpenLoginDialog(!openLoginDiaglog)
  }
  return (
    <Navigation>
      <div className="logo">
        <Link to="/">
          <p>SEER</p>
          <em>
            <div className="letterhead">
              <span className="name">
                Software Engineering Evidence Repository
                </span>
            </div>
          </em>
        </Link>
      </div>
      <nav className="nav">
        <ul className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>
          <NavLink activeClassName="active" to="/">
            <li>
              <i className="material-icons"
                aria-hidden="true">home</i>
                Home
              </li>
          </NavLink>
          <NavLink activeClassName="active" to="/about">
            <li>about</li>
          </NavLink>
          <Button onClick={onLogInButtonClicked}>Login</Button>
        </ul>
      </nav>
      <LoginDialog open={openLoginDiaglog} toggleOpen={onLogInButtonClicked}/>
    </Navigation>
  );
}

// open: boolean
function LoginDialog({ open, toggleOpen }) {
  const handleClose = () => {
    toggleOpen(!open)
  }
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Login Here"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <ValidatedLoginForm/>
          </DialogContentText>
      </DialogContent>
    </Dialog>
  )
}

export default Nav;
