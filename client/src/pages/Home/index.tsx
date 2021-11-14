import React, { useEffect } from 'react';
import { Grid, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Avatar } from '@material-ui/core';

import useStyles from './styles';
import { getLeaderboardData } from "../../api/Leaderboard";

interface Row {
  handle: string,
  email: string,
  avatar: string,
  firstName: string,
  lastName: string,
  rank: string,
  rating: number
}

const createData = (handle: string, email: string, avatar: string, firstName: string, lastName: string, rank: string, rating: number) => {
  return { handle, email, avatar, firstName, lastName, rank, rating };
}

const Home = () => {

    const classes = useStyles();

    var rows: Row[] = [];

    useEffect(() => {
      getLeaderboardData().then(({ data }) => {
        data.map((id: Row) => {
          rows.push(createData(id.handle, id.email, id.avatar, id.firstName, id.lastName, id.rank, id.rating));
        });
      }).catch(err => console.log(err));
    }, []);

    return (
        <div className={classes.container}>
            <div className={classes.contents}>
              <h2>Leaderboard</h2>
              <br/>
              <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TableContainer component={Paper}>
                      <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell>Avatar</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Handle</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Rank</TableCell>
                            <TableCell align="right">Rating</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.map((row, index) => (
                            <TableRow key={index}>
                              <TableCell>
                                <Avatar src={row.avatar} alt="avatar" />
                              </TableCell>
                              <TableCell component="th" scope="row">
                                {`${row.firstName} ${row.lastName}`}
                              </TableCell>
                              <TableCell align="right">{row.handle}</TableCell>
                              <TableCell align="right">{row.email}</TableCell>
                              <TableCell align="right">{row.rank}</TableCell>
                              <TableCell align="right">{row.rating}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>
              </Grid>
            </div>
        </div>
    )
}

export default Home;
