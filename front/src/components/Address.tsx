import { TextField } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Address as IAddress } from '../domain/entity/address';
import { RootState } from '../domain/entity/rootState';
import { isPostalcode } from '../services/address';
import { PROFILE } from '../services/profile';
import profileActions from '../store/profile/actions';
import { searchAddressFromPostalcode } from '../store/profile/effects';
import useStyles from "./styles";

const Address = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const profile = useSelector((state: RootState) => state.profile);

  const handleAddressChange = (member: Partial<IAddress>) => {
    dispatch(profileActions.setAddress(member));
  }

  const handlePostalcodeChange = (code: string) => {
    if(!isPostalcode(code)) return;
    dispatch(profileActions.setAddress({postalcode: code}));
    dispatch(searchAddressFromPostalcode(code));
  }
  return (
    <>
      <TextField fullWidth className={classes.formField} value={profile.address.postalcode} onChange={event => handlePostalcodeChange(event.target.value)} label={PROFILE.ADDRESS.POSTALCODE} />
      <TextField fullWidth className={classes.formField} value={profile.address.prefecture} onChange={event => handleAddressChange({prefecture: event.target.value})} label={PROFILE.ADDRESS.PREFECTURE} />
      <TextField fullWidth className={classes.formField} value={profile.address.city} onChange={event => handleAddressChange({city: event.target.value})} label={PROFILE.ADDRESS.CITY} />
      <TextField fullWidth className={classes.formField} value={profile.address.restAddress} onChange={event => handleAddressChange({restAddress: event.target.value})} label={PROFILE.ADDRESS.RESTADDRESS} />
    </>
  )
}

export default Address;