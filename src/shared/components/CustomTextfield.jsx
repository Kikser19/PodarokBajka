import { TextField } from '@mui/material';
import './custom-textfield.scss'

interface CustomTextFieldProps {
  type: string
}

function CustomTextfield ({ type } : CustomTextFieldProps) {
  return <TextField type={type} variant={'standard'} InputProps={{ disableUnderline: true }}
             sx={{ input: { color: '#636364', height: '3rem', fontSize: '24px', fontFamily: 'Post No Bills'} }}
             className={'text-input'}/>
}

export default CustomTextfield;