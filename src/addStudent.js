import React from 'react';
import {Button} from '@material-ui/core'
import FormGroup from '@material-ui/core/FormGroup';
import { TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import AddCircleIcon from '@material-ui/icons/AddCircle';

class AddStudent extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            school: "",
            gpa: 0,
        }
    this.handleFormChanges = this.handleFormChanges.bind(this);

    }

    handleFormChanges(event) {
        let nam = event.target.name;
    
        let val = event.target.value;
    
        this.setState({ [nam]:val });
      }

    formSubmitHandler = (event) => {
        event.preventDefault();
    
        console.log("Testing the state");
        console.log(this.state);
        
    
        let values = this.state;
        alert("We submitted a form with this data " + values.firstName);

        (async () => {
            const rawResponse = await fetch('/Students', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(values)
            });
            const content = await rawResponse.json();
            console.log("This is the content");
            console.log(content);
          })();
    }
    

    render(){ 
        return(
            <form onSubmit={this.formSubmitHandler} className ='insert' >

                <TextField
                    variant='filled'
                    color='secondary'
                    type='text'
                    value = {this.state.firstName} 
                    onChange={this.handleFormChanges}
                    name= 'firstName'
                    label='firstName'
                    placeholder='First Name'/>
                <TextField
                    variant='filled'
                    color='secondary'
                    type='text'
                    value = {this.state.lastName} 
                    onChange={this.handleFormChanges}
                    name= 'lastName'
                    label='lastName'
                    placeholder='Last Name' />
                <TextField
                    variant='filled'
                    color='secondary'
                    type='email'
                    value = {this.state.email} 
                    onChange={this.handleFormChanges}
                    name= 'email'
                    label='email'
                    placeholder='Email' />
                <TextField
                    variant='filled'
                    color='secondary'
                    type='text'
                    value = {this.state.school} 
                    onChange={this.handleFormChanges}
                    name= 'school'
                    label='school'
                    placeholder='University' />
                <TextField
                    variant='filled'
                    color='secondary'
                    type='number'
                    value = {this.state.gpa} 
                    onChange={this.handleFormChanges}
                    name= 'gpa'
                    step='0.01'
                    min='0'
                    max='4'
                    label='gpa'
                    placeholder='GPA' />
                <input type="submit" />
                    
                {/* <Button><AddCircleIcon type ="submit"/></Button> */}

            </form>
        )
    }


}
export default AddStudent;