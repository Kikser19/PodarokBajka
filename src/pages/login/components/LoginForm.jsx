import { Box, Button, Checkbox, Grid, Link, TextField, Typography } from '@mui/material';
import './login-form.scss';
import CustomTextfield from '../../../shared/components/CustomTextfield';

function LoginForm () {
  return <Box id={'login-form'}>
    <Typography className={'title'}>WELCOME BACK</Typography>
    <Typography className={'subtitle'}>Welcome back! Please enter your credentials.</Typography>
    <Box className={'inputs'}>
      <Typography className={'text-font'}>Email</Typography>
      <CustomTextfield type='text'/>
      <Typography className={'text-font'}>Password</Typography>
      <CustomTextfield type='password'/>
    </Box>
    <Grid container>
      <Grid item xs={5} className={'remember-me-container'}>
        <Checkbox className={'checkbox'} sx={{ fill: '#636364FF' }}/>
        <Typography className={'text-font'}>Remember me</Typography>
      </Grid>
      <Grid item xs={6} className={'forgot-password-container'}>
        <Typography className={'text-font forgot-pass-font'}>
          <Link color='inherit' underline={'hover'} href={'/forgotPassword'}>Forgot Password</Link>
        </Typography>
      </Grid>
    </Grid>
    <Button variant={'contained'} style={{textTransform: 'none'}} className={'sign-in-button'}>Sign in</Button>
    <Typography className={'question-font'}>Don't have an account?</Typography>
    <Typography className={'text-font forgot-pass-font'}><Link color={'inherit'} underline={'hover'} href={'/signup'}>Sign
      up for free!</Link></Typography>
  </Box>;
}

export default LoginForm;