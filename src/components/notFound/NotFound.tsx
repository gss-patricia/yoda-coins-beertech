import React from 'react';
import { Link } from 'react-router-dom';
import NotFoundBackground from '../../assets/404.svg';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  notFound: {
    height: '100vh',
    backgroundColor: '#F3EFF5',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
  },
}));

const NotFound = () => {
  const classes = useStyles();
  const message: string[] = [
    'Muitas das verdades que temos dependem de nosso ponto de vista',
    'Que a Força esteja com você!',
    'Treinar para libertar-se de tudo que tens medo a perder é necessário.',
    'O medo leva à raiva, a raiva leva ao ódio e o ódio leva ao sofrimento.',
    'Grande guerreiro? Guerra não faz grande ninguém.',
    'Ensine sempre o que você aprendeu.',
  ];
  return (
    <Grid className={classes.notFound}>
      <CssBaseline />
      <Grid item>
        <Typography component="h1" variant="h3">
          {message[Math.floor(Math.random() * 6) + 1]}
        </Typography>
      </Grid>
      <img
        src={NotFoundBackground}
        alt="Página não encontrada erro 404"
        width="75%"
        height="75%"
      />
      <Grid item>
        <Typography component="h1" variant="h5">
          <Link to="/">Para a página inicial, voltar! </Link>
        </Typography>
      </Grid>
      <CssBaseline />
    </Grid>
  );
};

export default NotFound;
