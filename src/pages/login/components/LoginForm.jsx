import { Box, TextField, Typography } from '@mui/material';
import './login-form.scss'

function LoginForm () {
  return <Box id={'login-form'}>
    <Typography className={'title'}>WELCOME BACK</Typography>
    <Typography className={'text-font'}>Welcome back! Please enter your credentials.</Typography>
    <Box className={'inputs'}>
    <Typography className={'text-font'}>Email</Typography>
    <TextField className={'text-input'}/>
    <Typography className={'text-font'}>Password</Typography>
    <TextField className={'text-input'}/>
    </Box>
  </Box>
}

export default LoginForm;