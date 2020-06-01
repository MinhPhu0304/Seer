import React, { useState, useEffect } from "react";
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText } from '@material-ui/core';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'

import Login from '../LoginForm';
import './navBar.css';

const Navigation = styled.header`
  border-bottom: 10px solid #222;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 100px 0;
  height: 70px;
  margin-bottom: 18px;
  background: #f8f8f8;

  .logoNav a {
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
  nav {
    a {
      font-size: 1em;
      text-decoration: none;
    }
  }
`;

export const NavigationBar = connect(mapStateToProps)(NavigationView)

function mapStateToProps ({ session }) {
  return {
    session
  }
}

function NavigationView({ session }) {
  const [openLoginDiaglog, toggleOpenLoginDialog] = useState(false)
  const onLogInButtonClicked = () => {
    toggleOpenLoginDialog(!openLoginDiaglog)
  }

  useEffect(() => {
    toggleOpenLoginDialog(false)
  }, [session])

  const handleLogout = () => window.location.reload() // TODO: something better than reload when we implement cookies

  return (
    <Navigation>
      <HomeLogoLink />
      <nav className="nav">
        <div className="collapsed">
          <HomeLink />
          <AboutLink />
          { !session.authenticated && <Button onClick={onLogInButtonClicked}>Login</Button>}
          { session.authenticated && <Button onClick={handleLogout}>Logout</Button> }
        </div>
      </nav>
      <LoginDialog open={openLoginDiaglog} toggleOpen={onLogInButtonClicked} />
    </Navigation>
  );
}

function HomeLogoLink() {
  return (
    <div className="logoNav">
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
  )
}

function HomeLink() {
  return (
    <Link active className="active Container__align_center" to="/">
      <i className="material-icons" aria-hidden="true" style={{ paddingRight: 4}}>
        home
      </i>
      Home
    </Link>
  )
}

function AboutLink() {
  return (
    <Link active className="active Container__align_center" to="/about">
      <i className="material-icons" aria-hidden="true" style={{ paddingRight: 4}}>
        info
      </i>
      about
    </Link>
  )
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
    >
      <DialogTitle>Welcome</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Login />
        </DialogContentText>
      </DialogContent>
    </Dialog>
  )
}
