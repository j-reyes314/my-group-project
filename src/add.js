import {Button} from '@material-ui/core'
import FormGroup from '@material-ui/core/FormGroup';
import { TextField } from '@material-ui/core';

function Add(props){

  <form className ='insert' >
   
    {/* <input type ="text" name="zip-code"/> */}
    <TextField
        variant='filled'
        color='secondary'
        type='text'
        label='name'
        placeholder='John Doe' />
    <TextField
        variant='filled'
        color='secondary'
        type='text'
        label='School'
        placeholder='University' />
    <TextField
        variant='filled'
        color='secondary'
        type='email'
        label='Email'
        placeholder='john_doe@university.com' />
        
        <Button><input type="submit"/></Button>
  </form>

}

export default Add;