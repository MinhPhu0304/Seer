import React, { Component } from 'react'
import * as Sentry from '@sentry/browser';

Sentry.init({dsn: "https://5dec6c399cf84c4da9ec679be9568075@o265348.ingest.sentry.io/5273439"});

export class ErrorBoundary extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    }
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    Sentry.withScope((scope) => {
      scope.setExtras(errorInfo);
      Sentry.captureException(error);
    });
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh'}}>
          <p>An error occured, please try to reload the page.</p>
        </div>
      )
    }
    return this.props.children
  }
}