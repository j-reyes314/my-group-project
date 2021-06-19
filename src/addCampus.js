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
            campusname: "",
            imageurl: "",
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
        alert("We submitted a form with this data " + values.campusname);

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
                    value= {this.state.campusname}
                    onChange= {this.handleFormChanges}
                    name ='campusname'
                    label='campusname'
                    placeholder='Campus' />
                <TextField
                    variant='filled'
                    color='secondary'
                    type='text'
                    value= {this.state.imageurl}
                    onChange= {this.handleFormChanges}
                    name ='imageurl'
                    label='imageurl'
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
             
             </form>
        )
    }

}
export default AddCampus;