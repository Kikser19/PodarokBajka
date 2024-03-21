import './login.scss'
import { Container, Grid, Typography } from '@mui/material';
import LoginForm from './components/LoginForm';

function Login () {
  return <Container maxWidth={'xl'} fixed >
    <Grid container spacing={2} id={'login-page-grid-container'}>
      <Grid item xs={6}>
        <LoginForm/>
      </Grid>
      <Grid item xs={6}>
image
      </Grid>
    </Grid>
  </Container>
}

export default Login;