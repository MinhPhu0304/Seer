import React, { useState } from 'react'
import { Formik, Form } from 'formik'
import { Typography, TextField, Button, Snackbar } from '@material-ui/core'

import './index.css';

export function SubmitArticlePage() {
  const [showSubmited, setShowSubmited] = useState(false)

  const handleClose = () => {
    setShowSubmited(false)
  }

  return (
    <div>
      <Typography variant="h4" align="center">Submit new article</Typography>
      <SubmitArticleForm setShowSubmited={setShowSubmited}/>
      <Snackbar open={showSubmited} autoHideDuration={6000} onClose={handleClose} message="Successfully submit article"/>
    </div>
  )
}

function SubmitArticleForm({ setShowSubmited }) {
  const [loading, setLoading] = useState(false)
  const [disableSubmit, setDisableSubmit] = useState(false)
  const handleValidate = (values) => {

  }

  const handleFormikSubmit = async (value) => {
    setLoading(true)
    const submited = await submitArticle(value)
    setLoading(false)
    if (submited) {
      setShowSubmited(true)
      setDisableSubmit(true)
    } else {

    }
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
          <Button type="submit" variant="contained" color="primary" disabled={isSubmitting || loading || disableSubmit}>
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

async function submitArticle (value) {
  const response = await fetch('/api/article', makeFetchConfig(value))
  if (!response.ok) return false
  const body = await response.json()
  return body
}

function makeFetchConfig(value) {
  return {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(value)
  }
}
