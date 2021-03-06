import React, { useState } from 'react'
import { orderBy } from 'lodash'
import {
  TableCell, TableRow, TableBody, TableHead, TableSortLabel,
  Table, TableContainer, Paper, IconButton, Collapse, Box, Typography
} from '@material-ui/core'

function Row(props) {
  const { row } = props;
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <i className="material-icons">keyboard_arrow_up</i> : <i className="material-icons">keyboard_arrow_down</i>}
          </IconButton>
        </TableCell>
        <TableCell scope="row">{row.title}</TableCell>
        <TableCell align="right">{row.author || '-'}</TableCell>
        <TableCell align="right">{row.methodlogy ? row.methodlogy.join() : '-'}</TableCell>
        <TableCell align="right">{row.month || '-'}</TableCell>
        <TableCell align="right">{row.year !== 0 ? row.year : '-'}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Extra information:
              </Typography>
              <ExtraInfor row={row} />
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

const defaultShownField = ['author', 'methodlogy', 'year', 'month', 'title', '_id', '__v']
function ExtraInfor({ row }) {
  return (
    <>
      {
        Object.keys(row).map(field => {
          return !defaultShownField.includes(field) && row[field] !== '' ? <Typography>{field}: {row[field]}</Typography> : null
        })
      }
    </>
  )
}

export default function ArticlesTable({ articles }) {
  const [sortedArticle, setSortedArticle] = useState(articles)
  const [currentActiveCol, setCurrentActiveCol] = useState(null)
  const [currentDirection, setCurrentDirection] = useState('asc')
  const [ascSort, toggleAscSort] = useState(true)
  const handleSortBy = (sortLabel) => () => {
    toggleAscSort(!ascSort)
    setCurrentActiveCol(sortLabel)
    setCurrentDirection(!ascSort ? 'asc' : 'desc')
    setSortedArticle(orderBy(sortedArticle, [sortLabel], [!ascSort ? 'asc' : 'desc']))
  }

  return (
    <TableContainer component={Paper} style={{ height: 400 }}>
      <Table aria-label="collapsible table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align="left">
              <TableSortLabel active={currentActiveCol === 'title'} direction={currentDirection} onClick={handleSortBy('title')}>
                Title
              </TableSortLabel>
            </TableCell>
            <TableCell align="center">
              <TableSortLabel active={currentActiveCol === 'author'} direction={currentDirection} onClick={handleSortBy('author')}>
                Author
              </TableSortLabel>
            </TableCell>
            <TableCell align="right">
              <TableSortLabel active={currentActiveCol === 'method'} direction={currentDirection} onClick={handleSortBy('method')}>
                SE Methodlogy
              </TableSortLabel>
            </TableCell>
            <TableCell align="right">
              <TableSortLabel onClick={handleSortBy('month')}>
                Month
              </TableSortLabel>
            </TableCell>
            <TableCell align="right">
              <TableSortLabel active={currentActiveCol === 'year'} direction={currentDirection} onClick={handleSortBy('year')}>
                Year
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedArticle.map((row) => (
            <Row key={row._id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
