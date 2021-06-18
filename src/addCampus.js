import {Button} from '@material-ui/core'
import FormGroup from '@material-ui/core/FormGroup';
import { TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import AddCircleIcon from '@material-ui/icons/AddCircle';

function AddCampus(props){

    const onSubmit = (e) =>{
        e.preventDefault();
        console.log()
        props.close();
    }

  return(
    <form className ='insert' onSubmit= {onSubmit} >

        <TextField
            variant='filled'
            color='secondary'
            name ='firstName'
            type='text'
            label='First Name'
            placeholder='First Name' />
        <TextField
            variant='filled'
            color='secondary'
            name='lastName'
            type='text'
            label='Last Name'
            placeholder='Last Name' />
        <TextField
            variant='filled'
            color='secondary'
            name='email'
            type='email'
            label='Email'
            placeholder='Email' />
        <TextField
            variant='filled'
            color='secondary'
            name='university'
            type='text'
            label='University'
            placeholder='University' />
        <TextField
            variant='filled'
            color='secondary'
            name='gpa'
            type='text'
            label='GPA'
            placeholder='GPA' />
            
        <Button><AddCircleIcon type ="submit"/></Button>
  </form>
  )
}

export default AddCampus;