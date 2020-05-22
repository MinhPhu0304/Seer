import React from 'react'
import { ThemeProvider, createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#66BB6A'
    },
    secondary: {
      main: '#bb6766'
    },
  },
});

export function Theme ({ children }) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}
