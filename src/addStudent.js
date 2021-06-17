import {Button} from '@material-ui/core'
import FormGroup from '@material-ui/core/FormGroup';
import { TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import AddCircleIcon from '@material-ui/icons/AddCircle';

function AddStudent(props){

  return(
  <form className ='insert' >

    <TextField
        variant='filled'
        color='secondary'
        type='text'
        label='firstName'
        placeholder='First Name' />
    <TextField
        variant='filled'
        color='secondary'
        type='text'
        label='lastName'
        placeholder='Last Name' />
    <TextField
        variant='filled'
        color='secondary'
        type='email'
        label='email'
        placeholder='Email' />
    <TextField
        variant='filled'
        color='secondary'
        type='text'
        label='School'
        placeholder='University' />
    <TextField
        variant='filled'
        color='secondary'
        type='text'
        label='gpa'
        placeholder='GPA' />
        
        <Button><AddCircleIcon type ="submit"/></Button>
  </form>
  )
}

export default AddStudent;