import React from 'react';
import {Button} from '@material-ui/core'
import FormGroup from '@material-ui/core/FormGroup';
import { TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import AddCircleIcon from '@material-ui/icons/AddCircle';

class AddCampus extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            campusName: "",
            imageURL: "",
            address: "",
            description: "",
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
        alert("We submitted a form with this data " + values.campusName);

        (async () => {
            const rawResponse = await fetch('/Campus', {
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
                    value= {this.state.campusName}
                    onChange= {this.handleFormChanges}
                    name ='campusName'
                    label='campusname'
                    placeholder='Campus' />
                <TextField
                    variant='filled'
                    color='secondary'
                    type='text'
                    value= {this.state.imageURL}
                    onChange= {this.handleFormChanges}
                    name ='imageURL'
                    label='imageURL'
                    placeholder='Insert Image URL' />
                <TextField
                    variant='filled'
                    color='secondary'
                    type='text'
                    value= {this.state.address}
                    onChange= {this.handleFormChanges}
                    name ='address'
                    label='address'
                    placeholder='Address' />
                <TextField
                    variant='filled'
                    color='secondary'
                    type='text'
                    value= {this.state.description}
                    onChange= {this.handleFormChanges}
                    name ='description'
                    label='description'
                    placeholder='Description' />
                <input type="submit" />

                {/* <Button><AddCircleIcon type ="submit"/></Button> */}
                {/* change url type */}
             </form>
        )
    }

}
export default AddCampus;