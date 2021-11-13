import React, { useEffect } from 'react';
import { Grid, Paper } from '@material-ui/core';

import useStyles from './styles';
import { getLeaderboardData } from "../../api/Leaderboard";

const Home = () => {

    const classes = useStyles();

    useEffect(() => {
      getLeaderboardData().then(({ data }) => {
        console.log(data);
      }).catch(err => console.log(err));
    }, []);

    return (
        <div className={classes.container}>
            <div className={classes.contents}>
              <Grid container spacing={3}>
                  <Grid item xs={12}>
                      <Paper elevation={2} className={classes.paper}>

                      </Paper>
                  </Grid>
              </Grid>
            </div>
        </div>
    )
}

export default Home;
