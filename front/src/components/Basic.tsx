import { TextField } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Profile } from '../domain/entity/profile';
import { RootState } from '../domain/entity/rootState';
import profileActinos from '../store/profile/actions';
import useStyles from './styles';

const Basic = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state: RootState) => state.profile);
  const classes = useStyles();

  const handleChange = (member: Partial<Profile>) => {
    dispatch(profileActinos.setProfile(member));
  }

  return (
    <>
      <TextField fullWidth className={classes.formField} label="名前" value={profile.name} onChange={event => handleChange({name: event.target.value})} />
      <TextField fullWidth multiline className={classes.formField} rows={5} label="自己紹介" />
    </>
  )
}

export default Basic;