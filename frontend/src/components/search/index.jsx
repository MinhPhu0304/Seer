import React, { useState, useEffect } from 'react';
import { TextField, Button, InputLabel, MenuItem, Fab } from '@material-ui/core';

import { fieldValue as FieldValueMap, searchField, operator } from './constants';
import { constructSearchQuery } from './helper';
import './search.css';

export function Search({ submitSearch }) {
  const [description, setDescription] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [ifFieldValue, setIfFieldValue] = useState([])
  const onSubmit = (e) => {
    e.preventDefault()
    // https://stackoverflow.com/questions/11704267/in-javascript-how-to-conditionally-add-a-member-to-an-object
    const query = constructSearchQuery({
      ...(description !== '') && { description: description },
      ...(startDate !== '') && { startDate: startDate },
      ...(endDate !== '') && { endDate: endDate },
      ifFieldValue
    })
    submitSearch(query)
  }

  const onChangeIfField = (values) => {
    setIfFieldValue(values)
  }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value)
  }

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value)
  }

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value)
  }
  return (
    <div className="search__container">
      <form className="search__form" noValidate autoComplete="off" onSubmit={onSubmit}>
        <InputLabel className="search__input__field">
          Search for: <TextField className="search__Description_input" value={description}
            onChange={handleDescriptionChange} label="Description" variant="outlined" required />
        </InputLabel>
        <DateField handleEndDateChange={handleEndDateChange} handleStartDateChange={handleStartDateChange} />
        <IfComponent onChangeIfField={onChangeIfField} />
        <Button color="primary" variant="contained" type="submit" onClick={onSubmit}>Run Search</Button>
      </form>
    </div>
  );
}

function DateField({ handleStartDateChange, handleEndDateChange }) {
  return (
    <InputLabel className="search__input__field">
      Date: <TextField label="From" type="date" variant="outlined"
        onChange={handleStartDateChange}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField label="To" type="date" variant="outlined"
        onChange={handleEndDateChange}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </InputLabel>
  )
}

function IfComponent({ onChangeIfField }) {
  const [ifFilter, setFilter] = useState([{
    key: 0,
    fieldPicked: '',
    operatorPicked: '',
    valuePicked: '',
  }])

  useEffect(() => {
    onChangeIfField(ifFilter)
  }, [ifFilter, onChangeIfField])

  const onAddClick = () => {
    const nextKey = ifFilter.length
    setFilter([...ifFilter, {
      key: nextKey,
      fieldPicked: '',
      operatorPicked: '',
      valuePicked: '',
    }])
  }

  const onRemoveClick = (key) => {
    if (ifFilter.length !== 1) {
      const filtered = ifFilter.filter((value) => value.key !== key)
      setFilter(filtered)
    }
  }

  const onIfFieldChange = (value) => {
    const newIfFilter = ifFilter.map((currentFilter, index) => index === value.key ? value : currentFilter)
    setFilter(newIfFilter)
  }
  return (
    <>
      {
        ifFilter.map((ifField, index) => <IfField ifState={ifField} key={index} onAddClick={onAddClick}
          onIfFieldChange={onIfFieldChange}
          onRemoveClick={onRemoveClick} />)
      }
    </>
  )
}

function IfField({ ifState, onAddClick, onRemoveClick, onIfFieldChange }) {
  const { key, fieldPicked, operatorPicked, valuePicked } = ifState
  const [valueList, setValueList] = useState([])
  const [selectedValue, setSelectedValue] = useState(valuePicked)
  const handleFieldPick = (e) => {
    onIfFieldChange({ ...ifState, fieldPicked: e.target.value })
    setValueList(FieldValueMap[e.target.value])
    setSelectedValue('')
  }

  const handleValuePick = (e) => {
    setSelectedValue(e.target.value)
    onIfFieldChange({ ...ifState, valuePicked: e.target.value })
  }
  const handleOperatorChange = (e) => {
    onIfFieldChange({ ...ifState, operatorPicked: e.target.value })
  }
  return (
    <InputLabel className="search__input__field">
      If
      <TextField className="search__field__Select" select label="Field" value={fieldPicked} onChange={handleFieldPick}
        variant="outlined">
        {searchField.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <TextField className="search__field__Select" select label="Operator" value={operatorPicked}
        onChange={handleOperatorChange}
        variant="outlined">
        {operator.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <TextField className="search__field__Select" select label="Value" value={selectedValue}
        onChange={handleValuePick}
        variant="outlined">
        {valueList.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <Fab size="small" onClick={onAddClick} color="secondary">
        <i className="material-icons">add</i>
      </Fab>
      <Fab size="small" onClick={() => onRemoveClick(key)} color="secondary">
        <i className="material-icons" >remove</i>
      </Fab>
    </InputLabel>
  )
}
