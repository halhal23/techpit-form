import { Button, TextField } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../domain/entity/rootState';
import collegsActions from '../store/colleges/actions';
import { searchColleges } from '../store/colleges/effects';
import useStyles from './styles';

const College = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const colleges = useSelector((state: RootState) => state.colleges)

  const handleChange = (word: string) => {
    dispatch(collegsActions.setSearchWord(word));
  }

  const handleSearch = () => {
    dispatch(searchColleges(colleges.search));
  }
  return (
    <>
      <TextField value={colleges.search} onChange={event => handleChange(event.target.value)} className={classes.formField} label="大学名を検索" />
      <Button fullWidth className={classes.button} variant="outlined" onClick={handleSearch}>検索</Button>
    </>
  )
}

export default College;