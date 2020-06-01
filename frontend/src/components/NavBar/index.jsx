import React, { Component, useState } from "react";
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText } from '@material-ui/core';
import { Link } from "react-router-dom";
import Login from '../LoginForm';

import styled from "styled-components";
import "../LoginForm/styles.css"

const Navigation = styled.header`
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
        <div className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>
          <Link activeClassName="active" to="/">
            <i className="material-icons"
              aria-hidden="true">home</i>
                Home
          </Link>
          <Link activeClassName="active" to="/about">
            about
          </Link>
          <Button onClick={onLogInButtonClicked}>Login</Button>
        </div>
      </nav>
      <LoginDialog open={openLoginDiaglog} toggleOpen={onLogInButtonClicked} />
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
      <DialogTitle>Log in</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <Login />
        </DialogContentText>
      </DialogContent>
    </Dialog>
  )
}

export default Nav;
