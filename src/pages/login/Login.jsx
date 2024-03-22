import './login.scss'
import { Container, Grid } from '@mui/material';
import LoginForm from './components/LoginForm';
import RunnerImage from '../../images/RunnerImage.png'

function Login () {
  return <Container maxWidth={'xl'} fixed id={'login-page-container'}>
    <Grid container spacing={2} className={'login-page-grid-container'}>
      <Grid item xs={6}>
        <LoginForm/>
      </Grid>
      <Grid item xs={6}>
        <img src={RunnerImage} alt='Runner'/>
      </Grid>
    </Grid>
  </Container>
}

export default Login;