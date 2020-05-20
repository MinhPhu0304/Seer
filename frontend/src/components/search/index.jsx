import React from 'react';
import { TextField, Button, InputLabel, MenuItem } from '@material-ui/core';

import './search.css';

const searchField = [
  'Method',
  'Methodlogy',
  'Benefit',
  'Participants',
]

const operator = [
  'And',
  'Or',
  'And not',
  'Or not',
]

// Warning: this is a place holder value only
const value = [
  'Performance',
  'Improve code quality',  
]

export function Search(props) {
  return (
    <div className="search__container">
      <form class="search__form" noValidate autoComplete="off">
        <InputLabel className="description__search_field">
          Search for: <TextField className="search__Description_input" label="Description" variant="outlined" />
        </InputLabel>
        <InputLabel className="description__search_field">Date: <TextField
          label="From"
          type="date"
          defaultValue=""
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
          <TextField
            label="To"
            type="date"
            defaultValue=""
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </InputLabel>
        <InputLabel className="description__search_field">
          If
          <TextField
            className="search__field__Select"
            select
            label="Field"
            variant="outlined"
          >
            {searchField.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            className="search__field__Select"
            select
            label="Operator"
            variant="outlined"
          >
            {operator.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            className="search__field__Select"
            select
            label="Value"
            variant="outlined"
          >
            {value.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </InputLabel>
        <Button className="btn__primary" variant="contained">Search</Button>
      </form>
    </div>
  );
}
