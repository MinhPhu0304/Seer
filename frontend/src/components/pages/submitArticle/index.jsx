import React from 'react'
import { Formik, Form } from 'formik'
import { Typography, TextField, Button } from '@material-ui/core'

import './index.css';

export function SubmitArticle() {
  return (
    <div>
      <Typography variant="h4" align="center">Submit new article</Typography>
      <SubmitArticleForm />
    </div>
  )
}

function SubmitArticleForm() {

  const handleValidate = (values) => {

  }

  const handleFormikSubmit = async (value) => {

  }
  return (
    <Formik initialValues={getInitialFormValue()}
      onSubmit={handleFormikSubmit}
      validate={handleValidate}>
      {({ isSubmitting, values, handleChange }) => (
        <Form className="submit_article__container">
          <TextField label="Title"
            variant="outlined" 
            onChange={handleChange}
            name="title"
            required value={values.title} />
          <div className="fill__Column">
            <TextField 
              label="Author"
              name="author"
              variant="outlined"
              required
              onChange={handleChange}
              value={values.author} />
            <TextField
              label="Cite Key" 
              variant="outlined" name="citeKey"
              required
              onChange={handleChange} 
              value={values.citeKey} />
          </div>
          <TextField label="Journal" 
            variant="outlined" name="journal"
            onChange={handleChange}
            required
            value={values.journal} />
          <div className="fill__Column">
            <TextField label="Month"
              variant="outlined" name="month"
              onChange={handleChange} 
              value={values.month} />
            <TextField label="Year"
              onChange={handleChange}
              variant="outlined" name="year"
              value={values.year} />
          </div>
          <div className="fill__Column">
            <TextField label="Volume"
              variant="outlined" name="volume"
              onChange={handleChange}
              value={values.volume} />
            <TextField label="Page" 
              onChange={handleChange}
              variant="outlined" name="page"
              value={values.page} />
          </div>
          <TextField label="Annote"
            variant="outlined"
            name="annote"
            onChange={handleChange}
            rows={3} multiline={true} value={values.annote} />
          <div className="fill__Column3">
            <TextField label="Eprint"
              variant="outlined"
              onChange={handleChange}
              name="eprint"
              value={values.eprint} />
            <TextField label="Eprint Type"
              variant="outlined" 
              name="eprinttype"
              onChange={handleChange} value={values.eprinttype} />
            <TextField label="Eprint Class" 
              variant="outlined"
              name="eprintclass" onChange={handleChange}
              value={values.eprintclass} />
          </div>
          <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
            Submit
          </Button>
        </Form>)
      }
    </Formik>
  )
}

function getInitialFormValue() {
  return {
    title: '',
    author: '',
    citeKey: '',
    journal: '',
    month: '',
    year: '',
    volume: '',
    page: '',
    annote: '',
    eprint: '',
    eprinttype: '',
    eprintclass: '',
  }
}
