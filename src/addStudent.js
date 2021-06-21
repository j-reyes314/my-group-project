import React from 'react';
import { TextField, Button } from '@material-ui/core';


class AddStudent extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            imageURL: "",
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
        // alert("We submitted a form with this data " + values.firstName);

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
            this.props.close();
          })();
          
          
    }
    

    render(){ 
        return(
            <form onSubmit={this.formSubmitHandler} className ='insert' >

                <TextField
                    required    
                    variant='filled'
                    color='secondary'
                    type='text'
                    value = {this.state.firstName} 
                    onChange={this.handleFormChanges}
                    name= 'firstName'
                    label='firstName'
                    placeholder='First Name'/>
                <TextField
                    required
                    variant='filled'
                    color='secondary'
                    type='text'
                    value = {this.state.lastName} 
                    onChange={this.handleFormChanges}
                    name= 'lastName'
                    label='lastName'
                    placeholder='Last Name' />
                <TextField
                    required
                    variant='filled'
                    color='secondary'
                    type='email'
                    value = {this.state.email} 
                    onChange={this.handleFormChanges}
                    name= 'email'
                    label='email'
                    placeholder='Email' />
                <TextField
                    required
                    variant='filled'
                    color='secondary'
                    type='text'
                    value = {this.state.imageURL} 
                    onChange={this.handleFormChanges}
                    name= 'imageURL'
                    label='imageURL'
                    placeholder='Image URL' />
                <TextField
                    required
                    variant='filled'
                    color='secondary'
                    type='text'
                    value = {this.state.school} 
                    onChange={this.handleFormChanges}
                    name= 'school'
                    label='school'
                    placeholder='University' />
                <TextField
                    required
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
                    <Button variant='contained' type="submit">Submit</Button>
                    

            </form>
        )
    }


}
export default AddStudent;