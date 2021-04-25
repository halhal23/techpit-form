import { Button, Grid, InputLabel, TextField, Typography } from '@material-ui/core';
import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Career as ICareer } from '../domain/entity/career';
import { RootState } from '../domain/entity/rootState';
import { PROFILE } from '../services/profile';
import profileActions from '../store/profile/actions';
import useStyles from './styles';
import {exitEmptyCareer} from '../services/career';

const Career = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const careers = useSelector((state: RootState) => state.profile.careers);
  
  const handleAddCareer = () => {
    console.log('add career');
    dispatch(profileActions.addCareer({}));
  }

  const handleCareerChange = (member: Partial<ICareer>, i: number) => {
    dispatch(profileActions.setCareer({career: member, index: i}))
  }

  const handleDeleteCareer = (i: number) => {
    dispatch(profileActions.deleteCareer(i));
  }

  const isAddToCareer = exitEmptyCareer(careers);

  return (
    <>
      {
        careers.map((c, i) => (
          <Fragment key={i}>
            <Typography variant="h5" component="h3" className={classes.title}>
              職歴 {i+1}
            </Typography>
            <TextField className={classes.formField} fullWidth value={c.company} onChange={event => handleCareerChange({company: event.target.value}, i)} label={PROFILE.CAREERS.COMPANY} />
            <TextField className={classes.formField} fullWidth value={c.position} onChange={event => handleCareerChange({position: event.target.value}, i)} label={PROFILE.CAREERS.POSITION} />
            <div className={classes.careerSpan}>
              <InputLabel shrink>{PROFILE.CAREERS.SPAN}</InputLabel>
              <Grid container spacing={1} alignContent="space-between" alignItems="center">
                <Grid item xs={5}>
                  <TextField fullWidth type="month" onChange={event => handleCareerChange({startAt: event.target.value}, i)} InputLabelProps={{shrink: true}} />
                </Grid>
                <Grid item xs={2}>
                  <Typography align="center">〜</Typography>
                </Grid>
                <Grid item xs={5}>
                  <TextField fullWidth type="month" onChange={event => handleCareerChange({endAt: event.target.value}, i)} InputLabelProps={{shrink: true}} />
                </Grid>
              </Grid>
            </div>
            <Button fullWidth onClick={() => handleDeleteCareer(i)} className={classes.button} variant="outlined" color="secondary">職歴{i+1}を削除する</Button>
          </Fragment>
        ))
      }
      <Button fullWidth onClick={handleAddCareer} className={classes.button} variant="outlined" disabled={isAddToCareer}>職歴を追加する</Button>
    </>
  )
}

export default Career;