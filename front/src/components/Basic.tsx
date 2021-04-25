import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Gender } from '../domain/entity/gender';
import { Profile } from '../domain/entity/profile';
import { RootState } from '../domain/entity/rootState';
import { PROFILE } from '../services/profile';
import profileActions from '../store/profile/actions';
import useStyles from './styles';

const Basic = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state: RootState) => state.profile);
  const classes = useStyles();

  const handleChange = (member: Partial<Profile>) => {
    dispatch(profileActions.setProfile(member));
  }

  return (
    <>
      <TextField fullWidth className={classes.formField} label={PROFILE.NAME} value={profile.name} onChange={event => handleChange({name: event.target.value})} />
      <TextField fullWidth multiline className={classes.formField} rows={5} label={PROFILE.DESCRIPTION} value={profile.description} onChange={event => handleChange({description: event.target.value})} />
      <FormControl className={classes.formField}>
        <FormLabel>{PROFILE.GENDER}</FormLabel>
        <RadioGroup value={profile.gender} onChange={event => handleChange({gender: event.target.value as Gender})}>
          <FormControlLabel value="male" label="男性" control={<Radio color="primary" />} />
          <FormControlLabel value="female" label="女性" control={<Radio color="primary" />} />
        </RadioGroup>
      </FormControl>
      <TextField fullWidth className={classes.formField} label={PROFILE.BIRTHDAY} type="date" value={profile.birthday} onChange={event => handleChange({birthday: event.target.value})} InputLabelProps={{shrink: true}} />
    </>
  )
}

export default Basic;